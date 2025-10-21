import React from 'react';
import '../../styles/home.css';

export default function Header() {
  return (
    <header className="home-header">
      <div className="home-header-image">
        {/* Replace with your actual image */}
        <img
          src="/images/header-building.jpg"
          alt="Modern building"
          className="header-img"
        />
        <div className="home-header-overlay">
          <div className="home-header-content">
            <p className="header-subtitle">
              Refined Electrical & Real Estate Excellence
            </p>
            <h1 className="header-title">
              Powering Spaces. Elevating Living.
            </h1>
            <p className="header-desc">
              The Vestiture Group Inc. delivers premium electrical solutions and curated real estate services for discerning clients.
            </p>
            <div className="header-actions">
              <button className="btn-accent">Our Services</button>
              <button className="btn-secondary">Book a Consultation</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}