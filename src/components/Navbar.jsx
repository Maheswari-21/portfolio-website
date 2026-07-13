"use client";
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 160;

      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-[#1A1A1A] z-50 px-4 py-4 font-bold border-b border-gray-800">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <a href="#" className="text-white font-bold text-lg hover:text-[#BC002D] transition-colors duration-300">
          <span className="text-[#BC002D]">M</span>AHESWARI
        </a>
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`${isOpen ? 'flex flex-col absolute font-bold top-16 left-0 w-full bg-[#1A1A1A] p-6 text-center' : 'hidden'} md:flex md:flex-row md:static md:w-auto md:bg-transparent md:p-0 md:gap-8 z-50`}>

          {/* Home Link */}
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className={`transition-colors duration-300 ${activeSection === 'home' ? 'text-[#BC002D]' : 'text-white hover:text-[#BC002D]'}`}
          >
            Home
          </a>

          {/* About Link */}
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className={`transition-colors duration-300 ${activeSection === 'about' ? 'text-[#BC002D]' : 'text-white hover:text-[#BC002D]'}`}
          >
            About
          </a>

          {/* Projects Link */}
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className={`transition-colors duration-300 ${activeSection === 'projects' ? 'text-[#BC002D]' : 'text-white hover:text-[#BC002D]'}`}
          >
            Projects
          </a>

          {/* Contact Link */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`transition-colors duration-300 ${activeSection === 'contact' ? 'text-[#BC002D]' : 'text-white hover:text-[#BC002D]'}`}
          >
            Contact
          </a>

        </div>

        <div className="justify-self-end hidden md:flex items-center gap-4 text-white">
          <a href="https://www.linkedin.com/in/maheswari97/" target="_blank" rel="noopener noreferrer" className="hover:text-[#BC002D] transition"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
          <a href="https://github.com/Maheswari-21" target="_blank" rel="noopener noreferrer" className="hover:text-[#BC002D] transition"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.15-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" /></svg></a>
          <a href="mailto:maheswaria098@gmail.com" className="hover:text-[#BC002D] transition"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg></a>
        </div>
      </div>
    </nav>
  );
}