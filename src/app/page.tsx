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
  { label: "Email", value: "amirkazemi@ucsd.edu" },
  { label: "Phone", value: "480-334-6609" },
  { label: "Location", value: "Las Vegas, NV" },
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
  },
  {
    title: "IT Systems Development Project",
    meta: "SQL, database design, Lucidchart",
    detail:
      "A scalable relational schema designed for structured storage, efficient retrieval, and dependable reporting queries.",
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
              <div className="aboutCard" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
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
            </article>
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
            Share your name, email, phone number, and message. The form prepares an email to my
            UCSD address with your details.
          </p>
          <div className="contactLinks" aria-label="Amir contact information">
            <span>amirkazemi@ucsd.edu</span>
            <span>480-334-6609</span>
          </div>
        </div>
        <ContactForm />
      </section>

      <footer className="footer">
        <p>Las Vegas, NV</p>
        <div>
          <span>amirkazemi@ucsd.edu</span>
          <span>480-334-6609</span>
        </div>
      </footer>
    </main>
  );
}
