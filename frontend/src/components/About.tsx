import { useState } from 'react';
import type { Profile } from '../types/portfolio';

// Place your photo at frontend/public/profile-photo.jpg — see frontend/public/README.md
const profilePhoto = '/profile-photo.jpg';

interface AboutProps {
  profile: Profile;
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

export default function About({ profile }: AboutProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-alt border-y border-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="section-heading">
          <span className="text-accent font-mono text-lg mr-2">01.</span>
          About Me
        </h2>

        <div className="mt-8 grid grid-cols-1 items-center gap-10 sm:grid-cols-[1fr_220px]">
          <p className="text-slate-600">
            I'm a full stack developer based in {profile.location}, focused on building
            scalable, secure web applications end to end &mdash; from RESTful APIs and
            role-based access control on the backend, to responsive, accessible interfaces
            on the frontend. My recent work spans NestJS, Laravel and Django REST
            Framework on the backend, paired with React and TypeScript on the frontend,
            and I care a lot about clean architecture and code that's easy to maintain.
          </p>

          <div className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-lg border-2 border-white shadow-md ring-1 ring-slate-200">
            {!imgError ? (
              <img
                src={profilePhoto}
                alt={profile.name}
                onError={() => setImgError(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-white font-mono text-4xl text-accent">
                {initials(profile.name)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
