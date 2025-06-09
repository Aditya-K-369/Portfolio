import React from "react";


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Contact</h3>
        <p><strong>Phone :</strong> +91 9063721005</p>
        <p><strong>Email :</strong> aditya369ajay@gmail.com</p>
      </div>

      <div className="footer-section center">
        <h3>Contact on Social Media</h3>
        <a
          href="https://www.linkedin.com/in/aditya-k-0b3295290/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="social-icon"
          />
        </a>
      </div>

      <div className="footer-section">
        <h3>Address</h3>
        <p>Hydrebad</p>
      </div>
    </footer>
  );
};

export default Footer;
