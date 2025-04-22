import React from "react";
import "../App.css"; // optional if styles are separated

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
