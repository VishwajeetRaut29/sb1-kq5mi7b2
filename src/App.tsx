import { ArrowDownRight, ArrowUpRight, Check, Linkedin, Mail, Menu, MoveUpRight, Phone, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { capabilities, experience, insights, profile } from './content';

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-label">
      <span className="section-number">{number}</span>
      <span>{label}</span>
      <span className="label-line" />
    </div>
  );
}

function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const impactRef = useReveal<HTMLDivElement>();
  const experienceRef = useReveal<HTMLDivElement>();
  const aboutRef = useReveal<HTMLDivElement>();
  const capabilitiesRef = useReveal<HTMLDivElement>();
  const insightsRef = useReveal<HTMLDivElement>();
  const contactRef = useReveal<HTMLDivElement>();

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Vishwajeet Raut home">{profile.shortName}</a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="header-cta" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-grid" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="lime-dot" /> Vishwajeet Raut · Investment & ecosystems</p>
          <h1>{profile.hero.map((line, index) => <span key={line} className={index === 2 ? 'highlight' : ''}>{line}</span>)}</h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-lime" href="#experience">Explore my journey <ArrowDownRight size={17} /></a>
            <a className="button button-quiet" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="hero-side-note">Currently building bridges<br />across capital & ecosystems</div>
        <div className="scroll-cue"><span /> Scroll to explore</div>
      </section>

      <section className="impact-strip reveal-stagger" aria-label="Areas of impact" ref={impactRef}>
        <div className="impact-item"><strong>4+</strong><span>Years across startup<br />growth & partnerships</span></div>
        <div className="impact-item"><strong>Global</strong><span>Institutes, incubators<br />& funding networks</span></div>
        <div className="impact-item"><strong>90 days</strong><span>Evaluation to investment<br />pathway</span></div>
        <div className="impact-item"><strong>Founder-first</strong><span>Practical support from<br />potential to progress</span></div>
      </section>

      <section className="dark-section experience-section reveal" id="experience" ref={experienceRef}>
        <div className="section-shell">
          <SectionLabel number="01" label="Career journey" />
          <div className="career-heading"><div><h2>One path.<br /><span>Many vantage points.</span></h2><p className="heading-aside">A concise journey through<br />growth, GTM and investment.</p><div className="career-highlights"><span>Startup evaluation</span><span>Capital networks</span><span>Enterprise GTM</span><span>Key accounts</span></div></div><figure className="career-portrait"><img src="/images/Vishw.jpg" alt="Vishwajeet Raut working at his desk" /><figcaption>Building the bridge between<br />founders, capital and opportunity.</figcaption></figure></div>
          <div className="timeline">{experience.map((item) => <article className={`timeline-item ${item.current ? 'current' : ''}`} key={item.company}>
            <div className="timeline-marker"><span /></div><div className="timeline-content"><div className="timeline-title"><h3>{item.company}</h3><span className="timeline-period">{item.period}</span></div><p className="role">{item.role}</p><div className="timeline-meta"><span>{item.location}</span></div><p>{item.description}</p></div>
          </article>)}</div>
        </div>
      </section>

      <section className="section-shell about-section reveal" id="about" ref={aboutRef}>
        <SectionLabel number="02" label="About" />
        <div className="about-layout"><div><h2>About<br /><span>me</span></h2><div className="about-signature"><span /> Vishwajeet Raut · Investment & ecosystems</div></div><div className="about-copy"><blockquote>“{profile.quote}”</blockquote>{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="about-note"><Check size={16} /> Open to conversations with founders, investors and teams building what’s next.</div></div></div>
      </section>

      <section className="dark-section capabilities-section reveal" ref={capabilitiesRef}>
        <div className="section-shell"><SectionLabel number="03" label="Core expertise" /><h2>What I bring<br /><span>to founders</span></h2><p className="section-lede">The capabilities I bring to every investment, partnership and ecosystem conversation.</p><div className="capability-grid">{capabilities.map((group, index) => <div className="capability" key={group.label}><div className="capability-index">0{index + 1}</div><h3>{group.label}</h3>{group.items.map(item => <span key={item}>{item}</span>)}</div>)}</div></div><div className="marquee" aria-hidden="true"><div className="marquee-track"><div className="marquee-content"><span>INVESTMENT READINESS</span><b>✳</b><span>CAPITAL NETWORKS</span><b>✳</b><span>ECOSYSTEM BUILDING</span><b>✳</b><span>STARTUP EVALUATION</span><b>✳</b><span>INCUBATOR PARTNERSHIPS</span><b>✳</b></div><div className="marquee-content" aria-hidden="true"><span>INVESTMENT READINESS</span><b>✳</b><span>CAPITAL NETWORKS</span><b>✳</b><span>ECOSYSTEM BUILDING</span><b>✳</b><span>STARTUP EVALUATION</span><b>✳</b><span>INCUBATOR PARTNERSHIPS</span><b>✳</b></div></div></div>
      </section>

      <section className="section-shell insights-section reveal" ref={insightsRef}><SectionLabel number="04" label="Writing & insights" /><div className="section-heading-row"><div><h2>Notes from<br /><span>the field</span></h2><p>Ideas on growth, relationships and the startup ecosystem.</p></div><span className="heading-aside">More on LinkedIn ↗</span></div><div className="insights-list">{insights.map(item => <a href={profile.linkedin} target="_blank" rel="noreferrer" className="insight-row" key={item.number}><span className="insight-number">{item.number}</span><div><span>{item.label}</span><h3>{item.title}</h3></div><MoveUpRight size={20} /></a>)}</div></section>

      <section className="contact-section reveal" id="contact" ref={contactRef}><div className="section-shell"><SectionLabel number="05" label="Contact" /><h2>Let’s build something that <span>grows.</span></h2><p className="contact-lede">Whether you’re building a startup, growing a funding network or shaping an ecosystem partnership — I’m always open to a conversation.</p><div className="contact-grid"><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail size={18} /><span><small>Personal email</small>{profile.email}</span></a><a href={`mailto:${profile.officeEmail}`}><Mail size={18} /><span><small>Office email</small>{profile.officeEmail}</span></a><a href={`tel:${profile.phone}`}><Phone size={18} /><span><small>Phone</small>{profile.phone}</span></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><span><small>LinkedIn</small>{profile.linkedinLabel}</span></a><p className="location-note">Based in India · Working across the world</p></div><a className="contact-card" href={`mailto:${profile.email}?subject=Let%27s%20work%20together`}><span>Have a project, partnership or opportunity in mind?</span><strong>Start a conversation <ArrowUpRight size={20} /></strong></a></div></div></section>

      <footer className="site-footer"><div className="section-shell"><div className="footer-main"><span className="footer-name">VISHWAJEET<br />RAUT<span>.</span></span><a className="back-top" href="#top">Back to top ↑</a></div><div className="footer-bottom"><span>INVESTMENT · ECOSYSTEMS · PARTNERSHIPS</span><span>© 2026 Vishwajeet Raut</span><div><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${profile.email}`}>Email</a></div></div></div></footer>
    </main>
  );
}

export default App;
