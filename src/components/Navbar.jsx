import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="nav-topbar">
        Ready to get started? Start a conversation with Daniel Palmer today.
      </div>
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-logo" />
          <span className="navbar-title">The Vestiture Group Inc.</span>
        </div>
        <button
          className="navbar-burger"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          <li><Link to="/" className={pathname === '/' ? 'active' : ''} onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/about" className={pathname === '/about' ? 'active' : ''} onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/services" className={pathname === '/services' ? 'active' : ''} onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link to="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
}