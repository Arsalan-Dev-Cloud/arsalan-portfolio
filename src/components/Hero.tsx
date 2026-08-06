import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/arsalan-profile.jpg";

const roles = [
  "Full Stack Web Developer",
  "Data Engineer",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);

      setTimeout(() => {
        setRoleIndex((prevIndex) => {
          return (prevIndex + 1) % roles.length;
        });

        setIsChanging(false);
      }, 450);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="hero reveal">

      {/* LEFT SIDE */}
      <div className="hero-content">

        <span className="hero-intro">
          Hello, I'm
        </span>

        <h1>
          Shaikh <span>Mohammad</span>
          <span>Arsalan</span> Mohsin
        </h1>

        {/* ANIMATED ROLE */}
        <div className="role-wrapper">

          <div className="role-line"></div>

          <h2
            className={`animated-role ${
              isChanging ? "role-exit" : "role-enter"
            }`}
          >
            {roles[roleIndex]}
          </h2>

        </div>

        <p className="hero-description">
          I build modern, responsive, and user-friendly web
          applications using React, TypeScript, Python, and
          databases.
        </p>

        <div className="hero-buttons">

          <Link
            to="/projects"
            className="btn primary-btn"
          >
            View Projects
          </Link> 
          
          <Link
            to="/contact"
            className="btn secondary-btn"
          >
            Contact Me
          </Link>

          <a
            href="/resume/Shaikh-Arsalan-Resume.pdf"
            className="btn secondary-btn"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

        </div>

        <div className="social-links">
          
          <Link
            to="https://github.com/Arsalan-Dev-Cloud"
            target="_blank"
            rel="noreferrer"
          >
            G
          </Link>

          <Link
            to="https://www.linkedin.com/in/shaikh-arsalan-92b00941a"
            target="_blank"
            rel="noreferrer"
          >
            in
          </Link>

          <Link to="mailto:shaikhmohammadarsalan5@gmail.com">
            @
          </Link>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="hero-image">
        <div className="image-wrapper">
          <img
            src={profileImage}
            alt="Shaikh Arsalan"
            className="profile-image"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;