import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 pt-30 pb-16 px-6 max-w-6xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#BC002D]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">

        <div className="text-left space-y-5 flex flex-col items-start w-full">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <span className="text-[#BC002D]">M</span>aheswari
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#BC002D]">
            MERN Stack Developer
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
            I specialize in building robust, scalable, and user-friendly full-stack web applications using MongoDB, Express.js, React, and Node.js. Driven by clean code and efficient architecture, I love turning complex problems into elegant, modern web solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 justify-start">
            <a href="#contact" className="inline-flex items-center gap-2 bg-[#BC002D] hover:bg-[#9E0022] text-white px-6 py-3 rounded-full font-medium transition duration-300 shadow-lg shadow-[#BC002D]/20 no-underline text-sm">
              Hire Me <ArrowRight size={16} />
            </a>
            <a href="/Maheswari_CV.pdf" download="Maheswari_CV.pdf" className="inline-flex items-center gap-2 bg-transparent border rounded-full border-gray-700 hover:border-[#BC002D] text-gray-300 hover:text-white px-6 py-3 font-medium transition duration-300 no-underline text-sm">
              Download CV <Download size={16} />
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end items-center relative w-full p-4">
          <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] rounded-[150px_150px_100px_100px] shadow-[0_0_30px_rgba(188,0,45,0.6)] border-[3px] border-[#BC002D]"></div>
          <div className="absolute w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] rounded-[150px_150px_100px_100px] overflow-hidden bg-[#1E1E1E]">
            <img src="/my-profile1.png" alt="Maheswari" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}