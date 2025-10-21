import React from 'react';
import '../../styles/home.css';

const projects = [
  {
    image: '/images/featured-penthouse.jpg',
    title: 'Penthouse Illumination',
    type: 'Electrical • Manhattan',
  },
  {
    image: '/images/featured-corner.jpg',
    title: 'UES Corner Residence',
    type: 'Real Estate • New York',
  },
  {
    image: '/images/featured-suite.jpg',
    title: 'Smart Integration Suite',
    type: 'Electrical • Brooklyn',
  },
];

export default function Featured() {
  return (
    <section className="featured">
      <h2 className="featured-title">Featured Projects & Properties</h2>
      <p className="featured-desc">
        Select work and listings from recent engagements
      </p>
      <div className="featured-grid">
        {projects.map((project, idx) => (
          <div className="featured-card" key={idx}>
            <div className="featured-img-wrap">
              <img src={project.image} alt={project.title} className="featured-img" />
            </div>
            <div className="featured-info">
              <h3 className="featured-card-title">{project.title}</h3>
              <span className="featured-card-type">{project.type}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}