type SkillCardProps = {
  name: string
  category: string
}

function SkillCard({ name, category }: SkillCardProps) {
  return (
    <div className="skill-card reveal">
      <h3>{name}</h3>
      <p>{category}</p>
    </div>
  )
}

export default SkillCard