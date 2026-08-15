const projects = [
  { number: "01", title: "Kindred Health", type: "Brand identity · Digital", year: "2024", tone: "rose", mark: "K" },
  { number: "02", title: "Northline Journal", type: "Editorial design · Web", year: "2023", tone: "lime", mark: "N" },
  { number: "03", title: "Morrow Objects", type: "Art direction · E-commerce", year: "2023", tone: "blue", mark: "M" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <aside className="side-rail"><a className="monogram" href="#top" aria-label="Back to top">R<span>•</span></a><div className="rail-label">Selected work<br />2021—24</div><div className="rail-bottom"><span className="status-dot" /> Available for select projects</div></aside>
      <div className="content" id="top">
        <nav className="top-nav" aria-label="Primary navigation"><span className="nav-note">Independent creative studio</span><div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <span className="arrow">↗</span></a></div></nav>
        <section className="hero" aria-labelledby="hero-title"><p className="eyebrow">Hello, I&apos;m Rhea — designer &amp; art director</p><h1 id="hero-title">Making<br /><em>good things</em><br />feel inevitable<span className="period">.</span></h1><div className="hero-foot"><p>I build identities, digital experiences, and<br />other useful beautiful things for people<br />with something to say.</p><a className="scroll-cue" href="#work">Scroll to explore <span>↓</span></a></div></section>
        <section className="work-section" id="work" aria-labelledby="work-title"><div className="section-head"><p className="eyebrow">A few things I&apos;ve made</p><h2 id="work-title">Selected<br /><em>work</em></h2><span className="count">(03)</span></div><div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.number}><div className="card-top"><span>{project.number}</span><span>{project.year}</span></div><div className="project-mark">{project.mark}</div><div className="card-bottom"><div><h3>{project.title}</h3><p>{project.type}</p></div><span className="card-arrow">↗</span></div></article>)}</div></section>
        <section className="about-section" id="about" aria-labelledby="about-title"><div><p className="eyebrow">A little context</p><h2 id="about-title">The short<br /><em>version</em></h2></div><div className="about-copy"><p className="lead">I&apos;m a multidisciplinary designer based in Manila, working across brand, web, and the spaces in between.</p><p>My approach is equal parts curious and practical: find the sharpest idea, give it a clear voice, then make the whole thing feel a little more human.</p><a className="text-link" href="#contact">More about me <span>↗</span></a></div></section>
        <footer className="footer" id="contact"><div><p className="eyebrow">Have a good one in mind?</p><h2>Let&apos;s make<br /><em>something.</em></h2></div><div className="footer-right"><a className="email" href="mailto:hello@rheasantos.studio">hello@rheasantos.studio <span>↗</span></a><div className="footer-meta"><span>© 2024 Rhea Santos</span><span>Manila, PH</span><span><a href="#top">Back to top ↑</a></span></div></div></footer>
      </div>
    </main>
  );
}
