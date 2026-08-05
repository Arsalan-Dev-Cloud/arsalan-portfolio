import { useEffect, useState } from "react"
const API_URL = import.meta.env.VITE_API_URL
import ProjectCard from "../components/ProjectCard"

type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects)
      })
      .catch((error) => {
        console.error("Error fetching projects:", error)
      })
  }, [])

  return (
    <main className="projects-page">

      <section className="projects">

        <div className="section-heading">
          <p>What I've Built</p>
          <h1>My Projects</h1>
        </div>

        <div className="projects-container">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          ))}

        </div>

      </section>

    </main>
  )
}

export default Projects