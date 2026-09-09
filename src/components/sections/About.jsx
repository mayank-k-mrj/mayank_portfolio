import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { AboutVisual3D } from '../3d/AboutVisual3D';
import { portfolioData } from '../../data/portfolioData';
import { Terminal, CheckCircle2, GraduationCap, Code2, Building2, Cpu, ShieldCheck, Database, Server } from 'lucide-react';

export function About() {
  const { about, personalInfo, education } = portfolioData;

  return (
    <section id="about" className="py-20 lg:py-28 relative font-mono">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="cat /proc/about_me.log"
          title="Full-Stack Developer Bio"
          subtitle="System diagnostics, academic background, and core technical capabilities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex"
          >
            <div className="terminal-window p-0 flex flex-col justify-between w-full overflow-hidden">
              
              <div className="terminal-header">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 font-mono text-xs text-slate-300">mayank_bio.java</span>
                </div>
                <span className="text-[10px] font-mono text-[#00ff66] bg-slate-900 px-2 py-0.5 rounded border border-[#00ff66]/30">
                  READONLY
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-6 flex-1 crt-scanlines">
                <div className="text-xs text-cyan-400">$ cat /etc/developer_profile.txt</div>
                
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed pl-3 border-l-2 border-[#00ff66]/40 font-mono">
                  {about.bio}
                </p>

                <div className="pt-4 border-t border-[#00ff66]/20">
                  <span className="text-xs text-[#00ff66] font-bold block mb-3">&gt; CORE_CAPABILITIES:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {about.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded bg-[#0f1f18] border border-[#00ff66]/20 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#00ff66] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="terminal-window p-2">
                <AboutVisual3D />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="terminal-window p-0 overflow-hidden">
                <div className="terminal-header">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-slate-300">sys_credentials.conf</span>
                  </div>
                  <span className="text-[10px] text-[#00ff66] bg-emerald-950 px-2 py-0.5 rounded border border-[#00ff66]/40">
                    STATUS: ACTIVE
                  </span>
                </div>

                <div className="p-6 space-y-4 crt-scanlines text-xs font-mono">
                  
                  <div className="p-3 rounded bg-[#0f1f18] border border-[#00ff66]/30 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-slate-900 text-[#00ff66] border border-[#00ff66]/30">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-white font-bold block">{education.degree}</span>
                        <span className="text-cyan-400 text-[11px]">{education.institution}</span>
                      </div>
                    </div>
                    <span className="text-[10px] text-amber-300 px-2 py-0.5 rounded bg-amber-950 border border-amber-500/40">
                      {education.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded bg-[#0f1f18] border border-[#00ff66]/20">
                      <span className="text-slate-400 text-[10px] block font-bold">&gt; BACKEND_ENGINE</span>
                      <span className="text-[#00ff66] font-bold text-xs">Java 21 / Spring Boot 3</span>
                    </div>

                    <div className="p-3 rounded bg-[#0f1f18] border border-cyan-500/20">
                      <span className="text-slate-400 text-[10px] block font-bold">&gt; FRONTEND_UI</span>
                      <span className="text-cyan-300 font-bold text-xs">React.js & JavaScript</span>
                    </div>

                    <div className="p-3 rounded bg-[#0f1f18] border border-amber-500/20">
                      <span className="text-slate-400 text-[10px] block font-bold">&gt; DATABASE</span>
                      <span className="text-amber-300 font-bold text-xs">MySQL Relational DB</span>
                    </div>

                    <div className="p-3 rounded bg-[#0f1f18] border border-purple-500/20">
                      <span className="text-slate-400 text-[10px] block font-bold">&gt; SECURITY</span>
                      <span className="text-purple-300 font-bold text-xs">JWT & Spring Security</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#00ff66]/20 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-[#00ff66]">
                      <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
                      <span>Ready for Full-Time Roles & Internships</span>
                    </span>
                    <span className="text-slate-500">2026</span>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
