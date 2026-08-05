type EducationCardProps = {
  degree: string
  field: string
  status: string
  description: string
}

function EducationCard({
  degree,
  field,
  status,
  description,
}: EducationCardProps) {
  return (
    <div className="timeline-item reveal">

      <span className="timeline-dot"></span>

      <div className="timeline-content">

        <span className="timeline-date">
          {status}
        </span>

        <h3>{degree}</h3>

        <h4>{field}</h4>

        <p>{description}</p>

      </div>

    </div>
  )
}

export default EducationCard