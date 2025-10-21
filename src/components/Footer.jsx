import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <strong>The Vestiture Group Inc.</strong>
          <p>
            Dual excellence in Electrical Services and Real Estate. Serving clients with precision, discretion, and style.
          </p>
          <small>© The Vestiture Group Inc. All rights reserved.</small>
        </div>
        <div className="footer-links">
          <strong>Quick Links</strong>
          <ul>
            <li>About</li>
            <li>Our Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-contact">
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
  );
}