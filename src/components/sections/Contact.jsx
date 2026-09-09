import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Linkedin, Github, Terminal, Sparkles } from 'lucide-react';

export function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="py-20 lg:py-28 relative font-mono">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="cat /etc/contact_info.conf"
          title="Let's Build Something Together"
          subtitle="I'm open to opportunities, collaborations and interesting projects. Feel free to reach out directly via Email, LinkedIn, or GitHub."
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
                  <span className="ml-2 font-mono text-xs text-slate-300">direct_contact.sh</span>
                </div>
                <span className="text-[10px] text-[#00ff66] bg-slate-900 px-2.5 py-0.5 rounded border border-[#00ff66]/30">
                  REACH_OUT
                </span>
              </div>

              <div className="p-6 sm:p-10 space-y-6 crt-scanlines">
                <div className="text-xs text-cyan-400">$ ./connect_channels.sh</div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <a
                    href={personalInfo.socialLinks.email}
                    className="group p-5 rounded-xl bg-[#0f1f18] border border-[#00ff66]/30 hover:border-[#00ff66] hover:bg-[#00ff66]/10 transition-all flex flex-col items-center justify-center text-center space-y-3"
                  >
                    <div className="p-3 rounded-lg bg-slate-900 text-[#00ff66] border border-[#00ff66]/40 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">&gt; EMAIL</span>
                      <span className="text-xs font-bold text-white group-hover:text-[#00ff66] transition-colors break-all">
                        {personalInfo.socialLinks.emailRaw}
                      </span>
                    </div>
                  </a>

                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-5 rounded-xl bg-[#0f1f18] border border-[#00ff66]/30 hover:border-[#00ff66] hover:bg-[#00ff66]/10 transition-all flex flex-col items-center justify-center text-center space-y-3"
                  >
                    <div className="p-3 rounded-lg bg-slate-900 text-[#00ff66] border border-[#00ff66]/40 group-hover:scale-110 transition-transform">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">&gt; LINKEDIN</span>
                      <span className="text-xs font-bold text-white group-hover:text-[#00ff66] transition-colors break-all">
                        mayank-kumar-b0715736a
                      </span>
                    </div>
                  </a>

                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-5 rounded-xl bg-[#0f1f18] border border-[#00ff66]/30 hover:border-[#00ff66] hover:bg-[#00ff66]/10 transition-all flex flex-col items-center justify-center text-center space-y-3"
                  >
                    <div className="p-3 rounded-lg bg-slate-900 text-[#00ff66] border border-[#00ff66]/40 group-hover:scale-110 transition-transform">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">&gt; GITHUB</span>
                      <span className="text-xs font-bold text-white group-hover:text-[#00ff66] transition-colors break-all">
                        mayank-k-mrj
                      </span>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-[#00ff66]/20 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-2 text-[#00ff66]">
                    <Sparkles className="w-4 h-4 text-[#00ff66]" />
                    <span>Open for Full-Time Full Stack Java Roles & Internships</span>
                  </span>
                  <span>2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
