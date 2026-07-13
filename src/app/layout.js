import React from 'react';
import '../app/globals.css';

export const metadata = {
  title: 'Maheswari | Portfolio',
  description: 'Minimalist Portfolio for Software Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/my-logo1.ico" />
        <style dangerouslySetInnerHTML={{
          __html: `
          nextjs-portal, 
          [data-nextjs-toast-wrapper], 
          #nextjs-__container_build_error__,
          div[style*="position: fixed"][style*="bottom: 0"] { 
            display: none !important; 
            visibility: hidden !important; 
            opacity: 0 !important;
            pointer-events: none !important;
          }
        `}} />
      </head>
      <body className="bg-[#121212] text-[#E2E8F0] antialiased selection:bg-[#BC002D] selection:text-white">
        {children}
      </body>
    </html>
  );
}