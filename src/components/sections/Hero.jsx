import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Terminal, Code2, Globe } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { TechPlanetsSolarSystem3D } from '../3d/TechPlanetsSolarSystem3D';
import { TerminalCLI } from '../ui/TerminalCLI';

export function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-screen flex items-center bg-[#050b08]">
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff66]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="terminal-window p-6 sm:p-8 flex flex-col justify-between h-full">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/40 text-xs font-mono mb-6 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
                  <span>{personalInfo.educationInfo}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-white font-mono leading-tight tracking-tight">
                  <span className="text-[#00ff66] text-glow-green block text-lg font-normal mb-1">&gt; WHOAMI</span>
                  {personalInfo.name}
                </h1>

                <div className="mt-3 flex items-center gap-2 text-cyan-400 font-bold text-base sm:text-lg font-mono">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                  <span>{personalInfo.role}</span>
                </div>

                <p className="mt-5 text-sm sm:text-base text-slate-300 font-mono leading-relaxed">
                  "{personalInfo.headline}"
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30">Java</span>
                  <span className="px-2.5 py-1 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30">Spring Boot</span>
                  <span className="px-2.5 py-1 rounded bg-[#0f1f18] text-cyan-300 border border-cyan-500/30">React.js</span>
                  <span className="px-2.5 py-1 rounded bg-[#0f1f18] text-amber-300 border border-amber-500/30">MySQL</span>
                  <span className="px-2.5 py-1 rounded bg-[#0f1f18] text-purple-300 border border-purple-500/30">JWT</span>
                </div>

                <TerminalCLI />
              </div>

              <div className="mt-6 pt-6 border-t border-[#00ff66]/20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-5 py-2.5 rounded bg-[#00ff66] text-slate-950 font-bold text-xs flex items-center gap-2 hover:shadow-[0_0_20px_#00ff66] transition-all"
                  >
                    <span>./view-projects.sh</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={personalInfo.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/40 hover:bg-[#00ff66] hover:text-slate-950 font-bold text-xs flex items-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>cat resume.pdf</span>
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30 hover:bg-[#00ff66] hover:text-slate-950 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30 hover:bg-[#00ff66] hover:text-slate-950 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.socialLinks.email}
                    className="p-2 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30 hover:bg-[#00ff66] hover:text-slate-950 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <TechPlanetsSolarSystem3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
