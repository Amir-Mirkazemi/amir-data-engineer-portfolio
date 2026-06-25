import ContactForm from "./ContactForm";

const metrics = [
  { value: "20+", label: "Snowflake ingestion pipelines" },
  { value: "~40%", label: "less manual validation effort" },
  { value: "4.0", label: "current UCSD MS Data Science GPA" },
];

const systems = [
  "Snowflake",
  "Airflow",
  "Python",
  "SQL validation",
  "Oracle",
  "Power BI",
];

const aboutCards = [
  { label: "Email", value: "amirkazemi@ucsd.edu", href: "mailto:amirkazemi@ucsd.edu" },
  {
    label: "LinkedIn",
    value: "amir-mirkazemi",
    href: "https://www.linkedin.com/in/amir-mirkazemi/",
  },
  { label: "GitHub", value: "amir-mirkazemi", href: "https://github.com/amir-mirkazemi" },
];

const experience = [
  {
    role: "Data Engineer",
    company: "Credit One Bank",
    period: "July 2025 - Present",
    stack: "SQL, Snowflake, Python, Airflow, Oracle, DBeaver",
    summary:
      "Designing and maintaining metadata-driven ingestion pipelines that move legacy enterprise feeds into Snowflake with validation checks, audit tables, and dependable release controls.",
  },
  {
    role: "Data Analyst",
    company: "Advertising Checking Bureau",
    period: "Sep 2023 - May 2025",
    stack: "SQL, Excel",
    summary:
      "Analyzed and validated claims data, found discrepancies across operational datasets, and built reporting workflows that reduced repetitive manual work.",
  },
  {
    role: "End User Analyst Intern",
    company: "Freeport-McMoRan",
    period: "May 2025 - July 2025",
    stack: "ServiceNow, Active Directory, hardware imaging",
    summary:
      "Supported enterprise IT operations across user requests, access tasks, onboarding changes, and standardized device deployment.",
  },
];

const projects = [
  {
    title: "Stock Trading Web Application",
    meta: "MySQL, Flask, Python, AWS",
    detail:
      "A role-aware trading application with trade execution logic, portfolio tracking, SQLAlchemy persistence, and environment-based deployment configuration.",
    href: "https://github.com/Amir-Mirkazemi/ift401group4",
    linkLabel: "View repository",
  },
  {
    title: "Weather ETL Pipeline",
    meta: "Python, GitHub Actions, SQLite, API ingestion",
    detail:
      "A lightweight data engineering pipeline that extracts live weather data, transforms it, and loads structured records into SQLite on an automated schedule.",
    href: "https://github.com/Amir-Mirkazemi/weather-ETL-pipeline",
    linkLabel: "View repository",
  },
  {
    title: "IT Systems Development Project",
    meta: "SQL, database design, Lucidchart",
    detail:
      "A scalable relational schema designed for structured storage, efficient retrieval, and dependable reporting queries.",
    href: "https://github.com/Amir-Mirkazemi",
    linkLabel: "View GitHub",
  },
];

const notes = [
  {
    title: "Airflow DAG best practices",
    detail:
      "Patterns I care about when building scheduled workflows: idempotent tasks, clear dependencies, and readable failure points.",
    href: "https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html",
  },
  {
    title: "Snowflake pipelines",
    detail:
      "Streams, tasks, audit tables, and warehouse design are the pieces I use to think about dependable ingestion.",
    href: "https://docs.snowflake.com/en/user-guide/data-pipelines-intro",
  },
  {
    title: "Analytics engineering",
    detail:
      "I like the practical bridge between raw operational data, tested transformations, and reporting-ready datasets.",
    href: "https://docs.getdbt.com/docs/introduction",
  },
];

const skills = [
  "Python",
  "SQL",
  "Snowflake",
  "Apache Airflow",
  "Oracle",
  "SQL Server",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "Power BI",
  "Tableau",
  "GitLab",
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader" id="top">
        <a className="brand" href="#top" aria-label="Amir Mirkazemi home">
          <span>AM</span>
          <strong>Amir Mirkazemi</strong>
        </a>
        <nav className="navLinks" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#notes">Notes</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Data Engineer Portfolio</p>
          <h1>Amir Mirkazemi</h1>
          <div className="heroRole" aria-label="Data engineering focus areas">
            <span>Snowflake</span>
            <span>Airflow</span>
            <span>SQL validation</span>
            <span>Reporting datasets</span>
          </div>
          <div className="heroActions" aria-label="Contact links">
            <a className="primaryAction" href="#contact">
              Contact me
            </a>
            <a className="secondaryAction" href="#work">
              View work
            </a>
            <a className="secondaryAction" href="/amir-mirkazemi-data-engineer-resume.pdf" target="_blank">
              Resume
            </a>
          </div>
        </div>

        <aside className="dashboardPanel" aria-label="Data engineering dashboard">
          <div className="dashboardTop">
            <div>
              <span className="statusDot" />
              Data engineering workspace
            </div>
            <strong>Production-ready</strong>
          </div>
          <div className="dashboardGrid">
            <div className="dashboardCard featuredCard">
              <span>Warehouse</span>
              <strong>Snowflake ingestion</strong>
              <p>Validated feeds, audit tables, and reporting-ready schemas.</p>
            </div>
            <div className="dashboardCard">
              <span>Orchestration</span>
              <strong>Airflow DAGs</strong>
              <p>Scheduled workflows with clear handoffs and release checks.</p>
            </div>
            <div className="dashboardCard">
              <span>Quality</span>
              <strong>SQL validation</strong>
              <p>Row counts, schema rules, and exception checks before BI.</p>
            </div>
          </div>
          <div className="queryPreview" aria-label="SQL validation preview">
            <span>validation_check.sql</span>
            <code>
              select feed_name, row_count, status from audit_runs where status = 'ready';
            </code>
          </div>
        </aside>
      </section>

      <section className="metricBand" aria-label="Portfolio highlights">
        {metrics.map((item) => (
          <div className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="systemStrip" aria-label="Core systems">
        {systems.map((system) => (
          <span key={system}>{system}</span>
        ))}
      </section>

      <section className="section aboutSection" id="about">
        <div className="sectionHeader compactHeader">
          <h2>About Amir</h2>
        </div>
        <div className="aboutBody">
          <p>
            I am a data engineer focused on Snowflake ingestion, Python-based Airflow workflows,
            SQL validation, audit tables, and clean handoffs to reporting teams. My background spans
            data analysis, enterprise IT support, and production data work, so I think about both
            the systems behind the pipeline and the people who depend on the results.
          </p>
          <div className="aboutCards" aria-label="Amir contact details">
            {aboutCards.map((item) => (
              <a className="aboutCard" href={item.href} key={item.label} rel="noreferrer" target="_blank">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience" id="work">
        <div className="sectionHeader">
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article className="timelineItem" key={`${job.company}-${job.role}`}>
              <div>
                <p className="period">{job.period}</p>
                <h3>{job.role}</h3>
                <p className="company">{job.company}</p>
              </div>
              <div>
                <p className="stack">{job.stack}</p>
                <p>{job.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="sectionHeader">
          <h2>Projects</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <p>{project.meta}</p>
              <h3>{project.title}</h3>
              <span>{project.detail}</span>
              <div className="projectActions">
                <a href={project.href} rel="noreferrer" target="_blank">
                  {project.linkLabel}
                </a>
                <a href="https://www.linkedin.com/in/amir-mirkazemi/" rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section notesSection" id="notes">
        <div className="sectionHeader">
          <h2>Data engineering notes</h2>
        </div>
        <div className="notesGrid">
          {notes.map((note) => (
            <a className="noteCard" href={note.href} key={note.title} rel="noreferrer" target="_blank">
              <span>Read</span>
              <h3>{note.title}</h3>
              <p>{note.detail}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section stackSection" id="stack">
        <div>
          <h2>Technical stack</h2>
        </div>
        <div className="skillGrid">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section education">
        <div>
          <h2>Education</h2>
        </div>
        <div className="educationDetails">
          <p>
            University of California, San Diego / Master of Science in Data Science / Expected Apr
            2027 / Current GPA 4.0 / Halicioglu Data Science Scholarship
          </p>
          <p>Arizona State University / BS Information Technology / GPA 4.0 / Completed Aug 2025</p>
        </div>
      </section>

      <section className="section contactSection" id="contact">
        <div className="contactIntro">
          <h2>Contact me</h2>
          <p>
            Share your name, email, and message. The form prepares an email to my UCSD address with
            your details.
          </p>
          <div className="contactLinks" aria-label="Amir contact information">
            <a href="mailto:amirkazemi@ucsd.edu">amirkazemi@ucsd.edu</a>
            <a href="https://www.linkedin.com/in/amir-mirkazemi/" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/amir-mirkazemi" rel="noreferrer" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <ContactForm />
      </section>

      <footer className="footer">
        <p>Las Vegas, NV</p>
        <div>
          <a href="mailto:amirkazemi@ucsd.edu">amirkazemi@ucsd.edu</a>
          <a href="https://www.linkedin.com/in/amir-mirkazemi/" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/amir-mirkazemi" rel="noreferrer" target="_blank">
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
