import type { Profile } from '../types/portfolio';

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps) {
  return (
    <section id="top" className="flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-sm text-accent">Hi, my name is</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-6xl">
          {profile.name}
        </h1>
        <h2 className="mt-2 text-3xl font-bold text-slate-400 sm:text-5xl">
          {profile.title}.
        </h2>
        <p className="mt-6 max-w-xl text-slate-600">{profile.summary}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded bg-accent px-6 py-3 font-mono text-sm font-semibold text-white shadow-sm shadow-accent/20 transition-colors hover:bg-accent-dark"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 flex gap-5 text-slate-500">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-accent"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
