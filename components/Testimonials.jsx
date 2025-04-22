import React from "react";
import "../App.css";

const Testimonials = () => (
  <section id="testimonials" className="testimonials-section">
    <h2>Testimonials</h2>
    <div className="testimonials-container">
      <blockquote className="testimonial">
        “Sulagna is one of the most reliable and proactive developers I’ve worked with.”
        <footer>— Teammate from Hackathon</footer>
      </blockquote>
      <blockquote className="testimonial">
        “Her quick learning and problem-solving ability impressed the whole team.”
        <footer>— Former Manager at Priceline</footer>
      </blockquote>
    </div>
  </section>
);

export default Testimonials;
