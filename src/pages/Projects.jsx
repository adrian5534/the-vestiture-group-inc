import { useState } from "react";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/projects.json";
import "../styles/project.css";

const FILTERS = ["All", "Electrical", "Real Estate", "Residential", "Commercial"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  // Filter projects by tag
  const filtered = filter === "All"
    ? projectsData.projects
    : projectsData.projects.filter(
        p => p.tags?.includes(filter) || p.type?.includes(filter)
      );

  return (
    <main className="projects-main">
      <section className="projects-header">
        <h1>Featured Projects</h1>
        <p className="projects-desc">
          A curated selection across luxury electrical installations and New York real estate sales. Precision, discretion, and enduring value.
        </p>
        <button className="btn-accent projects-cta">Request Proposal</button>
      </section>
      <div className="projects-filters">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`projects-filter${filter === f ? " active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="projects-actions">
        <span className="projects-year">2024–2025 Highlights</span>
        <button className="btn-secondary projects-download">Download Portfolio</button>
      </div>
      <section className="projects-grid">
        {filtered.map(project => (
          <div
            key={project.id}
            className="project-card card-outline"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <div className="project-img-wrap">
              <img
                src={
                  Array.isArray(project.images) && project.images.length > 0
                    ? project.images[0]
                    : "/images/placeholder.jpg"
                }
                alt={project.title}
                className="project-img"
              />
            </div>
            <div className="project-info">
              <div className="project-title">{project.title}</div>
              <div className="project-type">{project.type}</div>
              <div className="project-year">{project.year}</div>
              <div className="project-tags">
                {project.tags?.map(tag => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="projects-viewall-wrap">
        <button className="btn-secondary projects-viewall">View All</button>
      </div>
      <section className="projects-cta-banner">
        <div>
          <strong>Discuss your next project</strong>
          <span className="projects-cta-desc">
            Daniel Palmer and team bring precision to electrical scopes and clarity to NY real estate transactions.
          </span>
        </div>
        <button className="btn-accent projects-cta-banner-btn">Request Consultation</button>
      </section>
    </main>
  );
}