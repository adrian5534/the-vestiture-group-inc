import '../styles/about.css';

export default function About() {
  return (
    <main className="about-main">
      {/* Page header */}
      <section className="about-header">
        <h1>About The Vestiture Group</h1>
      </section>
      <div className="about-header-details">
        <p className="about-desc">
          Founded by Daniel Palmer, The Vestiture Group Inc. blends precision electrical craftsmanship with New York real estate expertise—serving discerning clients with discretion and excellence.
        </p>
        <button className="btn-accent about-cta">Work With Us</button>
      </div>
      {/* Ethos & Leadership */}
      <section className="about-grid">
        <div className="about-ethos card-outline">
          <strong>Our Ethos</strong>
          <p>
            Luxury is quiet confidence. From wiring penthouses to brokering landmark residences, we prioritize safety, elegance, and performance—always.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-value">15+ yrs</span>
              <span className="about-stat-label">Electrical Experience</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-value">$50M+</span>
              <span className="about-stat-label">Sales Facilitated</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-value">98%</span>
              <span className="about-stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="about-leadership card-outline">
          <strong>Leadership</strong>
          <div className="about-leader-card">
            <img src="/images/daniel-palmer.jpg" alt="Daniel Palmer" className="about-leader-img" />
            <div>
              <span className="about-leader-name">Daniel Palmer</span>
              <span className="about-leader-role">Founder & Principal</span>
            </div>
          </div>
          <div className="about-licenses">
            <div className="about-license">
              <span className="about-license-title">Licensed Electrician (NY)</span>
              <span className="about-license-desc">Insured • Residential & Commercial</span>
            </div>
            <div className="about-license">
              <span className="about-license-title">NY Real Estate Salesperson</span>
              <span className="about-license-desc">Specializing in luxury living</span>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery */}
      <section className="about-gallery">
        <img src="/images/featured-suite.jpg" alt="Project 1" />
        <img src="/images/featured-penthouse.jpg" alt="Project 2" />
        <img src="/images/header-building.jpg" alt="Project 3" />
      </section>
      {/* Quote */}
      <section className="about-quote card-outline">
        <span>
          "We treat every project like a private commission—precise, discreet, and built to endure." — Daniel Palmer
        </span>
      </section>
    </main>
  );
}