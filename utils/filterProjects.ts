export type Project = {
  id: number
  title: string
  techStack: string[]
}

export function filterProjectsByTech(projects: Project[], tech: string): Project[] {
  return projects.filter(p =>
    p.techStack.map(t => t.toLowerCase()).includes(tech.toLowerCase())
  )
}