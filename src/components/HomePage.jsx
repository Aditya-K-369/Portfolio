import React, { useEffect, useState, useCallback } from "react";
import "../index.css"; 
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import "../index.css";

const HomePage = () => {
  const texts = [
    "Full Stack (MERN) Development",
    "Software Development",
    "Backend Development",
    "API Integration",
    "Frontend Development",
    "Database Design",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="homepage">
        <div className="container">
          
          <div className="text-section">
            <h2 className="greeting">Hi There,</h2>
            <h1 className="name">I'm K Aditya</h1>
            <h3 className="subtitle">
              I Am Into <span className="highlight">{texts[currentIndex]}</span>
            </h3>

            <button className="about-button">
              <a href="#about">About Me</a>
            </button>

            <div className="social-icons">
              <a
                href="https://www.instagram.com/k_aditya_shetty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-k-0b3295290/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="icon" />
              </a>
              <a
                href="https://github.com/Aditya-K-369"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>
              <a
                href="https://www.youtube.com/@Aditya_Devlops"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icon" />
              </a>
            </div>
          </div>

          <div className="image-section">
            <img src="/photo.jpg" alt="Aditya" className="profile-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
