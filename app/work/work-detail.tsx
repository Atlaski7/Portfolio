"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Box, Clapperboard, Code2, Gamepad2, Play } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type WorkCategory = "frontend" | "game-development" | "animation" | "3d-modeling" | "video-editing";

type WorkDetail = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
};

const workDetails: Record<WorkCategory, WorkDetail> = {
  frontend: {
    number: "01",
    title: "FrontEnd",
    description: "Responsive, accessible websites and interfaces designed to feel clear, fast, and easy to use on every screen.",
    icon: Code2,
    capabilities: ["Responsive websites", "Landing pages", "Interface implementation", "Accessibility and performance"],
  },
  "game-development": {
    number: "02",
    title: "Game Development",
    description: "Playable ideas built around satisfying controls, understandable systems, and moments that keep players engaged.",
    icon: Gamepad2,
    capabilities: ["Gameplay prototypes", "Interaction systems", "Level concepts", "Testing and polish"],
  },
  animation: {
    number: "03",
    title: "Animation",
    description: "Motion work that gives ideas rhythm, personality, and a stronger visual story from opening frame to finish.",
    icon: Clapperboard,
    capabilities: ["Motion graphics", "Title sequences", "2D and 3D animation", "Visual storytelling"],
  },
  "3d-modeling": {
    number: "04",
    title: "3D Modeling",
    description: "Models and scenes shaped with careful form, materials, lighting, and presentation for polished final renders.",
    icon: Box,
    capabilities: ["Hard-surface modeling", "Environment props", "Materials and lighting", "Rendering"],
  },
  "video-editing": {
    number: "05",
    title: "Video Editing",
    description: "Purposeful edits that bring footage, sound, pacing, and transitions together into a focused final story.",
    icon: Play,
    capabilities: ["Short-form edits", "Pacing and transitions", "Sound synchronization", "Color and final export"],
  },
};

const categories = (Object.keys(workDetails) as WorkCategory[]).map((slug) => ({
  slug,
  title: workDetails[slug].title,
}));

export function WorkDetailPage({ category }: { category: WorkCategory }) {
  const [dark, setDark] = useState(true);
  const project = workDetails[category];
  const Icon = project.icon;

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

  return (
    <div className={`portfolio-app work-detail-page ${dark ? "theme-dark" : "theme-light"}`} id="top">
      <header className="site-header">
        <nav className="header-nav" aria-label="Work page navigation">
          <div className="nav-links"><a href="../#work">Selected work</a><a href="../#contact">Contact</a></div>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}><span>{dark ? "☼" : "◐"}</span><small>{dark ? "Light" : "Dark"}</small></button>
          <a className="brand" href="../" aria-label="RJSD home"><span>RJ</span><b>SD</b></a>
        </nav>
      </header>

      <main className="work-detail-main">
        <a className="work-detail-back" href="../#work"><ArrowLeft size={17} aria-hidden="true" /> Back to selected work</a>

        <section className="work-detail-hero" aria-labelledby="work-detail-title">
          <div className="work-detail-copy">
            <p className="eyebrow">Selected work / {project.number}</p>
            <span className="work-detail-icon" aria-hidden="true"><Icon size={29} strokeWidth={1.8} /></span>
            <h1 id="work-detail-title">{project.title}<em>.</em></h1>
            <p>{project.description}</p>
          </div>
          <div className="work-detail-visual" aria-hidden="true"><span>{project.number}</span><Icon size={92} strokeWidth={1.1} /></div>
        </section>

        <section className="work-detail-content" aria-label={`${project.title} details`}>
          <div className="work-capabilities">
            <p className="eyebrow">Capabilities</p>
            <ul>{project.capabilities.map((capability, index) => <li key={capability}><span>0{index + 1}</span>{capability}</li>)}</ul>
          </div>
          <div className="work-project-archive">
            <p className="eyebrow">Project archive</p>
            <h2>Case studies will live here.</h2>
            <p>This page is ready for finished {project.title.toLowerCase()} projects, process notes, images, and results as the portfolio grows.</p>
            <a href="../#contact">Discuss a project <ArrowUpRight size={17} aria-hidden="true" /></a>
          </div>
        </section>

        <nav className="work-category-nav" aria-label="Browse work categories">
          {categories.map((item) => <a href={`./${item.slug}`} aria-current={item.slug === category ? "page" : undefined} key={item.slug}>{item.title}</a>)}
        </nav>
      </main>

      <footer className="site-footer"><span>RJSD / {project.title}</span><span>Selected work / {project.number}</span><a href="../#contact">Get in touch</a></footer>
    </div>
  );
}
