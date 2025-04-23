import React from "react";
import "../App.css";

const blogs = [
  { title: "How I Built My Portfolio", link: "#" },
  { title: "Intro to React with Tailwind", link: "#" },
  { title: "Using AI in Web Dev", link: "#" }
];

const Blogs = () => (
  <section id="blogs" className="blogs-section">
    <h2>Blogs</h2>
    <div className="blog-list">
      {blogs.map((blog) => (
        <a key={blog.title} href={blog.link} className="blog-card">
          <h3>{blog.title}</h3>
        </a>
      ))}
    </div>
  </section>
);

export default Blogs;

