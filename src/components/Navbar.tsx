import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import ThemeSwitcher from "./ThemeSwitcher";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Arsalan<span>.</span>
      </Link>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/experience"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Experience
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/education"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Education
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      <div className="nav-actions">
        <ThemeSwitcher />
      </div>
    </nav>
    
  )
}

export default Navbar