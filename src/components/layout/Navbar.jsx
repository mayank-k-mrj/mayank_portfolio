import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Terminal, Code2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 font-mono">
      <nav
        className={`mx-auto max-w-7xl rounded-xl transition-all duration-300 ${
          isScrolled
            ? 'terminal-window py-2.5 px-5 shadow-2xl bg-[#0a1410]/95'
            : 'bg-transparent py-3 px-5'
        }`}
      >
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2 text-sm font-bold text-[#00ff66] group"
          >
            <div className="p-1.5 rounded bg-[#0f1f18] border border-[#00ff66]/40 text-[#00ff66]">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="text-white group-hover:text-[#00ff66] transition-colors">
              mayank@dev<span className="text-[#00ff66]">:~$</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1 bg-[#050b08] p-1 rounded-lg border border-[#00ff66]/20">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all relative ${
                    isActive
                      ? 'text-[#00ff66] font-bold bg-[#0f1f18] border border-[#00ff66]/40'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  ./{item.label.toLowerCase()}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded text-xs font-bold bg-[#00ff66] text-slate-950 hover:shadow-[0_0_15px_#00ff66] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>resume.pdf</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-16 left-4 right-4 z-50 rounded-xl terminal-window p-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2 font-mono">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`px-3 py-2.5 rounded text-xs transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/40 font-bold'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  &gt; ./{item.label.toLowerCase()}
                </a>
              ))}
              <div className="pt-3 border-t border-[#00ff66]/20 mt-2">
                <a
                  href={portfolioData.personalInfo.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded text-xs font-bold bg-[#00ff66] text-slate-950"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
