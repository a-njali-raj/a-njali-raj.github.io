import React, { useState } from "react";

/* ── Data ─────────────────────────────────────────── */

const projects = [
  {
    number: "01",
    title: "Playbook Management System",
    category: "Enterprise Legal Tech",
    description:
      "Designed a structured authoring platform that lets legal teams create, version, and distribute negotiation playbooks segmented by jurisdiction — cutting manual review cycles significantly.",
    tags: [".NET 8", "ASP.NET Core", "Dapper", "PostgreSQL", "Redis"],
  },
  {
    number: "02",
    title: "Compliance Validation Engine",
    category: "Multi-Tenant Security",
    description:
      "Built a rule-based engine that cross-validates contract clauses against regulatory standards, operating in a rigorously isolated multi-tenant environment to keep client data separated.",
    tags: [".NET", "REST API", "Dapper", "PostgreSQL", "Multi-Tenancy"],
  },
  {
    number: "03",
    title: "AI-Powered Word Extension",
    category: "Office Productivity",
    description:
      "Shipped a Microsoft Word add-in that embeds AI-assisted document rewriting, inline translation, and context-sensitive suggestions directly into the editing experience via Office.js.",
    tags: ["React", "Office.js", "JavaScript", "AI Services"],
  },
  {
    number: "04",
    title: "Outlook Document Converter",
    category: "Email Workflow",
    description:
      "Delivered an Outlook add-in with drag-and-drop PDF conversion, enabling teams to standardize email and attachment exports into consistent PDF formats without leaving their inbox.",
    tags: ["React", "Redux-Saga", "Office.js", "JavaScript", "PDF Engine"],
  },
];

/* Skill categories directly from resume */
const skillCategories = [
  {
    label: "Languages",
    skills: ["C#", "SQL", "Python"],
  },
  {
    label: "Frameworks",
    skills: [".NET", "ASP.NET Core", "React", "Office.js", "Django", "ADO.NET"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    label: "Tools",
    skills: [
      "Git",
      "AWS",
      "Azure DevOps",
      "GitHub Actions",
      "Postman",
      "Storybook",
      "Visual Studio",
      "Figma",
      "SonarQube",
    ],
  },
  {
    label: "AI-Assisted Dev",
    skills: ["GitHub Copilot", "Claude AI", "Antigravity"],
  },
  {
    label: "Concepts",
    skills: ["REST APIs", "OOP", "SDLC", "Agile", "CI/CD", "JSON", "XML"],
  },
];

/* Core skills kept for hero focus area */
const coreSkills = [
  { name: ".NET 8 / ASP.NET Core", icon: "⚡", category: "Backend Engineering" },
  { name: "C#", icon: "🔷", category: "Primary Language" },
  { name: "React", icon: "⚛️", category: "Frontend Development" },
  { name: "PostgreSQL", icon: "🐘", category: "Relational Database" },
  { name: "Office.js", icon: "📎", category: "Office Add-ins" },
  { name: "RESTful APIs", icon: "🌐", category: "Service Design" },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    university: "APJ Abdul Kalam Technological University",
    college: "Amal Jyothi College of Engineering",
    cgpa: "8.44",
    years: "2022 – 2024",
    badge: "MCA",
  },
  {
    degree: "B.Sc. Mathematics",
    university: "Kerala University",
    college: "KSMDB College",
    cgpa: "7.88",
    years: "2019 – 2022",
    badge: "BSc",
  },
];

const certifications = [
  {
    title: "AWS Academy Graduate",
    issuer: "Amazon Web Services",
    detail: "Cloud Foundations",
    icon: "☁️",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL — IIT Kanpur",
    detail: "Elite Certification",
    icon: "🎓",
  },
  {
    title: "IT Academy Program",
    issuer: "VMware",
    detail: "Virtualization & Cloud",
    icon: "🖥️",
  },
  {
    title: "React & HTML/CSS",
    issuer: "Udemy",
    detail: "Frontend Development",
    icon: "⚛️",
  },
];

const focusAreas = [
  {
    icon: "🖥️",
    title: "Backend Systems & APIs",
    desc: "Scalable REST services, schema design & efficient data access",
  },
  {
    icon: "⚛️",
    title: "React & Web Frontends",
    desc: "Component-driven SPAs and responsive UI development",
  },
  {
    icon: "📎",
    title: "Microsoft Office Add-ins",
    desc: "Productivity extensions for Word & Outlook via Office.js",
  },
];

/* ── Icons ─────────────────────────────────────────── */

function ArrowUpRight() {
  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

/* ── App ─────────────────────────────────────────── */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      {/* ── Navigation ── */}
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">AR</span>
            <span className="brand-name">Anjali Raj</span>
          </a>

          <button
            className="menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#work" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#stack" onClick={closeMenu}>Skills</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#certifications" onClick={closeMenu}>Certifications</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* ── Hero ── */}
        <section id="home" className="hero">
          <div className="container">
            {/* Status badge */}
            <div className="eyebrow">
              <span className="status-dot" />
              <span className="status-text">SOFTWARE ENGINEER · KERALA, INDIA</span>
            </div>

            {/* Headline */}
            <h1>
              Full-Stack Engineer building{" "}
              <span className="highlight-text">scalable software for real-world workflows.</span>
            </h1>

            {/* Bio */}
            <p className="hero-text">
              Software Engineer with 2 years of experience in full-stack development, specialising
              in <strong>.NET</strong>, <strong>ASP.NET Core</strong>, <strong>React</strong>, and
              SQL databases. Experienced in developing <strong>REST APIs</strong>, implementing
              features for <strong>Microsoft Word & Outlook add-ins</strong>, and delivering
              scalable, production-ready applications in <strong>Agile</strong> environments.
              Proficient in <strong>Git</strong>, <strong>Azure DevOps</strong>, and modern
              development practices.
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View My Work <ArrowUpRight />
              </a>
              <a className="button button-secondary" href="#contact">
                Let's Connect <ArrowUpRight />
              </a>
            </div>

            {/* Focus cards */}
            <div className="hero-focus-grid">
              {focusAreas.map((f) => (
                <div className="focus-card" key={f.title}>
                  <span className="focus-card-icon">{f.icon}</span>
                  <strong>{f.title}</strong>
                  <span>{f.desc}</span>
                </div>
              ))}
            </div>

            {/* Metrics bar */}
            <div className="stats-bar">
              <div className="stat-item">
                <span className="stat-label">EXPERIENCE</span>
                <strong className="stat-value">~2 Years</strong>
                <span className="stat-sub">Production Engineering</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">PRIMARY STACK</span>
                <strong className="stat-value">.NET & React</strong>
                <span className="stat-sub">Full-Stack Development</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">SPECIALTY</span>
                <strong className="stat-value">Office.js</strong>
                <span className="stat-sub">Word & Outlook Add-ins</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">CURRENT EMPLOYER</span>
                <strong className="stat-value">Appfabs</strong>
                <span className="stat-sub">Software Engineer</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── #01 Experience ── */}
        <section id="work" className="section divider-section">
          <div className="container">
            <SectionHeading
              title="Work Experience"
              subtitle="Where I've built and what I've shipped"
            />

            <article className="experience-card">
              <div className="experience-header">
                <div className="exp-left">
                  <div className="company-badge">AI</div>
                  <div className="company-details">
                    <h3>Appfabs Innovation Pvt. Ltd.</h3>
                    <p className="company-role">Software Engineer</p>
                  </div>
                </div>
                <div className="experience-meta">
                  <span className="badge-pill">Sept 2024 — Present</span>
                  <span className="location-text">Kerala, India · Full-Time</span>
                </div>
              </div>

              <div className="experience-body">
                <p>
                  Working across the full stack on legal technology products — focused on robust
                  API design, multi-tenant data isolation, and desktop-grade Microsoft Office
                  integrations for enterprise clients.
                </p>
                <ul className="achievement-list">
                  <li>
                    Developed and maintained <strong>.NET 8 / ASP.NET Core</strong> backend
                    applications using <strong>C#</strong>, <strong>Dapper</strong>,{" "}
                    <strong>PostgreSQL</strong>, and <strong>REST APIs</strong> for the Playbook
                    Management System and Compliance Checker in a legal technology platform.
                  </li>
                  <li>
                    Developed features for Microsoft <strong>Word</strong> and{" "}
                    <strong>Outlook</strong> Add-ins using <strong>React</strong> and{" "}
                    <strong>Office.js</strong> — implementing AI-powered document editing, contract
                    compliance validation, email & attachment <strong>PDF conversion</strong>, and
                    UX enhancements.
                  </li>
                  <li>
                    Implemented database migrations, <strong>unit/integration tests</strong>,{" "}
                    <strong>SonarQube</strong> quality improvements, and collaborated in Agile
                    teams using <strong>Git</strong> and <strong>Azure DevOps</strong>.
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* ── #02 Projects ── */}
        <section id="projects" className="section divider-section">
          <div className="container">
            <SectionHeading
              title="Featured Projects"
              subtitle="Selected work from my time at Appfabs"
            />

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="github-banner">
              <div className="github-info">
                <h3>More on GitHub</h3>
                <p>Side projects, experiments, and code samples live here.</p>
              </div>
              <a
                className="button button-outline"
                href="https://github.com/a-njali-raj"
                target="_blank"
                rel="noreferrer"
              >
                github.com/a-njali-raj <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        {/* ── #03 Skills ── */}
        <section id="stack" className="section divider-section">
          <div className="container">
            <SectionHeading
              title="Technology Stack"
              subtitle="Languages, frameworks, databases, and tools I work with"
            />

            <div className="stack-section">
              {/* Core 6 cards */}
              <div className="stack-group-title">CORE SKILLS</div>
              <div className="core-grid">
                {coreSkills.map((skill) => (
                  <div className="core-card" key={skill.name}>
                    <span className="core-icon">{skill.icon}</span>
                    <div className="core-info">
                      <strong>{skill.name}</strong>
                      <span>{skill.category}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Categorised skill groups */}
              <div className="skill-categories">
                {skillCategories.map((cat) => (
                  <div className="skill-category" key={cat.label}>
                    <div className="skill-category-label">{cat.label.toUpperCase()}</div>
                    <div className="skill-pills">
                      {cat.skills.map((s) => (
                        <span className="secondary-pill" key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── #04 Education ── */}
        <section id="education" className="section divider-section">
          <div className="container">
            <SectionHeading
              title="Education"
              subtitle="Academic background that shaped my analytical thinking"
            />

            <div className="education-list">
              {education.map((edu) => (
                <article className="edu-card" key={edu.degree}>
                  <div className="edu-left">
                    <div className="edu-badge">{edu.badge}</div>
                    <div className="edu-details">
                      <h3>{edu.degree}</h3>
                      <p className="edu-university">{edu.university}</p>
                      <p className="edu-college">{edu.college}</p>
                    </div>
                  </div>
                  <div className="edu-right">
                    <span className="badge-pill">{edu.years}</span>
                    <div className="cgpa-badge">
                      <span className="cgpa-label">CGPA</span>
                      <strong className="cgpa-value">{edu.cgpa}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── #05 Certifications ── */}
        <section id="certifications" className="section divider-section">
          <div className="container">
            <SectionHeading
              title="Certifications"
              subtitle="Credentials earned through structured learning programmes"
            />

            <div className="cert-grid">
              {certifications.map((cert) => (
                <div className="cert-card" key={cert.title}>
                  <span className="cert-icon">{cert.icon}</span>
                  <div className="cert-info">
                    <strong className="cert-title">{cert.title}</strong>
                    <span className="cert-issuer">{cert.issuer}</span>
                    <span className="cert-detail">{cert.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── #06 About ── */}
        <section id="about" className="section divider-section">
          <div className="container">
            <SectionHeading
              title="About Me"
              subtitle="Background & the way I approach problems"
            />

            <div className="about-content">
              <p>
                I'm a software engineer who gravitates toward the backend — designing APIs,
                modelling data, and building systems that hold up under real-world conditions.
                I care about clean interfaces and readable code, finding equal satisfaction in
                a well-structured schema and a smooth user interaction.
              </p>
              <p>
                My academic path — an <strong>MCA from APJ Abdul Kalam Technological University</strong>{" "}
                (CGPA 8.44) preceded by a <strong>B.Sc. in Mathematics from Kerala University</strong>{" "}
                (CGPA 7.88) — gave me a strong analytical foundation that shapes how I reason
                about system design, performance trade-offs, and debugging.
              </p>

              <div className="about-highlights">
                <div className="highlight-box">
                  <span>EDUCATION</span>
                  <strong>MCA & B.Sc. Math</strong>
                </div>
                <div className="highlight-box">
                  <span>BASED IN</span>
                  <strong>Kerala, India</strong>
                </div>
                <div className="highlight-box">
                  <span>PHILOSOPHY</span>
                  <strong>Understand · Build · Refine</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── #07 Contact ── */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-heading">
              <h2>Let's Work Together</h2>
              <p>
                Whether you have a role in mind, a project idea, or just want to talk tech —
                my inbox is open. I'll do my best to respond promptly.
              </p>
            </div>

            <div className="contact-table">
              <a href="mailto:anjalyrajkp@gmail.com" className="contact-row">
                <span className="contact-type">EMAIL</span>
                <span className="contact-value">anjalyrajkp@gmail.com</span>
                <ArrowUpRight />
              </a>

              <a
                href="https://linkedin.com/in/anjali-raj032001"
                target="_blank"
                rel="noreferrer"
                className="contact-row"
              >
                <span className="contact-type">LINKEDIN</span>
                <span className="contact-value">linkedin.com/in/anjali-raj032001</span>
                <ArrowUpRight />
              </a>

              <a
                href="https://github.com/a-njali-raj"
                target="_blank"
                rel="noreferrer"
                className="contact-row"
              >
                <span className="contact-type">GITHUB</span>
                <span className="contact-value">github.com/a-njali-raj</span>
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Anjali Raj</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div className="section-title-wrap">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default App;