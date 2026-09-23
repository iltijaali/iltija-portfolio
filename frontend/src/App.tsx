import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { usePortfolioData } from './hooks/usePortfolioData';

export default function App() {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center font-mono text-accent">
        Loading…
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center font-mono text-red-600">
        <p>Couldn't load portfolio data.</p>
        <p className="text-sm text-slate-500">
          Make sure the backend API is running on port 3001 ({error}).
        </p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero profile={data.profile} />
        <About profile={data.profile} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
        <Contact profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
    </>
  );
}
