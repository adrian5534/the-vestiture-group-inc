import Header from '../components/home/Header.jsx';
import Expertise from '../components/home/Expertise.jsx';
import Featured from '../components/home/Featured.jsx';
import Instagram from '../components/home/Instagram.jsx';
import Testimonials from '../components/home/Testimonials.jsx';

export default function Home() {
  return (
    <main>
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
    </main>
  );
}