"use client";

import { useEffect, useState } from "react";

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

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><p className="eyebrow">Have a project in mind?</p><h2 id="contact-title">Let&apos;s make<br /><em>something.</em></h2><a className="contact-link" href="mailto:rjsd.creative@gmail.com">rjsd.creative@gmail.com <span>-&gt;</span></a></section>
      </main>

      <footer className="site-footer"><span>RJSD / Creative workspace</span><span>Web · Games · Motion · 3D · Edit</span><a href="#top">Back to top ^</a></footer>
    </div>
  );
}
