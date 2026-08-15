"use client";

import { FormEvent, useEffect, useState } from "react";

export const dynamic = "force-static";

const projects = [
  { number: "01", title: "Portfolio systems", type: "Web development · UI", year: "2024", tone: "blue", mark: "W" },
  { number: "02", title: "Pixel playground", type: "Game development · Prototype", year: "2024", tone: "violet", mark: "G" },
  { number: "03", title: "Motion studies", type: "Animation · Editing", year: "2023", tone: "cyan", mark: "A" },
  { number: "04", title: "Form + space", type: "3D modeling · Render", year: "2023", tone: "slate", mark: "3D" },
];

const focusAreas = ["Web development", "Game development", "Animation", "3D modeling", "Video editing"];

export default function Home() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = window.localStorage.getItem("rjsd-theme");
    if (saved === "light" || saved === "dark") setDark(saved === "dark");
  }, []);

  function toggleTheme() {
    setDark((current) => {
      const next = !current;
      window.localStorage.setItem("rjsd-theme", next ? "dark" : "light");
      return next;
    });
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") || "Portfolio project inquiry");
    const message = String(data.get("message") || "");
    window.location.href = `mailto:roel.john20002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
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
            <p className="hero-description">I build thoughtful digital work across web development, game development, animation, 3D modeling, and editing — bringing ideas from first sketch to final frame.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">View work <span>-&gt;</span></a><a className="button button-quiet" href="#contact">Get in touch <span>-&gt;</span></a></div>
            <div className="stats" aria-label="Portfolio stats"><div><strong>04</strong><span>Projects done</span></div><div><strong>05</strong><span>Creative areas</span></div></div>
          </div>
          <div className="hero-visual" aria-label="RJSD creative workspace graphic" role="img"><div className="visual-glow" /><div className="visual-grid" /><div className="visual-card visual-card-main"><span className="visual-kicker">Creative workspace</span><strong>RJ<br /><em>SD</em></strong><span className="visual-footer">Ideas in motion / 2024</span></div><div className="visual-card visual-card-side"><span>01</span><i>+</i><span>05</span></div><div className="visual-ring" /></div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading"><div><p className="eyebrow">A growing archive</p><h2 id="work-title">Selected <em>work</em></h2></div><span className="section-index">01 / 02</span></div>
          <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.number}><div className="card-top"><span>{project.number}</span><span>{project.year}</span></div><div className="project-mark">{project.mark}</div><div className="card-bottom"><div><h3>{project.title}</h3><p>{project.type}</p></div><span className="card-arrow">-&gt;</span></div></article>)}</div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title"><div className="about-intro"><p className="eyebrow">The workspace</p><h2 id="about-title">Built to <em>explore.</em></h2><p className="about-lead">A portfolio for making, learning, and turning rough ideas into work that feels clear, useful, and alive.</p></div><div className="focus-panel"><p className="eyebrow">Current focus</p><ul>{focusAreas.map((area, index) => <li key={area}><span>0{index + 1}</span>{area}<b>-&gt;</b></li>)}</ul></div></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-card"><div className="contact-copy"><p className="eyebrow">Get in touch</p><h2 id="contact-title">Let&apos;s work<br /><em>together.</em></h2><p className="contact-intro">I&apos;m open to web, game, animation, 3D, and editing projects — short or long-term. Have something in mind? Let&apos;s talk.</p><div className="contact-details"><a href="mailto:roel.john20002@gmail.com"><span className="contact-icon">@</span>roel.john20002@gmail.com</a><a href="https://www.linkedin.com/in/roel-john-delute-54b904382" target="_blank" rel="noreferrer"><span className="contact-icon">in</span>linkedin.com/in/roel-john-delute-54b904382</a><a href="https://github.com/Atlaski7/Roel-John-Delute-portfolio" target="_blank" rel="noreferrer"><span className="contact-icon">&lt;&gt;</span>github.com/Atlaski7/Roel-John-Delute-portfolio</a></div></div><form className="contact-form" onSubmit={handleContactSubmit}><div className="form-row"><label>Name *<input name="name" required placeholder="Your name" /></label><label>Email *<input name="email" type="email" required placeholder="you@example.com" /></label></div><label>Subject<input name="subject" placeholder="Project inquiry" /></label><label>Message *<textarea name="message" required placeholder="Tell me about your project..." rows={5} /></label><button className="form-submit" type="submit">Send message <span>-&gt;</span></button></form></div></section>
      </main>

      <footer className="site-footer"><span>RJSD / Creative workspace</span><span>Web · Games · Motion · 3D · Edit</span><a href="#top">Back to top ^</a></footer>
    </div>
  );
}
