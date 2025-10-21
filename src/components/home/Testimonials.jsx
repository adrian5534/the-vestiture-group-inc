import React from 'react';
import '../../styles/home.css';

const testimonials = [
  {
    name: 'Alexandra Pierce',
    role: 'Homeowner',
    text: 'Their electrical team transformed our lighting—meticulous, safe, and stunning. It elevated the entire home.',
  },
  {
    name: 'Jordan Evans',
    role: 'Developer',
    text: 'Professional guidance across acquisition and listing helped us secure exceptional outcomes for our portfolio.',
  },
  {
    name: 'Priya Shah',
    role: 'Investor',
    text: 'Discreet, efficient, and always premium. The integrated approach saves time and delivers real value.',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Client Testimonials</h2>
      <p className="testimonials-desc">
        What our clients say about partnering with us
      </p>
      <div className="testimonials-grid">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="testimonial-header">
              <span className="testimonial-name">{t.name}</span>
              <span className="testimonial-role">{t.role}</span>
            </div>
            <p className="testimonial-text">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}