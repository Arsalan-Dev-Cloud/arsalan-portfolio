import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Hero from "../components/Hero"
import { experiences } from "../data/experience"

type Skill = {
  name: string
  category: string
}

type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
}

function Home() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/skills")
      .then((response) => response.json())
      .then((data) => {
        setSkills(data.skills)
      })
      .catch((error) => {
        console.error("Error fetching skills:", error)
      })

    fetch("http://127.0.0.1:8000/api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects)
      })
      .catch((error) => {
        console.error("Error fetching projects:", error)
      })
  }, [])

  return (
    <main>
      <Hero />

      {/* ABOUT PREVIEW */}
      <section className="home-section">
        <div className="section-heading">
          <p>Who I Am</p>
          <h2>About Me</h2>
        </div>

        <div className="home-about">
          <p>
            I'm a developer focused on modern web development and data
            technologies. I enjoy building practical applications using
            React, TypeScript, Python, SQL, and related technologies.
          </p>

          <Link to="/about" className="home-link-btn">
            Learn More →
          </Link>
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="home-section alternate-section">
        <div className="section-heading">
          <p>Technologies</p>
          <h2>My Skills</h2>
        </div>

        <div className="home-skills">
          {skills.slice(0, 6).map((skill) => (
            <div className="home-skill-card" key={skill.name}>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </div>
          ))}
        </div>

        <div className="home-center-button">
          <Link to="/skills" className="home-link-btn">
            View All Skills →
          </Link>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="home-section">
        <div className="section-heading">
          <p>Featured Work</p>
          <h2>Projects</h2>
        </div>

        <div className="home-projects">
          {projects.slice(0, 3).map((project) => (
            <div className="home-project-card" key={project.id}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="home-project-tech">
                {project.technologies.slice(0, 4).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="home-center-button">
          <Link to="/projects" className="home-link-btn">
            View All Projects →
          </Link>
        </div>
      </section>

      {/* EXPERIENCE PREVIEW */}
      <section className="home-section alternate-section">
        <div className="section-heading">
          <p>My Journey</p>
          <h2>Experience</h2>
        </div>

        {experiences.length > 0 && (
          <div className="home-experience">
            <h3>{experiences[0].role}</h3>

            <h4>{experiences[0].company}</h4>

            <span>{experiences[0].period}</span>

            <p>{experiences[0].description}</p>
          </div>
        )}

        <div className="home-center-button">
          <Link to="/experience" className="home-link-btn">
            View Experience →
          </Link>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="home-contact-cta">
        <p>Have a project or opportunity?</p>

        <h2>Let's Build Something Together.</h2>

        <Link to="/contact" className="btn primary-btn">
          Contact Me
        </Link>
      </section>
    </main>
  )
}

export default Home