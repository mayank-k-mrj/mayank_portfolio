import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export function ResumeSection() {
  const { personalInfo } = portfolioData;

  return (
    <section className="py-16 relative font-mono">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="terminal-window p-8 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="p-3 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/40 mb-4">
              <FileText className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono text-glow-green">
              Want to know more about my journey?
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-lg font-mono">
              Download my official resume to review my complete skill set, project details, academic credentials, and software engineering capabilities.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded text-xs font-bold bg-[#00ff66] text-slate-950 flex items-center gap-2 hover:shadow-[0_0_20px_#00ff66] transition-all"
              >
                <Download className="w-4 h-4" />
                <span>wget /resume/Mayank-Kumar-Resume.pdf</span>
              </a>
            </div>

            <span className="mt-4 text-[10px] text-slate-500 font-mono">
              Path: {personalInfo.resumePath}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
