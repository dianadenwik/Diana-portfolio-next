import Projects from "@/components/Projects";
import { getProjects } from "@/data/projects";

export const metadata = {
  title: "Projects — Diana Chukhrai",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return <Projects projects={projects} />;
}