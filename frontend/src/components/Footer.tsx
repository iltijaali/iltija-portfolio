import type { Profile } from '../types/portfolio';

interface FooterProps {
  profile: Profile;
}

export default function Footer({ profile }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8 text-center font-mono text-xs text-slate-500">
      <div className="flex flex-wrap justify-center gap-4">
        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`} className="hover:text-accent">
          {profile.email}
        </a>
        <span>{profile.phone}</span>
      </div>
      <p className="mt-4">
        Built by {profile.name} with React &amp; NestJS.
      </p>
    </footer>
  );
}
