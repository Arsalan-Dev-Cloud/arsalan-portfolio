import EducationCard from "../components/EducationCard"
import { education } from "../data/education"

function Education() {
  return (
    <main className="education-page">

      <section className="education">

        <div className="section-heading">
          <p>My Academic Journey</p>
          <h1>Education</h1>
        </div>

        <div className="education-container">

          {education.map((item) => (
            <EducationCard
              key={item.id}
              degree={item.degree}
              field={item.field}
              status={item.status}
              description={item.description}
            />
          ))}

        </div>

      </section>

    </main>
  )
}

export default Education