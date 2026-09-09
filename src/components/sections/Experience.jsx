import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, ShieldCheck, Cpu, Layers, Key, Database, Layout, GitBranch } from 'lucide-react';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 lg:py-28 relative font-mono">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="tail -f /var/log/experience.log"
          title={experience.title}
          subtitle="Hands-on full-stack development experience across Spring Boot, REST APIs, JWT, Spring Security, and MySQL."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-12"
          >
            <div className="terminal-window p-6 sm:p-8">
              <div className="flex items-center gap-2 text-cyan-400 text-xs mb-2">
                <Terminal className="w-4 h-4" />
                <span>$ cat /proc/summary.log</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-mono pl-3 border-l-2 border-[#00ff66]/40">
                "{experience.summary}"
              </p>
            </div>
          </motion.div>

          {experience.highlights.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="lg:col-span-4 sm:col-span-6"
            >
              <div className="terminal-window p-5 h-full flex flex-col justify-between text-xs">
                <div>
                  <span className="text-[#00ff66] font-bold block mb-1">&gt; {item.name}</span>
                  <p className="text-slate-300 leading-relaxed text-[11px] font-mono">
                    {item.detail}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-[#00ff66]/20 text-[10px] text-cyan-400">
                  STATUS: VERIFIED
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
