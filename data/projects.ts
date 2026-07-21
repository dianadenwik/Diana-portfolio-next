export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  url?: string;
  likes: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Page",
    description:
      "Personal portfolio built with HTML and CSS. Includes dark mode toggle and contact form.",
    techStack: ["HTML", "CSS"],
    url: "",
    likes: 0,
  },
  {
    id: 2,
    title: "HackYourFuture Cookbook",
    description:
      "Full-stack recipe web app built as a group project. I built the backend with SQLite, REST API endpoints, and an AI feature using GitHub Models.",
    techStack: ["Node.js", "SQLite", "Express", "TypeScript"],
    url: "",
    likes: 0,
  },
  {
    id: 3,
    title: "Team Page",
    description:
      "React practice project showing a team of people with cards, online status, and CSS styling.",
    techStack: ["React", "TypeScript", "Vite"],
    url: "",
    likes: 0,
  },
];

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getProjectById(id: number): Promise<Project | undefined> {
  return projects.find((p) => p.id === id);
}