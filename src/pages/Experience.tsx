import ExperienceCard from "../components/ExperienceCard"
import { experiences } from "../data/experience"

function Experience() {
  return (
    <main className="experience-page">

      <section className="experience">

        <div className="section-heading">
          <p>My Professional Journey</p>
          <h1>Experience</h1>
        </div>

        <div className="experience-container">

          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              role={experience.role}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              technologies={experience.technologies}
            />
          ))}

        </div>

      </section>

    </main>
  )
}

export default Experience