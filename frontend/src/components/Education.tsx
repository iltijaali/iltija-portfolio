import type { EducationEntry } from '../types/portfolio';

interface EducationProps {
  education: EducationEntry[];
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="section-alt border-y border-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="section-heading">
          <span className="text-accent font-mono text-lg mr-2">05.</span>
          Education
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {education.map((entry) => (
            <div
              key={entry.school}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-slate-900">{entry.school}</h3>
                <span className="font-mono text-xs text-slate-500">{entry.period}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{entry.credential}</p>
              <p className="mt-1 font-mono text-xs text-accent">{entry.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
