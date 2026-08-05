export type Education = {
  id: number
  degree: string
  field: string
  status: string
  description: string
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Master of Computer Applications",
    field: "MCA",
    status: "Currently Pursuing",
    description:
      "Postgraduate studies focused on computer applications, software development, databases, and modern technologies.",
  },

  {
    id: 2,
    degree: "Bachelor of Science",
    field: "Computer Science",
    status: "Completed",
    description:
      "Undergraduate studies in Computer Science covering programming, databases, software concepts, and computer systems.",
  },
]