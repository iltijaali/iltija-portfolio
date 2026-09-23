import type { ExperienceEntry } from '../types/portfolio';

interface ExperienceProps {
  experience: ExperienceEntry[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="section-alt border-y border-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="section-heading">
          <span className="text-accent font-mono text-lg mr-2">03.</span>
          Experience
        </h2>

        <div className="mt-8 space-y-8 border-l border-slate-200 pl-6">
          {experience.map((entry) => (
            <div key={entry.company} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-white" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900">
                  {entry.role} <span className="text-accent">@ {entry.company}</span>
                </h3>
                <span className="font-mono text-xs text-slate-500">{entry.period}</span>
              </div>
              <ul className="mt-3 space-y-2 text-slate-600">
                {entry.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-accent">▹</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
