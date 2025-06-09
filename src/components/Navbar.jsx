import React, { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Coding", "Projects", "Contact"];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">&lt;/&gt; K Aditya</div>
        
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`}  key={item}>
              {item}
            </a>
          ))}
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
