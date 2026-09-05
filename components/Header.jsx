"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { profile } from "@/lib/portfolio";

const links = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#work" },
  { label: "Skills", href: "/#stack" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { label: "GitHub", href: profile.github, icon: SiGithub, color: "var(--github-brand)" },
  { label: "LinkedIn", href: profile.linkedin, icon: SiLinkedin, color: "#0A66C2" },
  { label: "Email", href: "mailto:" + profile.email, icon: SiGmail, color: "#EA4335" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const initial = saved === "light" || saved === "dark" ? saved : preferred;
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("portfolio-theme", next);
  };

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link href="/#top" className="wordmark" onClick={() => setOpen(false)} aria-label="Pavithran Arul — home">
          PAVITHRAN<span>.</span>
        </Link>

        <div className="desktop-nav">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <Sun size={19} /> : <Moon size={18} />}
          </button>
          <div className="nav-socials">
            {socials.map(({ label, href, icon: Icon, color }) => (
              <Link key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} aria-label={label}>
                <Icon size={18} style={{ color }} />
              </Link>
            ))}
          </div>
          <Link className="nav-contact" href="/#contact">Let&apos;s talk <ArrowUpRight size={16} /></Link>
        </div>

        <div className="mobile-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <span>0{index + 1}</span>{link.label}<ArrowUpRight size={18} />
            </Link>
          ))}
          <div className="mobile-socials">
            {socials.map(({ label, href, icon: Icon, color }) => (
              <Link key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} tabIndex={open ? 0 : -1}>
                <Icon size={17} style={{ color }} />{label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
