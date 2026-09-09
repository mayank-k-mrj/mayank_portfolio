import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export function TerminalCLI() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Mayank Kumar Developer Shell v2.4' },
    { type: 'system', content: 'Type "help" or click quick command pills below to execute CLI commands.' }
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', content: `$ ${cmdStr}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: `Available Commands:
  about     - Display Mayank's profile bio & IT background
  skills    - List full-stack tech stack & frameworks
  projects  - Show MedSetu, HealthyYatra & Habit Tracker
  education - Display Buddha Institute of Technology details
  contact   - Display email & LinkedIn contact info
  resume    - Trigger resume download
  clear     - Clear terminal screen`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          content: portfolioData.about.bio
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          content: `JAVA | SPRING BOOT | REACT.JS | JAVASCRIPT | MYSQL | REST APIs | JWT | SPRING SECURITY | GIT | GITHUB`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          content: `1. MedSetu (Medicine Donation & Trading Platform for NGOs)
   GitHub: https://github.com/mayank-k-mrj/MedSetu_Project
2. HealthyYatra (Centralized Patient & Migrant Health Database)
   GitHub: https://github.com/mayank-k-mrj/HealthYatra
3. Habit Streak Tracker (Consistency Tracking Application)
   Live Demo: https://habitstreaktracker.onrender.com/
   GitHub: https://github.com/mayank-k-mrj/HabitStreakTracker`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          content: `Degree: B.Tech - Information Technology (4th Year)\nInstitute: Buddha Institute of Technology (2022 - 2026)`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: `Email: mayankcica@gmail.com\nLinkedIn: https://www.linkedin.com/in/mayank-kumar-b0715736a\nGitHub: https://github.com/mayank-k-mrj`
        });
        break;

      case 'resume':
        window.open(portfolioData.personalInfo.resumePath, '_blank');
        newHistory.push({
          type: 'output',
          content: `Opening Mayank-Kumar-Resume.pdf in new tab...`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo hire mayank':
        newHistory.push({
          type: 'output',
          content: `[ACCESS GRANTED] Mayank Kumar hired successfully! Initializing onboard pipeline... 🚀`
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          content: `Command not recognized: "${cmdStr}". Type "help" for valid commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <div className="terminal-window p-0 font-mono text-xs sm:text-sm text-[#00ff66] shadow-2xl overflow-hidden my-6">
      
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 font-mono text-xs text-slate-300 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-[#00ff66]" /> bash - mayank@bit-workstation:~
          </span>
        </div>

        <span className="text-[10px] text-cyan-400 bg-slate-900/90 px-2.5 py-0.5 rounded border border-cyan-500/30">
          CLI Interactive Mode
        </span>
      </div>

      <div className="p-4 sm:p-6 space-y-3 max-h-[260px] overflow-y-auto crt-scanlines">
        {history.map((item, idx) => (
          <div key={idx} className="leading-relaxed">
            {item.type === 'input' && (
              <span className="text-[#00ff66] font-bold">{item.content}</span>
            )}
            {item.type === 'system' && (
              <span className="text-cyan-400 font-mono">{item.content}</span>
            )}
            {item.type === 'output' && (
              <pre className="text-slate-200 font-mono whitespace-pre-wrap pl-4 border-l-2 border-[#00ff66]/40 my-1">
                {item.content}
              </pre>
            )}
            {item.type === 'error' && (
              <span className="text-red-400 font-mono pl-4">{item.content}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="px-4 py-2 bg-[#0a1410] border-t border-[#00ff66]/20 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-slate-400 text-[10px] uppercase font-mono">Quick Run:</span>
        {['about', 'skills', 'projects', 'education', 'contact', 'resume', 'clear'].map((btnCmd) => (
          <button
            key={btnCmd}
            onClick={() => executeCommand(btnCmd)}
            className="px-2.5 py-1 rounded bg-[#0f1f18] text-[#00ff66] border border-[#00ff66]/30 hover:bg-[#00ff66] hover:text-slate-950 transition-all text-xs font-mono font-bold"
          >
            ./{btnCmd}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-3 bg-[#050b08] border-t border-[#00ff66]/30 flex items-center gap-2">
        <span className="text-[#00ff66] font-bold select-none">mayank@dev:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help', 'about', 'skills'..."
          className="flex-1 bg-transparent border-none outline-none text-[#00ff66] placeholder-slate-600 font-mono text-xs sm:text-sm"
        />
        <button
          type="submit"
          className="p-1.5 rounded bg-[#00ff66] text-slate-950 font-bold hover:scale-105 transition-transform"
        >
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
}
