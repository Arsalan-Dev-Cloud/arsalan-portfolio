import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>Arsalan.</h3>

        <p>
          Building modern web applications and continuously learning new
          technologies.
        </p>

        <div className="footer-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <p className="copyright">
          © 2026 Shaikh Arsalan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer