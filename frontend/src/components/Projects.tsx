import type { ProjectEntry } from '../types/portfolio';

interface ProjectsProps {
  projects: ProjectEntry[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="section-heading">
        <span className="text-accent font-mono text-lg mr-2">04.</span>
        Projects
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
              <span className="font-mono text-xs text-slate-500">{project.period}</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{project.description}</p>

            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-accent">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2 pt-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
