"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, AudioLines, HeartPulse, KanbanSquare, Laptop, MessagesSquare, Smartphone, FileText, ShieldCheck, UsersRound, UserRound } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import BrandBadge from "@/components/BrandBadge";
import "swiper/css";

const covers = {
  sync: { icon: Smartphone, name: "Connectivity", caption: "Your clipboard, on every device.", label: "Cross-device sync" },
  ecg: { icon: HeartPulse, name: "ECG detection", caption: "From an ECG image to a report.", label: "Medical imaging" },
  chat: { icon: MessagesSquare, name: "Octagram", caption: "Chat with anyone by username.", label: "Android chat app" },
  tracker: { icon: KanbanSquare, name: "TrackFlow", caption: "Issues that follow the workflow.", label: "Issue tracker" },
  reliability: { icon: ShieldCheck, name: "Failo", caption: "Keep the conversation going.", label: "LLM reliability" },
  documents: { icon: FileText, name: "FluidAI", caption: "From a request to a Word document.", label: "Document automation" },
  voice: { icon: AudioLines, name: "Dinodial", caption: "Voice calls for restaurant bookings.", label: "Restaurant voice agent" },
  workspace: { icon: UsersRound, name: "WorkSphere", caption: "Employee records, in one place.", label: "Full-stack assessment" },
};

function ProjectThumbnail({ type }) {
  const { icon: Icon, name, caption, label } = covers[type];

  return (
    <div className={`project-thumbnail preview-${type}`} aria-hidden="true">
      <div className="preview-topline"><span className="preview-symbol"><Icon size={20} /></span><span>{label}</span></div>
      <div className="preview-brand"><strong>{name}</strong><span>{caption}</span></div>
      <div className="preview-window">
        <div className="preview-window-bar"><i /><i /><i /><span>{{ reliability: "request.py", tracker: "board", sync: "devices", ecg: "report", chat: "chat" }[type] ?? "workspace"}</span></div>
        {type === "reliability" ? (
          <div className="preview-code"><span><b>request</b> → LLM provider</span><span className="preview-dim">↳ timeout · retry with backoff</span><span className="preview-success">↳ fallback · response received</span></div>
        ) : type === "sync" ? (
          <div className="preview-sync"><span><Laptop size={16} /> macOS</span><i>⇄ clipboard</i><span><Smartphone size={16} /> Phone</span></div>
        ) : type === "ecg" ? (
          <div className="preview-ecg"><svg viewBox="0 0 240 70" preserveAspectRatio="none"><polyline points="0,40 40,40 50,34 58,40 78,40 84,48 92,8 100,58 108,40 130,40 142,30 154,40 190,40 196,48 204,12 212,56 220,40 240,40" /></svg><span>Prediction · normal</span></div>
        ) : type === "chat" ? (
          <div className="preview-chat"><span>Hey, are you free today?</span><span className="is-own">Yes, call me at 5</span><span>Sounds good 👍</span></div>
        ) : type === "tracker" ? (
          <div className="preview-board">{[["To Do", ["TF-12", "TF-15"]], ["In Progress", ["TF-9"]], ["Done", ["TF-4", "TF-7"]]].map(([column, cards]) => <div key={column}><span>{column}</span>{cards.map((card) => <i key={card}>{card}</i>)}</div>)}</div>
        ) : type === "workspace" ? (
          <div className="preview-records">{["Create", "View", "Update"].map((action, i) => <div key={action}><UserRound size={14} /><span>Record 0{i + 1}</span><span>{action}</span></div>)}</div>
        ) : type === "documents" ? (
          <div className="preview-document-flow"><span>Request</span><ArrowRight size={16} /><span>Gemini</span><ArrowRight size={16} /><span>.docx</span></div>
        ) : (
          <div className="preview-wave">{[18, 32, 22, 48, 64, 38, 56, 26, 44, 68, 52, 30, 60, 42, 22, 48, 32, 16, 36, 54, 40, 24, 14].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div>
        )}
      </div>
    </div>
  );
}

export default function ProjectSlider({ projects }) {
  const swiperRef = useRef(null);
  const [position, setPosition] = useState({ index: 0, count: 1, beginning: true, end: false });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const updatePosition = (swiper) => {
    setPosition({ index: swiper.activeIndex, count: Number(swiper.params.slidesPerView), beginning: swiper.isBeginning, end: swiper.isEnd });
  };

  const move = (direction) => {
    swiperRef.current?.[direction === "next" ? "slideNext" : "slidePrev"]();
  };

  return (
    <div className="project-slider" role="region" aria-roledescription="carousel" aria-label="Personal projects">
      <div className="project-slider-toolbar">
        <p>Swipe or use the arrows <ArrowRight size={14} aria-hidden="true" /></p>
        <div className="project-slider-controls">
          <span className="project-count" aria-live="polite" aria-atomic="true">
            <span className="sr-only">Showing projects </span>
            {String(position.index + 1).padStart(2, "0")}
            {position.count > 1 && `–${String(Math.min(position.index + position.count, projects.length)).padStart(2, "0")}`}
            <span className="count-total"> / {String(projects.length).padStart(2, "0")}</span>
          </span>
          <button type="button" onClick={() => move("previous")} disabled={position.beginning} aria-label="Previous project" aria-controls="project-slides"><ArrowLeft size={19} /></button>
          <button type="button" onClick={() => move("next")} disabled={position.end} aria-label="Next project" aria-controls="project-slides"><ArrowRight size={19} /></button>
        </div>
      </div>
      <Swiper
        id="project-slides"
        modules={[A11y]}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{ 760: { slidesPerView: 2, spaceBetween: 24 } }}
        speed={reducedMotion ? 0 : 450}
        onSwiper={(swiper) => { swiperRef.current = swiper; updatePosition(swiper); }}
        onSlideChange={updatePosition}
        onResize={updatePosition}
        onBreakpoint={updatePosition}
        a11y={{ slideLabelMessage: "Project {{index}} of {{slidesLength}}" }}
        className="projects-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.number}>
            <article className="project-card" inert={index < position.index || index >= position.index + position.count ? true : undefined}>
              <ProjectThumbnail type={project.preview} />
              <div className="project-details">
                <div className="project-category"><span>{project.eyebrow}</span><span>{project.number}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <BrandBadge name={tag} compact key={tag} />)}</div>
                <div className="project-card-footer">
                  <Link href={project.href} target="_blank" rel="noopener noreferrer" className="project-github" aria-label={`View ${project.title} on GitHub (opens in a new tab)`}><SiGithub size={18} /> View on GitHub <ArrowUpRight size={16} /></Link>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
