import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaPlus, FaCalendarAlt, FaEnvelope } from "react-icons/fa";
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
      {/* Top section: Main image + details card side by side */}
      <section className="details-top">
        <div className="details-image-container">
          <img
            src={project.images?.[0] || "/images/placeholder.jpg"}
            alt={project.title}
            className="details-main-img"
          />
        </div>
        <div className="details-card-container">
          <div className="details-card card-outline">
            <h2 className="details-title">{project.title}</h2>
            <div className="details-meta">
              <div className="details-meta-item">
                <span className="details-label">Category</span>
                <span className="details-value">{project.type}</span>
              </div>
              <div className="details-meta-item">
                <span className="details-label">Year</span>
                <span className="details-value">{project.year}</span>
              </div>
              <div className="details-meta-item">
                <span className="details-label">Scope</span>
                <span className="details-value">{project.tags?.join(", ")}</span>
              </div>
              <div className="details-meta-item">
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
              <button className="btn-secondary" onClick={() => navigate("/projects")}><FaArrowLeft /> Back to Projects</button>
              <button className="btn-accent"><FaPlus /> Add to Proposal</button>
            </div>
          </div>
          {/* Get In Touch below the top card on the right */}
          <div className="details-card card-outline mt-3">
            <h3 className="details-section-title">Get In Touch</h3>
            <div className="details-contact-actions">
              <button className="btn-secondary"><FaCalendarAlt /> Book a Consultation</button>
              <button className="btn-secondary"><FaEnvelope /> Email Project Details</button>
            </div>
          </div>
        </div>
      </section>
      {/* Combined Overview, Key Features, Specs in one card */}
      <section className="details-content">
        <div className="details-card card-outline mb-3">
          <div className="details-section">
            <h3 className="details-section-title">Overview</h3>
            <p>{project.description || "No description available."}</p>
          </div>
          <div className="details-section">
            <h3 className="details-section-title">Key Features</h3>
            <div className="details-features-grid">
              {project.images?.slice(1, 4).map((img, idx) => (
                <img src={img} alt={`Feature ${idx + 1}`} key={img} className="details-feature-img" />
              ))}
            </div>
          </div>
          <div className="details-section">
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