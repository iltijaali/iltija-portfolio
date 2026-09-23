import { useState, type FormEvent } from 'react';
import type { Profile } from '../types/portfolio';

interface ContactProps {
  profile: Profile;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact({ profile }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message ?? 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h2 className="font-mono text-sm text-accent">06. What's Next?</h2>
      <h3 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">Get In Touch</h3>
      <p className="mt-4 text-slate-600">
        I'm currently open to new opportunities. Whether you have a question or just
        want to say hi, my inbox is always open.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-4 text-left">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            required
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
          />
          <input
            required
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
        <textarea
          required
          minLength={10}
          rows={5}
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
        />

        <div className="flex flex-col items-center gap-3">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="rounded bg-accent px-8 py-3 font-mono text-sm font-semibold text-white shadow-sm shadow-accent/20 transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="font-mono text-sm text-emerald-600">
              Thanks — your message has been sent!
            </p>
          )}
          {status === 'error' && (
            <p className="font-mono text-sm text-red-600">
              {errorMessage} You can also email me directly at{' '}
              <a href={`mailto:${profile.email}`} className="underline">
                {profile.email}
              </a>
              .
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
