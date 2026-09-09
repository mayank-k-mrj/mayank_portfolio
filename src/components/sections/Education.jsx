import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';
import { GraduationCap, Calendar, Building2, BookOpen } from 'lucide-react';

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 lg:py-28 relative font-mono">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="cat /etc/academics.conf"
          title="Education Matrix"
          subtitle="Academic credentials at Buddha Institute of Technology."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-window p-0 overflow-hidden">
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 text-xs text-slate-300">btech_it.edu</span>
                </div>
                <span className="text-[10px] text-[#00ff66]">2022-2026</span>
              </div>

              <div className="p-6 sm:p-8 space-y-6 crt-scanlines">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/40">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-mono text-glow-green">
                      {education.degree}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">{education.institution} • {education.status}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono pl-3 border-l-2 border-[#00ff66]/40">
                  {education.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
