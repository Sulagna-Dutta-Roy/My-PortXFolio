import React from "react";

const skills = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Splunk",
  "Git",
  "Jira",
  "New Relic",
  "Generative AI",
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;