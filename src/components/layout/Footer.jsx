import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, Terminal } from 'lucide-react';

export function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#00ff66]/20 bg-[#050b08] pt-10 pb-6 font-mono text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-[#00ff66]/10">
          
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/40">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-mono">
                {personalInfo.name}
              </h3>
              <p className="text-[10px] text-[#00ff66]">
                {personalInfo.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30 hover:bg-[#00ff66] hover:text-slate-950 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30 hover:bg-[#00ff66] hover:text-slate-950 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socialLinks.email}
              className="p-2 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30 hover:bg-[#00ff66] hover:text-slate-950 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30 hover:bg-[#00ff66] hover:text-slate-950 transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p>Built with React, Three.js 3D Laptop & Terminal CLI</p>
        </div>
      </div>
    </footer>
  );
}
