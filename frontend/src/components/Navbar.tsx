import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'bg-white/90 backdrop-blur border-b border-slate-200' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold text-accent">
          iltija<span className="text-slate-400">.dev</span>
        </a>

        <ul className="hidden gap-8 font-mono text-sm text-slate-600 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="text-slate-600 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-slate-200 bg-white px-6 py-4 font-mono text-sm text-slate-600 shadow-xl md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded px-2 py-2 transition-colors hover:bg-slate-50 hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
