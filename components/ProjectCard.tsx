interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  url?: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  url,
}: ProjectCardProps) {
  return (
    <li className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-1">
        {description}
      </p>

      {techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {url && url !== "" && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand font-medium text-sm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          View project →
        </a>
      )}
    </li>
  );
}
