import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { AchievementTrophy3D } from '../3d/AchievementTrophy3D';
import { portfolioData } from '../../data/portfolioData';
import { Trophy, Star, Users } from 'lucide-react';

export function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 lg:py-28 relative font-mono">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="grep -i 'award' /var/log/achievements"
          title="Hackathon Recognition"
          subtitle="Top 20 Teams achievement in HackIndia Hackathon."
        />

        <div className="max-w-4xl mx-auto">
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="terminal-window p-0 overflow-hidden">
                <div className="terminal-header">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-2 text-xs text-slate-300">hackindia_top20.ach</span>
                  </div>
                  <Trophy className="w-4 h-4 text-amber-400" />
                </div>

                <div className="p-6 sm:p-8 crt-scanlines">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-5">
                      <AchievementTrophy3D />
                    </div>
                    <div className="lg:col-span-7 space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">
                        <Trophy className="w-3.5 h-3.5" />
                        {item.badge}
                      </div>
                      <h3 className="text-2xl font-bold text-white font-mono">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed pl-3 border-l-2 border-amber-500/40">
                        "{item.description}"
                      </p>
                      <p className="text-xs text-slate-400 font-mono">{item.highlight}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
