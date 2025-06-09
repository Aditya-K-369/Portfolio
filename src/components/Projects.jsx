import React from "react";


const Project = () => {
    const projects = [
        {
          title: "Real-Time Device Tracker",
          description:
            "A live tracking system using Socket.IO and Node.js, visualizing connected devices in real-time on an interactive map.",
          image:
            "https://4.imimg.com/data4/ST/AG/MY-10899139/real-time-tracking-system-500x500.jpg",
        },
        {
          title: "Chess Game Implementation",
          description:
            "A full chess game built with JavaScript and HTML5 Canvas, handling piece logic, move validation, and game rules.",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijzpQEKaeOGBDgcybusjc6eTZiZdPZ_APijPg5dAd9hFkrvMj5cTMxYlLEqsK4sYq0uY&usqp=CAU",
        },
        {
          title: "React News App",
          description:
            "A React-based news app that fetches top headlines using a News API, complete with filters and responsive UI.",
          image:
            "https://www.aiseesoft.com/images/article/news-app/best-news-app.jpg",
        },
        {
          title: "E-Commerce Website",
          description:
            "A complete MERN stack e-commerce platform with product management, user authentication, cart, and checkout features.",
          image:
            "https://marketingreport.one/Article%20Images/Key%20Industy%20Images/e_commerce_Marketing_Report.jpg",
        },
      ];
      

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
