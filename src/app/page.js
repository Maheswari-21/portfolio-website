import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Navbar />

      <div className="scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}