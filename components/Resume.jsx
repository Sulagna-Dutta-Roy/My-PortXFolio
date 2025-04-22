import React from "react";
import "../App.css";

const Resume = () => (
  <section id="resume" className="resume-section">
    <h2>Resume</h2>
    <p className="resume-text">Feel free to download my resume to learn more about my experience and skills.</p>
    <a href="/Sulagna_Dutta_Resume.pdf" download className="resume-button">
      Download Resume
    </a>
  </section>
);

export default Resume;

