
"use client";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Sending...');

    const SERVICE_ID = 'service_j3vialm';
    const TEMPLATE_ID = 'template_8kle7ir';
    const PUBLIC_KEY = '8GG8j6USCFiGcTkBW';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setStatus('✅ Message sent successfully!');
        form.current.reset();
        setTimeout(() => setStatus(''), 4000);
      }, (error) => {
        setLoading(false);
        console.error(error);
        setStatus('❌ Failed to send message.');
      });
  };

  return (
    <section id="contact" className="min-h-screen bg-[#121212] pt-10 pb-50 scroll-mt-24 flex flex-col justify-center relative">
      <div className="max-w-5xl mx-auto px-6 text-center w-full">

        <h2 className="text-3xl font-bold mb-2 tracking-wide text-white">Get In Touch</h2>
        <div className="w-12 h-[3px] bg-[#BC002D] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-start">

          <div className="space-y-6 text-gray-400">
            <p className="text-base leading-relaxed">
              Let's collaborate! I am always open to discussing exciting projects and new opportunities.
            </p>

            <div className="space-y-4 font-mono text-sm">
              <a href="mailto:maheswaria098.com" className="flex items-center gap-3 text-gray-400 hover:text-[#BC002D] transition no-underline">
                <span className="text-[#BC002D] text-lg">✉</span> maheswaria098.com
              </a>

              <a href="https://github.com/Maheswari-21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-[#BC002D] transition no-underline">
                <span className="text-[#BC002D] text-base">📁</span> GitHub Profile
              </a>

              <a href="https://www.linkedin.com/in/maheswari97/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-[#BC002D] transition no-underline">
                <span className="text-[#BC002D] text-base">💼</span> LinkedIn Connect
              </a>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-[#121212] p-8 rounded-lg border border-gray-800/50 shadow-xl">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-[#1A1A1A] border border-gray-800 rounded px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#BC002D] text-sm"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-[#1A1A1A] border border-gray-800 rounded px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#BC002D] text-sm"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full bg-[#1A1A1A] border border-gray-800 rounded px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#BC002D] text-sm"></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-transparent border border-[#BC002D] hover:bg-[#BC002D] text-white py-2.5 rounded font-semibold text-sm tracking-wider transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? 'SENDING...' : 'SEND MESSAGE'}
            </button>

            {status && (
              <p className={`text-xs text-center mt-2 font-mono ${status.includes('✅') ? 'text-emerald-400' : 'text-red-400'}`}>
                {status}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}