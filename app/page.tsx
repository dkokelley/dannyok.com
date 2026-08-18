const trail = [
  {
    year: "Early days",
    title: "Built a campus marketplace",
    copy: "COC Underground started as a practical way for students to buy and sell textbooks—and became an early lesson in building for a real community.",
  },
  {
    year: "Builder era",
    title: "Made useful internet things",
    copy: "PasswordHound checked emails against known data breaches. iTerminate helped pest-control teams manage inspections. Life Appointments brought appointment requests online.",
  },
  {
    year: "Graduate work",
    title: "Followed the technical thread",
    copy: "Earned an M.S. at Cal State Northridge and published research on network-security audit trail management.",
  },
  {
    year: "Today",
    title: "Connects systems to people",
    copy: "Works in search marketing at Envoy Media Group, turning platforms, signals, and customer intent into measurable growth.",
  },
];

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dkokelley" },
  { label: "GitHub", href: "https://github.com/dkokelley" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Danny O'Kelley, home">
          <span>D</span>
          <span className="wordmark-name">Danny O&rsquo;Kelley</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#trail">Trail</a>
          <a href="#notes">Notes</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Southern California · Online since the dial-up days</p>
          <h1>Marketing brain.<br />Systems instincts.<br /><em>Builder&rsquo;s curiosity.</em></h1>
          <p className="dek">
            I&rsquo;m Danny O&rsquo;Kelley. I work where technology, customer behavior,
            and business meet—and I&rsquo;ve been making useful things for the web
            for most of my life.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:danny@dannyok.com">Say hello <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#trail">A little history <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="signal-card" aria-label="A quick read on Danny">
          <div className="signal-topline"><span>THE QUICK READ</span><span>01 / 04</span></div>
          <div className="signal-plot" aria-hidden="true">
            <span className="plot-label label-one">TECH</span>
            <span className="plot-label label-two">MARKETING</span>
            <span className="plot-label label-three">MUSIC</span>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="core">DOK</div>
          </div>
          <p>Equal parts analytical and creative. Usually connecting dots that arrived from different rooms.</p>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of interest">
        <div>SEARCH <span>✳</span> SYSTEMS <span>✳</span> STRATEGY <span>✳</span> SOFTWARE <span>✳</span> SOUND <span>✳</span> SEARCH <span>✳</span> SYSTEMS <span>✳</span></div>
      </section>

      <section className="section about" id="about">
        <div className="section-label"><span>01</span><p>ABOUT</p></div>
        <div className="about-grid">
          <h2>I like the seams between disciplines.</h2>
          <div className="about-copy">
            <p>
              My career started with websites and technology consulting, then
              widened into marketing, operations, and the systems that hold all
              three together. I&rsquo;ve worked with early-stage startups, small
              businesses, and large enterprises—usually as the person asking
              both <em>“will it work?”</em> and <em>“will anyone care?”</em>
            </p>
            <p>
              Outside the spreadsheet, I&rsquo;m a Southern California native and a
              longtime keyboardist and guitarist. Music is a good reminder that
              timing, listening, and leaving space matter as much as the notes.
            </p>
          </div>
        </div>
        <div className="principles">
          <article><span>01</span><h3>Make it useful</h3><p>Utility is a better starting point than novelty.</p></article>
          <article><span>02</span><h3>Follow the signal</h3><p>Good measurement clarifies; it doesn&rsquo;t replace judgment.</p></article>
          <article><span>03</span><h3>Stay curious</h3><p>The interesting answer is often just across a boundary.</p></article>
        </div>
      </section>

      <section className="section trail" id="trail">
        <div className="section-label"><span>02</span><p>SELECTED TRAIL</p></div>
        <div className="trail-intro">
          <h2>A few points on the map.</h2>
          <p>Not a résumé. Just the parts of the path that explain the present.</p>
        </div>
        <div className="timeline">
          {trail.map((item, index) => (
            <article className="timeline-item" key={item.title}>
              <div className="timeline-index">0{index + 1}</div>
              <div className="timeline-year">{item.year}</div>
              <div><h3>{item.title}</h3><p>{item.copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section notes" id="notes">
        <div className="section-label light"><span>03</span><p>NOTES, OCCASIONALLY</p></div>
        <article className="note-feature">
          <div className="note-meta"><span>NOTE 001</span><time dateTime="2026-08-18">AUG 18, 2026</time></div>
          <div>
            <h2>The case for keeping a small corner of the web.</h2>
            <p className="note-lead">
              A personal domain doesn&rsquo;t need a content strategy. Sometimes it
              just needs to answer a simple question: <em>“Who is this person?”</em>
            </p>
            <div className="note-body">
              <p>
                This site exists because I hand out an email address with my
                name on the other side of the @. Curiosity is reasonable. So
                here&rsquo;s a place with a little context, a few breadcrumbs, and an
                open door.
              </p>
              <p>
                I may write here when an idea earns more room than a social
                post. No cadence promised. The web has enough feeds; this is a
                front porch.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="contact" id="contact">
        <div className="contact-kicker">HAVE A QUESTION, AN IDEA, OR JUST WANT TO CONNECT?</div>
        <h2>My inbox is open.</h2>
        <a className="email-link" href="mailto:danny@dannyok.com">danny@dannyok.com <span aria-hidden="true">↗</span></a>
        <div className="contact-bottom">
          <p>Best for thoughtful notes, interesting problems, and saying hello.</p>
          <div className="social-links">
            {links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}
          </div>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Danny O&rsquo;Kelley</p>
        <p>Built to be read, not refreshed.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
