export type Experience = {
  id: number
  role: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Web Developer",
    company: "Professional Experience",
    period: "2026 - Present",
    description:
      "Working on modern web applications and developing responsive, user-friendly interfaces while gaining practical experience with frontend and backend technologies.",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "SQL",
      "Git",
    ],
  },
]