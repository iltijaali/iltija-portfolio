import type { SkillGroup } from '../types/portfolio';

interface SkillsProps {
  skills: SkillGroup[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="section-heading">
        <span className="text-accent font-mono text-lg mr-2">02.</span>
        Skills
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="font-mono text-sm font-semibold text-accent">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-xs text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
