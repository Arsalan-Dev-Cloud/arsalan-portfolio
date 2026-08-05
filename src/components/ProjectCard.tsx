import { Code2, ExternalLink, Clock3 } from "lucide-react"

type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
}

function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  const hasGithub = Boolean(github)
  const hasDemo = Boolean(demo)

  return (
    <div className="project-card reveal">

      <h3>{title}</h3>

      <p className="project-description">
        {description}
      </p>

      <div className="project-technologies">
        {technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-buttons">

        {/* BOTH LINKS AVAILABLE */}
        {hasGithub && hasDemo && (
          <>
            <a
              href={github}
              className="project-btn"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={17} />
              GitHub
            </a>

            <a
              href={demo}
              className="project-btn demo-btn"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          </>
        )}

        {/* ONLY GITHUB AVAILABLE */}
        {hasGithub && !hasDemo && (
          <>
            <a
              href={github}
              className="project-btn"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={17} />
              GitHub
            </a>

            <span className="project-btn project-btn-disabled">
              <Clock3 size={17} />
              Coming Soon
            </span>
          </>
        )}

        {/* ONLY DEMO AVAILABLE */}
        {!hasGithub && hasDemo && (
          <>
            <span className="project-btn project-btn-disabled">
              <Clock3 size={17} />
              Coming Soon
            </span>

            <a
              href={demo}
              className="project-btn demo-btn"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          </>
        )}

        {/* NO LINKS AVAILABLE */}
        {!hasGithub && !hasDemo && (
          <span className="project-btn project-btn-disabled">
            <Clock3 size={17} />
            Coming Soon
          </span>
        )}

      </div>

    </div>
  )
}

export default ProjectCard