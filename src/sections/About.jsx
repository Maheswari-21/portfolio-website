import React from 'react';
import { Code2, Server, Database, Layout, Terminal, Cpu, GitBranch, Key } from 'lucide-react';

export default function About() {
  const skills = [
    { name: "React.js", icon: <Layout size={14} className="text-[#BC002D]" /> },
    { name: "Node.js", icon: <Cpu size={14} className="text-[#BC002D]" /> },
    { name: "Express.js", icon: <Terminal size={14} className="text-[#BC002D]" /> },
    { name: "MongoDB", icon: <Database size={14} className="text-[#BC002D]" /> },
    { name: "Tailwind CSS", icon: <Code2 size={14} className="text-[#BC002D]" /> },
    { name: "Git & GitHub", icon: <GitBranch size={14} className="text-[#BC002D]" /> },
    { name: "REST APIs", icon: <Server size={14} className="text-[#BC002D]" /> },
    { name: "Vector Embeddings", icon: <Key size={14} className="text-[#BC002D]" /> }
  ];

  return (
    <section id="about" className="min-h-screen bg-[#1A1A1A] pt-10 pb-16 scroll-mt-16 flex flex-col justify-start relative">
      <div className="max-w-5xl w-full mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white tracking-wide">About Me</h2>
          <div className="w-12 h-[3px] bg-[#BC002D] mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-sm sm:text-base">
              I am a passionate MERN Stack Developer dedicated to building robust, scalable, and user-centric web applications.
              My expertise lies in crafting seamless software pipelines and integrating intelligent AI solutions to solve real-world problems.
            </p>


            <div className="pt-4">
              <h3 className="text-[#BC002D] font-mono font-semibold mb-4 text-xs uppercase tracking-widest">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#121212] border border-gray-950 px-4 py-3 rounded-full 
               transition-all duration-300 group cursor-pointer
               hover:bg-[#BC002D] hover:border-[#BC002D]" >
                    <div className="p-1.5 bg-[#1A1A1A] rounded-lg transition duration-300">
                      <div className="text-[#BC002D] group-hover:text-white transition-colors duration-300">
                        {skill.icon}
                      </div>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#121212] rounded-2xl border border-gray-900 shadow-2xl font-mono text-xs sm:text-sm overflow-hidden sticky top-24">
            <div className="bg-[#1E1E1E] px-4 py-3 flex items-center gap-2 border-b border-gray-900">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              <span className="text-gray-500 ml-4 text-xs">developer.js</span>
            </div>
            <div className="p-6 space-y-2 text-gray-400">
              <p><span className="text-[#BC002D]">const</span> developer = &#123;</p>
              <p className="pl-4">name: <span className="text-emerald-400">'Maheswari'</span>,</p>
              <p className="pl-4">role: <span className="text-emerald-400">'MERN Stack Developer'</span>,</p>
              <p className="pl-4">passion: <span className="text-emerald-400">'Building High-Performance Software'</span>,</p>
              <p className="pl-4">focus: <span className="text-emerald-400">'MERN Stack & AI Optimization'</span></p>
              <p>&#125;;</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}