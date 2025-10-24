import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../data/projects.json";
import "../styles/details.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.projects.find(p => p.id === id);

  if (!project) {
    return <div className="details-main">Project not found.</div>;
  }

  return (
    <main className="details-main container-fluid">
      {/* Breadcrumb */}
      <nav className="details-breadcrumb">
        <span className="details-breadcrumb-link" onClick={() => navigate("/projects")}>Projects</span>
        <span className="details-breadcrumb-sep">›</span>
        <span>{project.title}</span>
      </nav>
      {/* Top section: Main image + details card */}
      <section className="details-top row">
        <div className="col-lg-7 col-md-6 col-12 mb-3">
          <img
            src={project.images?.[0] || "/images/placeholder.jpg"}
            alt={project.title}
            className="details-main-img"
          />
        </div>
        <div className="col-lg-5 col-md-6 col-12">
          <div className="details-card card-outline">
            <h2 className="details-title">{project.title}</h2>
            <div className="details-meta">
              <div>
                <span className="details-label">Category</span>
                <span className="details-value">{project.type}</span>
              </div>
              <div>
                <span className="details-label">Year</span>
                <span className="details-value">{project.year}</span>
              </div>
              <div>
                <span className="details-label">Scope</span>
                <span className="details-value">{project.tags?.join(", ")}</span>
              </div>
              <div>
                <span className="details-label">Location</span>
                <span className="details-value">{project.location || "—"}</span>
              </div>
            </div>
            <div className="details-tags">
              {project.keywords?.map(tag => (
                <span className="details-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <div className="details-actions">
              <button className="btn-secondary" onClick={() => navigate("/projects")}>Back to Projects</button>
              <button className="btn-accent">Add to Proposal</button>
            </div>
          </div>
        </div>
      </section>
      {/* Overview, Key Features, Specs, Get In Touch */}
      <section className="details-content row">
        <div className="col-lg-8 col-12">
          <div className="details-card card-outline mb-3">
            <h3 className="details-section-title">Overview</h3>
            <p>{project.description || "No description available."}</p>
          </div>
          <div className="details-card card-outline mb-3">
            <h3 className="details-section-title">Key Features</h3>
            <div className="details-features-grid">
              {project.images?.slice(1, 4).map((img, idx) => (
                <img src={img} alt={`Feature ${idx + 1}`} key={img} className="details-feature-img" />
              ))}
            </div>
          </div>
          <div className="details-card card-outline mb-3">
            <h3 className="details-section-title">Specifications</h3>
            <div className="details-specs-grid">
              {project.specs?.map(spec => (
                <div className="details-spec-row" key={spec.label}>
                  <span className="details-spec-label">{spec.label}</span>
                  <span className="details-spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="details-card card-outline mb-3">
            <h3 className="details-section-title">Get In Touch</h3>
            <div className="details-contact-actions">
              <button className="btn-secondary">Book a Consultation</button>
              <button className="btn-secondary">Email Project Details</button>
            </div>
          </div>
        </div>
      </section>
      {/* Related Projects */}
      {project.related?.length > 0 && (
        <section className="details-card card-outline details-related">
          <h3 className="details-section-title">Related Projects</h3>
          <div className="details-related-grid">
            {project.related.map(rel => (
              <div className="details-related-card" key={rel.id}>
                <img src={rel.image} alt={rel.title} className="details-related-img" />
                <div>
                  <div className="details-related-title">{rel.title}</div>
                  <div className="details-related-type">{rel.type} • {rel.year}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}