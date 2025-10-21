import Header from '../components/home/Header.jsx';
import Expertise from '../components/home/Expertise.jsx';
import Featured from '../components/home/Featured.jsx';
import Instagram from '../components/home/Instagram.jsx';
import Testimonials from '../components/home/Testimonials.jsx';

export default function Home() {
  return (
    <main>
      {/* Top bar */}
      <div className="home-topbar">
        Ready to get started? Start a conversation with Daniel Palmer today.
      </div>
      {/* Header section */}
      <Header />
      {/* Expertise section */}
      <section className="home-section">
        <Expertise />
      </section>
      {/* Featured Projects & Properties */}
      <section className="home-section">
        <Featured />
      </section>
      {/* Instagram Gallery */}
      <section className="home-section">
        <Instagram />
      </section>
      {/* Testimonials */}
      <section className="home-section">
        <Testimonials />
      </section>
      {/* CTA Banner */}
      <div className="home-cta-banner">
        <span>Ready to power your next project or find your next property?</span>
        <button className="btn-accent">Start a Conversation</button>
      </div>
      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-main">
          <div>
            <strong>The Vestiture Group Inc.</strong>
            <p>
              Dual excellence in Electrical Services and Real Estate. Serving clients with precision, discretion, and style.
            </p>
            <small>© The Vestiture Group Inc. All rights reserved.</small>
          </div>
          <div>
            <strong>Quick Links</strong>
            <ul>
              <li>About</li>
              <li>Our Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <strong>Contact</strong>
            <ul>
              <li>hello@vestituregroup.com</li>
              <li>(555) 012-3456</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}