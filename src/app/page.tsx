const metrics = [
  { value: "20+", label: "Snowflake ingestion pipelines" },
  { value: "~40%", label: "fewer manual validation tickets" },
  { value: "4.0", label: "UCSD MS Data Science GPA" },
];

const systems = [
  "Snowflake",
  "Airflow",
  "Python",
  "PySpark",
  "Trino",
  "Kubernetes",
  "Great Expectations",
  "SQL",
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
    location: "Las Vegas, NV",
    period: "July 2025 - Present",
    stack: "Python, SQL, Airflow, PySpark, Snowflake, Trino, Kubernetes",
    summary:
      "Building metadata-driven Snowflake ingestion pipelines, Airflow DAG tooling, Great Expectations quality checks, and production fixes across PySpark, Trino, Kubernetes, and schema migration work.",
  },
  {
    role: "Data Analyst",
    company: "Advertising Checking Bureau",
    location: "Tempe, AZ",
    period: "Sep 2023 - May 2025",
    stack: "SQL, Excel",
    summary:
      "Validated about 120 claims daily with SQL and automated recurring Excel reporting workflows, reducing report preparation from about an hour to under 15 minutes.",
  },
];

const projects = [
  {
    title: "Weather ETL Pipeline",
    meta: "Python, GitHub Actions, SQLite, API ingestion",
    detail:
      "An automated ETL pipeline that extracts live weather data from a public API, transforms it into typed records, and loads SQLite hourly with GitHub Actions.",
    href: "https://github.com/Amir-Mirkazemi/weather-ETL-pipeline",
    linkLabel: "View repository",
    image: "/portfolio-images/project-weather.jpg",
    imageAlt: "Cloud system visual for the weather ETL pipeline",
  },
  {
    title: "Metadata Generator Airflow DAG",
    meta: "Airflow, Python, SQL metadata, Snowflake",
    detail:
      "A production DAG that turns structured inputs, column definitions, unique identifiers, and file-pattern regex into SQL for pipeline metadata tables.",
    href: "https://amirdata.com/#work",
    linkLabel: "View experience",
    image: "/portfolio-images/ref-airflow-dag.svg",
    imageAlt: "Airflow DAG workflow graph for metadata generation",
  },
  {
    title: "Snowflake Schema Migration",
    meta: "Snowflake, Trino SQL, schema mappings",
    detail:
      "Migrated 20+ feeds and tables from core- to business-facing Snowflake schemas by rebuilding SQL views, definitions, and target mappings for Marketing reporting.",
    href: "https://amirdata.com/#work",
    linkLabel: "View experience",
    image: "/portfolio-images/ref-snowflake.jpg",
    imageAlt: "Global data network visual for Snowflake schema migration",
  },
];

const notes = [
  {
    title: "Airflow DAG reliability",
    detail:
      "Patterns I use for production workflows: metadata-driven setup, idempotent tasks, clear failure points, and visible reruns.",
    href: "https://airflow.apache.org/docs/apache-airflow/stable/best-practices.html",
    image: "/portfolio-images/ref-airflow-dag.svg",
    imageAlt: "Airflow DAG workflow graph with orchestration dependencies",
  },
  {
    title: "Snowflake ingestion design",
    detail:
      "The core pieces I care about: schemas, target mappings, validation zones, audit tables, and reporting-ready handoffs.",
    href: "https://docs.snowflake.com/en/user-guide/data-pipelines-intro",
    image: "/portfolio-images/ref-snowflake.jpg",
    imageAlt: "Global network lights for Snowflake data pipeline concepts",
  },
  {
    title: "Great Expectations checks",
    detail:
      "Data quality work should catch malformed files, schema drift, delimiter issues, and datatype mismatches before downstream users see them.",
    href: "https://docs.greatexpectations.io/docs/core/introduction/",
    image: "/portfolio-images/ref-analytics.jpg",
    imageAlt: "Analytics dashboard screen for data quality checks",
  },
];

const skills = [
  "Python",
  "SQL",
  "Snowflake",
  "Apache Airflow",
  "PySpark",
  "Trino",
  "Kubernetes",
  "Great Expectations",
  "Oracle",
  "SQL Server",
  "PostgreSQL",
  "MySQL",
  "GitLab",
  "AWS",
  "Excel",
  "Tableau",
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
          <a href="#notes">References</a>
          <a href="#stack">Stack</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Data Engineer Portfolio</p>
          <h1>Amir Mirkazemi</h1>
          <div className="heroActions" aria-label="Primary actions">
            <a className="primaryAction" href="mailto:amirkazemi@ucsd.edu">
              Email me
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
              <span>Automation</span>
              <strong>Metadata generator DAG</strong>
              <p>Turns feed inputs, column definitions, identifiers, and regex into pipeline metadata SQL.</p>
            </div>
            <div className="dashboardCard">
              <span>Warehouse</span>
              <strong>20+ Snowflake feeds</strong>
              <p>Oracle and SSIS legacy feeds moved into business-facing schemas.</p>
            </div>
            <div className="dashboardCard">
              <span>Quality</span>
              <strong>Great Expectations</strong>
              <p>Column, delimiter, and datatype checks before downstream tables.</p>
            </div>
          </div>
          <div className="queryPreview" aria-label="SQL validation preview">
            <span>metadata_load.sql</span>
            <code>
              insert into pipeline_metadata select feed_name, column_name, target_type from generated_specs;
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
            I am a data engineer focused on metadata-driven ingestion, Python-based Airflow DAGs,
            Snowflake pipelines, PySpark jobs, Trino SQL views, and Great Expectations validation.
            My work sits close to production: reducing manual setup, fixing recurring pipeline failures,
            and making messy operational feeds reliable for reporting teams.
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
                <p className="location">{job.location}</p>
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
              <div className="projectVisual">
                <img src={project.image} alt={project.imageAlt} />
              </div>
              <p>{project.meta}</p>
              <h3>{project.title}</h3>
              <span>{project.detail}</span>
              <div className="projectActions">
                <a href={project.href} rel="noreferrer" target="_blank">
                  {project.linkLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section notesSection" id="notes">
        <div className="sectionHeader">
          <h2>Engineering references</h2>
        </div>
        <div className="notesGrid">
          {notes.map((note) => (
            <a className="noteCard" href={note.href} key={note.title} rel="noreferrer" target="_blank">
              <div className="noteVisual">
                <img src={note.image} alt={note.imageAlt} />
              </div>
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
        <div className="educationIntro">
          <h2>Education</h2>
          <p>Graduate data science training backed by information technology fundamentals and production data engineering work.</p>
        </div>
        <div className="educationDetails">
          <article className="educationCard">
            <div className="schoolMark">UCSD</div>
            <div>
              <h3>University of California, San Diego</h3>
              <p>Master of Science in Data Science</p>
              <span>Expected Apr 2027 / GPA 4.0 / Halicioglu Data Science Scholarship</span>
            </div>
          </article>
          <article className="educationCard">
            <div className="schoolMark asuMark">ASU</div>
            <div>
              <h3>Arizona State University</h3>
              <p>BS Information Technology</p>
              <span>Completed Aug 2025 / GPA 4.0 / New American Scholarship / Dean's List</span>
            </div>
          </article>
        </div>
      </section>

      <footer className="footer">
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}
