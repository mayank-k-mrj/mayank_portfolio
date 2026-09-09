import React, { Suspense } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Achievements } from './components/sections/Achievements';
import { ResumeSection } from './components/sections/ResumeSection';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { BackgroundCanvas } from './components/3d/BackgroundCanvas';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#050b08] text-slate-100 selection:bg-[#00ff66]/30 selection:text-[#00ff66] overflow-x-hidden font-sans">
      <Suspense fallback={null}>
        <BackgroundCanvas />
      </Suspense>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
