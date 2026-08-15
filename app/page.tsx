"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Box, ChevronLeft, ChevronRight, Clapperboard, Code2, Gamepad2, Play } from "lucide-react";

export const dynamic = "force-static";

const projects = [
  {
    title: "FrontEnd",
    description: "Responsive, accessible websites and interfaces that are quick to load, easy to use, and ready to grow with your work.",
    icon: Code2,
    slug: "frontend",
  },
  {
    title: "Game Development",
    description: "Playable prototypes, mechanics, and interactive systems focused on clear feedback, strong controls, and engaging ideas.",
    icon: Gamepad2,
    slug: "game-development",
  },
  {
    title: "Animation",
    description: "Motion pieces, title sequences, and edited visuals that turn a concept into a clear and memorable story.",
    icon: Clapperboard,
    slug: "animation",
  },
  {
    title: "3D Modeling",
    description: "Objects, scenes, and polished renders built with attention to form, materials, lighting, and presentation.",
    icon: Box,
    slug: "3d-modeling",
  },
  {
    title: "Media",
    description: "Campaign videos, app showcases, and focused edits that bring a clear message to the screen.",
    icon: Play,
    slug: "media",
  },
];

const focusAreas = ["FrontEnd", "Game development", "Animation", "3D modeling", "Media"];

export default function Home() {
  const [dark, setDark] = useState(true);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const workSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("rjsd-theme");
    if (saved !== "light" && saved !== "dark") return;

    const frame = window.requestAnimationFrame(() => setDark(saved === "dark"));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    setDark((current) => {
      const next = !current;
      window.localStorage.setItem("rjsd-theme", next ? "dark" : "light");
      return next;
    });
  }

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Portfolio project inquiry");
    const message = String(data.get("message") || "");

    setSubmitStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/roel.john20002@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: `RJSD portfolio inquiry: ${subject}`,
          _replyto: email,
          _template: "table",
          _honey: String(data.get("_honey") || ""),
          source_page: window.location.href,
        }),
      });
      const result = await response.json() as { success?: boolean | string };
      if (!response.ok || result.success === false || result.success === "false") throw new Error("Submission failed");

      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  }

  function slideWork(direction: -1 | 1) {
    const slider = workSliderRef.current;
    const card = slider?.querySelector<HTMLElement>(".project-card");
    if (!slider || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(slider).columnGap) || 24;
    slider.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  }

  return (
    <div className={`portfolio-app ${dark ? "theme-dark" : "theme-light"}`} id="top">
      <header className="site-header">
        <nav className="header-nav" aria-label="Main navigation">
          <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}><span>{dark ? "☼" : "◐"}</span><small>{dark ? "Light" : "Dark"}</small></button>
          <a className="brand" href="#top" aria-label="RJSD home"><span>RJ</span><b>SD</b></a>
        </nav>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot" /> Available for creative projects</p>
            <h1 id="hero-title">Hi, I&apos;m <span className="accent-text">RJSD</span><span className="hero-dot">.</span></h1>
            <p className="hero-description">I build thoughtful digital work across web development, game development, animation, 3D modeling, and media — bringing ideas from first sketch to final frame.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">View work <span>-&gt;</span></a><a className="button button-quiet" href="#contact">Get in touch <span>-&gt;</span></a></div>
            <div className="stats" aria-label="Portfolio stats"><div><strong>04</strong><span>Projects done</span></div><div><strong>05</strong><span>Creative areas</span></div></div>
          </div>
          <div className="hero-visual" aria-label="RJSD creative workspace graphic" role="img"><div className="visual-glow" /><div className="visual-grid" /><div className="visual-card visual-card-main"><span className="visual-kicker">Creative workspace</span><strong>RJ<br /><em>SD</em></strong><span className="visual-footer">Ideas in motion / 2024</span></div><div className="visual-card visual-card-side"><span>01</span><i>+</i><span>05</span></div><div className="visual-ring" /></div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">What I do</p><h2 id="work-title">Selected <em>work</em></h2></div>
            <div className="slider-controls" aria-label="Selected work controls">
              <button type="button" onClick={() => slideWork(-1)} aria-label="Show previous work"><ChevronLeft size={20} /></button>
              <button type="button" onClick={() => slideWork(1)} aria-label="Show next work"><ChevronRight size={20} /></button>
            </div>
          </div>
          <div className="project-grid" ref={workSliderRef} role="region" aria-label="Selected work slider" tabIndex={0}>
            {projects.map(({ title, description, icon: Icon, slug }) => (
              <a className="project-card" href={`./work/${slug}`} key={title} aria-label={`View ${title} work page`}>
                <span className="project-icon" aria-hidden="true"><Icon size={23} strokeWidth={1.9} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="project-card-link">View page <ArrowUpRight size={16} aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title"><div className="about-intro"><p className="eyebrow">The workspace</p><h2 id="about-title">Built to <em>explore.</em></h2><p className="about-lead">A portfolio for making, learning, and turning rough ideas into work that feels clear, useful, and alive.</p></div><div className="focus-panel"><p className="eyebrow">Current focus</p><ul>{focusAreas.map((area, index) => <li key={area}><span>0{index + 1}</span>{area}<b>-&gt;</b></li>)}</ul></div></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-card"><div className="contact-copy"><p className="eyebrow">Get in touch</p><h2 id="contact-title">Let&apos;s work<br /><em>together.</em></h2><p className="contact-intro">I&apos;m open to web, game, animation, 3D, and media projects — short or long-term. Have something in mind? Let&apos;s talk.</p><div className="contact-details"><a href="mailto:roel.john20002@gmail.com"><span className="contact-icon">@</span>roel.john20002@gmail.com</a><a href="https://www.linkedin.com/in/roel-john-delute-54b904382" target="_blank" rel="noreferrer"><span className="contact-icon">in</span>linkedin.com/in/roel-john-delute-54b904382</a><a href="https://github.com/Atlaski7/Roel-John-Delute-portfolio" target="_blank" rel="noreferrer"><span className="contact-icon">&lt;&gt;</span>github.com/Atlaski7/Roel-John-Delute-portfolio</a></div></div><form className="contact-form" onSubmit={handleContactSubmit}><label className="form-honeypot" aria-hidden="true">Leave this empty<input name="_honey" tabIndex={-1} autoComplete="off" /></label><div className="form-row"><label>Name *<input name="name" required placeholder="Your name" /></label><label>Email *<input name="email" type="email" required placeholder="you@example.com" /></label></div><label>Subject<input name="subject" placeholder="Project inquiry" /></label><label>Message *<textarea name="message" required placeholder="Tell me about your project..." rows={5} /></label><button className="form-submit" type="submit" disabled={submitStatus === "sending"}>{submitStatus === "sending" ? "Sending..." : "Send message"} <span>-&gt;</span></button><p className={`form-status form-status-${submitStatus}`} role="status" aria-live="polite">{submitStatus === "success" ? "Thanks! Your message has been submitted." : submitStatus === "error" ? "The message could not be sent. Please email me directly instead." : ""}</p></form></div></section>
      </main>

      <footer className="site-footer"><span>RJSD / Creative workspace</span><span>Web · Games · Motion · 3D · Media</span><a href="#top">Back to top ^</a></footer>
    </div>
  );
}
