import { describe, it, expect } from "vitest";
import { filterProjectsByTech, Project } from "./filterProjects";

const projects: Project[] = [
  { id: 1, title: "Portfolio", techStack: ["React", "TypeScript"] },
  { id: 2, title: "Weather App", techStack: ["React", "TailwindCSS"] },
  { id: 3, title: "Blog", techStack: ["Next.js", "TypeScript"] },
];

describe("filterProjectsByTech", () => {
  it("returns projects that include the given tech", () => {
    const result = filterProjectsByTech(projects, "React");
    expect(result).toHaveLength(2);
    expect(result[0].title).toBe("Portfolio");
  });

  it("is case-insensitive", () => {
    const result = filterProjectsByTech(projects, "typescript");
    expect(result).toHaveLength(2);
  });

  it("returns an empty array when no projects match", () => {
    const result = filterProjectsByTech(projects, "Vue");
    expect(result).toHaveLength(0);
  });

  it("returns an empty array when given an empty list", () => {
    const result = filterProjectsByTech([], "React");
    expect(result).toHaveLength(0);
  });
});
