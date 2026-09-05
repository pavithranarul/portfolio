"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";

const initialForm = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (form.website) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setFeedback("The mail service is not configured yet. Please email me directly.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      const senderName = form.from_name.trim();
      const senderEmail = form.from_email.trim();
      const subject = form.subject.trim();
      const message = form.message.trim();

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_name: "Pavithran Arul",
            from_name: senderName,
            from_email: senderEmail,
            reply_to: senderEmail,
            subject,
            message,
          },
        }),
      });

      if (!response.ok) {
        const reason = await response.text();
        throw new Error(reason || "EmailJS rejected the request.");
      }

      setForm(initialForm);
      setStatus("success");
      setFeedback("Message sent. I'll get back to you as soon as I can.");
    } catch (error) {
      console.error("EmailJS contact form error:", error);
      setStatus("error");
      setFeedback("The message could not be sent. Please try again or use the direct email link.");
    }
  };

  return (
    <form className="contact-form" onSubmit={submitForm}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="from_name" value={form.from_name} onChange={updateField} autoComplete="name" placeholder="Your name" minLength={2} maxLength={80} required />
        </label>
        <label>
          <span>Email</span>
          <input name="from_email" type="email" value={form.from_email} onChange={updateField} autoComplete="email" placeholder="you@company.com" maxLength={120} required />
        </label>
      </div>

      <label>
        <span>Subject</span>
        <input name="subject" value={form.subject} onChange={updateField} placeholder="What are you building?" minLength={3} maxLength={120} required />
      </label>

      <label>
        <span>Message</span>
        <textarea name="message" value={form.message} onChange={updateField} placeholder="Tell me about the problem, timeline, and where I can help." minLength={10} maxLength={3000} rows={5} required />
      </label>

      <label className="form-honeypot" aria-hidden="true">
        Website
        <input name="website" value={form.website} onChange={updateField} tabIndex={-1} autoComplete="off" />
      </label>

      <div className="form-footer">
        <p className={`form-feedback ${status}`} aria-live="polite">
          {status === "success" && <CheckCircle2 size={16} />}
          {status === "error" && <AlertCircle size={16} />}
          {feedback || "Your details stay between us."}
        </p>
        <button className="form-submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? <LoaderCircle className="spin" size={17} /> : <Send size={16} />}
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
