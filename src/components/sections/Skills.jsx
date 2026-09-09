import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';
import { Skill3DViewer } from '../3d/Skill3DViewer';
import { Terminal, Code2, Server, Database, Wrench, Cpu } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Server: Server,
  Database: Database,
  Wrench: Wrench
};

export function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 lg:py-28 relative font-mono">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="dpkg -l | grep dev-tools"
          title="Technical Skill Modules"
          subtitle="Interactive 3D model viewers for each programming category and technology stack."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const IconComponent = iconMap[category.icon] || Cpu;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <div className="terminal-window p-0 flex flex-col justify-between h-full overflow-hidden">
                  
                  <div className="terminal-header">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="ml-2 font-mono text-xs text-slate-300">
                        {category.title.toLowerCase().replace(/ /g, '_')}.pkg
                      </span>
                    </div>
                    <span className="text-[10px] text-[#00ff66]">v4.0</span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between crt-scanlines">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {category.title}
                        </h3>
                      </div>

                      <Skill3DViewer categoryIdx={catIdx} />

                      <div className="space-y-2 mt-4">
                        {category.skills.map((skill) => (
                          <div
                            key={skill.name}
                            className="p-2.5 rounded bg-[#0f1f18] border border-[#00ff66]/20 flex items-center justify-between text-xs"
                          >
                            <div>
                              <span className="text-white font-bold block">{skill.name}</span>
                              <span className="text-slate-400 text-[10px]">{skill.description}</span>
                            </div>
                            <span className="text-[10px] text-[#00ff66] bg-slate-900 px-2 py-0.5 rounded border border-[#00ff66]/30">
                              {skill.category}
                            </span>
                          </div>
                        ))}
                      </div>
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
