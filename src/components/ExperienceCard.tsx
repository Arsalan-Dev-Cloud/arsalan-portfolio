type ExperienceCardProps = {
  role: string
  company: string
  period: string
  description: string
  technologies: string[]
}

function ExperienceCard({
  role,
  company,
  period,
  description,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="experience-card reveal">

      <div className="experience-header">
        <div>
          <h3>{role}</h3>
          <h4>{company}</h4>
        </div>

        <span className="experience-date">
          {period}
        </span>
      </div>

      <p className="experience-description">
        {description}
      </p>

      <div className="experience-tags">
        {technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

    </div>
  )
}

export default ExperienceCard