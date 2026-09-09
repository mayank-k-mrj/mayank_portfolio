import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';
import { Project3DViewer } from '../3d/Project3DViewer';
import { ExternalLink, Github, HeartPulse, Activity, Flame, Terminal } from 'lucide-react';

const projectVisuals = {
  medsetu: { icon: HeartPulse },
  healthyyatra: { icon: Activity },
  'habit-streak-tracker': { icon: Flame }
};

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 lg:py-28 relative font-mono">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="ls -la /var/www/projects"
          title="Featured Java Full-Stack Projects"
          subtitle="Explore MedSetu, HealthyYatra, and Habit Streak Tracker. Drag to rotate the 3D model on each project card!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const visual = projectVisuals[project.id] || projectVisuals.medsetu;
            const VisualIcon = visual.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="terminal-window p-0 flex flex-col justify-between h-full overflow-hidden">
                  
                  <div className="terminal-header">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="ml-2 text-xs text-slate-300">{project.id}.app</span>
                    </div>
                    <VisualIcon className="w-4 h-4 text-[#00ff66]" />
                  </div>

                  <div className="h-60 relative bg-[#050b08] border-b border-[#00ff66]/20">
                    <Project3DViewer projectId={project.id} />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/90 text-[#00ff66] text-[10px] border border-[#00ff66]/30">
                      {project.subtitle}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between crt-scanlines">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 text-glow-green">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-mono">
                        "{project.description}"
                      </p>

                      <div className="mt-4 pt-3 border-t border-[#00ff66]/20">
                        <span className="text-[10px] text-slate-400 block mb-2 font-bold uppercase">&gt; TECH_STACK:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-[11px] bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#00ff66]/20 flex items-center gap-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 px-3 rounded text-xs font-bold bg-[#00ff66] text-slate-950 flex items-center justify-center gap-1.5 hover:shadow-[0_0_15px_#00ff66] transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>./demo</span>
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded text-xs font-bold bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/40 flex items-center justify-center gap-1.5 hover:bg-[#00ff66] hover:text-slate-950 transition-all text-center"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>./github</span>
                      </a>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
