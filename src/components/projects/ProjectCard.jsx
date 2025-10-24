import { useState } from "react";

export default function ProjectCard({ project, showModal = true }) {
  const [open, setOpen] = useState(false);
  const hasImages = Array.isArray(project.images) && project.images.length > 0;
  const mainImage = hasImages ? project.images[0] : "/images/placeholder.jpg";

  return (
    <>
      <div className="project-card card-outline" onClick={() => showModal && hasImages && setOpen(true)}>
        {/* Main image */}
        <div className="project-img-wrap">
          <img src={mainImage} alt={project.title} className="project-img" />
        </div>
        {/* Details block */}
        <div className="project-info">
          <div className="project-title">{project.title}</div>
          <div className="project-meta-grid">
            <div>
              <span className="project-meta-label">Category</span>
              <span className="project-meta-value">{project.type}</span>
            </div>
            <div>
              <span className="project-meta-label">Year</span>
              <span className="project-meta-value">{project.year}</span>
            </div>
            <div>
              <span className="project-meta-label">Scope</span>
              <span className="project-meta-value">{project.tags?.join(", ")}</span>
            </div>
            <div>
              <span className="project-meta-label">Location</span>
              <span className="project-meta-value">{project.location || "—"}</span>
            </div>
          </div>
          {/* Keywords/tags */}
          <div className="project-keywords">
            {project.keywords?.map(tag => (
              <span className="project-keyword" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
      {/* Modal for gallery */}
      {open && hasImages && (
        <div className="project-modal" onClick={() => setOpen(false)}>
          <div className="project-modal-content" onClick={e => e.stopPropagation()}>
            <h2>{project.title}</h2>
            <div className="project-modal-images">
              {project.images.map((img, idx) => (
                <img src={img} alt={`${project.title} ${idx + 1}`} key={img} />
              ))}
            </div>
            <button className="btn-secondary" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}