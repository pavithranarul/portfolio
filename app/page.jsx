import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Building2, GraduationCap, MapPin, MessageSquare, Trophy } from "lucide-react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import BrandBadge from "@/components/BrandBadge";
import ContactForm from "@/components/ContactForm";
import ProjectSlider from "@/components/ProjectSlider";
import { earlierExperience, personalProjects, profile, skillGroups } from "@/lib/portfolio";

function SectionHeading({ index, eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <div className="section-kicker"><span>{index}</span>{eyebrow}</div>
      <div className="section-title-row">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <section className="hero section-shell" aria-label="Introduction">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <div className="availability"><span /> Currently at Mittai INC</div>
          <p className="hero-label">Python developer · Backend & AI</p>
          <h1>I’m Pavithran Arul.<em> A Python developer.</em></h1>
          <p className="hero-summary">At Mittai INC, I contribute to CareScribe’s backend and AI workflows. Outside work, I build Python tools, document automation, and voice applications.</p>
          <div className="hero-stack">{["Python", "FastAPI", "Gemini API", "SQL", "Git"].map((skill) => <BrandBadge name={skill} compact key={skill} />)}</div>
          <div className="hero-actions">
            <Link href="#work" className="button button-primary">Personal projects <ArrowDown size={17} /></Link>
            <Link href={profile.github} target="_blank" rel="noopener noreferrer" className="button button-ghost">GitHub <ArrowUpRight size={16} /></Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <Image src="/assets/heros.jpeg" alt="Portrait of Pavithran Arul" fill priority sizes="(max-width: 900px) 380px, 440px" className="portrait-image" />
            <div className="portrait-shade" />
            <div className="portrait-label"><span>Based in</span>Tiruppur, India</div>
            <div className="portrait-code">PA / 01</div>
          </div>
          <div className="orbit-card"><Building2 size={17} /><div><span>Working on</span>CareScribe at Mittai INC</div></div>
        </div>
        <div className="hero-footer"><span>Company work & personal projects</span><span className="hero-footer-line" /><span>Scroll to explore</span></div>
      </section>

      <section id="experience" className="content-section section-shell">
        <SectionHeading index="01" eyebrow="Work experience" title="Building at Mittai INC." copy="My current work in healthcare software, and the internships that shaped my foundation in development." />
        <article className="employment-card">
          <div className="employment-summary">
            <div className="experience-status"><span /> Current role</div>
            <div className="employment-company"><Building2 size={24} /><h3>Mittai INC</h3></div>
            <p className="employment-role">Python development · Backend & AI</p>
            <p>I work on CareScribe as part of the Mittai INC team, contributing to backend development and AI-powered healthcare workflows.</p>
            <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">Experience on LinkedIn <ArrowUpRight size={15} /></Link>
          </div>
          <div className="employment-product">
            <span className="employment-label"><BriefcaseBusiness size={15} /> Product I work on</span>
            <h3>CareScribe</h3>
            <p>Clinical documentation software that helps healthcare teams turn conversations and notes into structured information.</p>
            <div className="contribution-note"><span>My contribution</span><p>Python backend development and AI integrations within the product team.</p></div>
            <div className="employment-product-footer">
              <Link href={profile.carescribe} target="_blank" rel="noopener noreferrer" className="text-link">Explore CareScribe <ArrowUpRight size={15} /></Link>
              <span className="company-work-label">Company work</span>
            </div>
          </div>
          <div className="team-recognition"><Trophy size={18} /><p><strong>CareScribe team recognition</strong><span>CII WR 2025 · Celebrating the team’s work in clinical documentation.</span></p></div>
        </article>
        <div className="experience-subheading"><h3>Earlier experience</h3><span>Internships & foundations</span></div>
        <div className="career-grid">
          {earlierExperience.map((item) => (
            <article className="career-card" key={item.company}>
              <span className="career-date">{item.date}</span>
              <h4>{item.role}</h4>
              <p className="career-company">{item.company}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="content-section section-shell">
        <SectionHeading index="02" eyebrow="Personal projects" title="Built outside my day job." copy="Independent tools, experiments and assessment work from my GitHub. Each card links to the code and describes what the project does." />
        <ProjectSlider projects={personalProjects} />
        <Link href={profile.github + "?tab=repositories"} target="_blank" rel="noopener noreferrer" className="text-link projects-all-link">Browse all repositories <ArrowUpRight size={15} /></Link>
      </section>

      <section id="stack" className="content-section section-shell">
        <SectionHeading index="03" eyebrow="Technical skills" title="Tools I use, and where." copy="The languages and tools behind my projects and development experience." />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <p>{group.description}</p>
              <div>{group.skills.map((skill) => <BrandBadge name={skill} key={skill} />)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="content-section section-shell">
        <SectionHeading index="04" eyebrow="About & education" title="A little about me." />
        <div className="about-grid">
          <div className="about-copy">
            <p className="about-lead">I’m a computer science graduate from Annamalai University, based in Tiruppur.</p>
            <p>My early experience covered Java web development and machine learning. Today, I work on Python backends and AI applications at Mittai INC.</p>
            <p>I use personal projects to explore practical ideas: making AI calls more resilient, generating business documents, and connecting voice agents to everyday workflows.</p>
            <div className="about-profile-links">
              <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-link"><SiLinkedin size={16} /> LinkedIn profile <ArrowUpRight size={15} /></Link>
              <Link href={profile.github} target="_blank" rel="noopener noreferrer" className="text-link"><SiGithub size={16} /> GitHub profile <ArrowUpRight size={15} /></Link>
            </div>
          </div>
          <aside className="education-card" aria-label="Education">
            <div className="education-eyebrow"><GraduationCap size={21} /><span>Education</span></div>
            <p className="education-date">2021 – 2025</p>
            <h3>B.E. Computer Science & Engineering</h3>
            <p className="education-university">Annamalai University</p>
            <p>Chidambaram, Tamil Nadu</p>
            <div className="education-details"><span>GPA <strong>8.68 / 10</strong></span><p>Coursework in data structures, algorithms and computational theory.</p></div>
          </aside>
        </div>
      </section>

      <section id="contact" className="contact-section section-shell">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-grid">
          <div className="contact-intro">
            <div className="contact-eyebrow"><MessageSquare size={17} /> Get in touch</div>
            <h2>Let’s talk about software.</h2>
            <p>Have a question about my projects or want to connect about Python and AI development? I’d be glad to hear from you.</p>
            <div className="contact-direct"><span>Prefer email?</span><Link href={"mailto:" + profile.email}>{profile.email} <ArrowUpRight size={14} /></Link></div>
          </div>
          <ContactForm />
        </div>
        <div className="contact-meta"><span><MapPin size={14} /> {profile.location}</span><span>Python · Backend development · AI integrations</span></div>
      </section>

      <footer className="site-footer section-shell">
        <div><span className="footer-mark">PA</span><p>Pavithran Arul · Python developer at Mittai INC.</p></div>
        <div className="footer-links">
          <Link href={profile.github} target="_blank" rel="noopener noreferrer"><SiGithub className="github-brand" size={17} /> GitHub</Link>
          <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer"><SiLinkedin className="linkedin-brand" size={17} /> LinkedIn</Link>
          <Link href={"mailto:" + profile.email}><SiGmail className="gmail-brand" size={17} /> Email</Link>
        </div>
        <p>© 2026 Pavithran Arul</p>
      </footer>
    </main>
  );
}
