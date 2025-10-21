import { FaBolt, FaBuilding } from 'react-icons/fa';
import '../../styles/home.css';

export default function Expertise() {
  return (
    <section className="expertise">
      <h2 className="expertise-title">Our Expertise</h2>
      <p className="expertise-desc">
        Dual proficiency for an integrated premium experience
      </p>
      <div className="expertise-cards">
        {/* Electrical Services */}
        <div className="expertise-card">
          <div className="expertise-icon">
            <FaBolt size={28} />
          </div>
          <div>
            <h3>Electrical Services</h3>
            <p className="expertise-card-desc">
              High-end residential and commercial installations, smart systems, and preventative maintenance with impeccable standards.
            </p>
            <div className="expertise-tags">
              <span className="tag">Lighting Design</span>
              <span className="tag">Panel Upgrades</span>
              <span className="tag">Smart Homes</span>
            </div>
          </div>
        </div>
        {/* Real Estate Services */}
        <div className="expertise-card">
          <div className="expertise-icon">
            <FaBuilding size={28} />
          </div>
          <div>
            <h3>Real Estate Services</h3>
            <p className="expertise-card-desc">
              Advisory and brokerage for luxury properties, from acquisition to listing, with a focus on value and discretion.
            </p>
            <div className="expertise-tags">
              <span className="tag">Buyer Advisory</span>
              <span className="tag">Seller Representation</span>
              <span className="tag">Market Insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}