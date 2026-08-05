import { useEffect, useState } from "react"
const API_URL = import.meta.env.VITE_API_URL
import SkillCard from "../components/SkillCard"

type Skill = {
  name: string
  category: string
}

function Skills() {
  const [skills, setSkills] = useState<Skill[]>([])

  useEffect(() => {
    fetch(`${API_URL}/api/skills`)
      .then((response) => response.json())
      .then((data) => {
        setSkills(data.skills)
      })
      .catch((error) => {
        console.error("Error fetching skills:", error)
      })
  }, [])

  return (
    <main className="skills-page">

      <section className="skills">

        <div className="section-heading">
          <p>Technologies I Work With</p>
          <h1>My Skills</h1>
        </div>

        <div className="skills-container">

          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              category={skill.category}
            />
          ))}

        </div>

      </section>

    </main>
  )
}

export default Skills