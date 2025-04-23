import React from "react";

const links = ["home", "about", "projects", "resume", "blogs"];

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <h1 className="logo"></h1>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link} className="nav-item">
            <a href={`#${link}`} className="nav-link">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
