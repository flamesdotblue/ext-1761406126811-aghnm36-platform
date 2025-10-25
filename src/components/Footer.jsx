import React from 'react';

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/70">
        <p>
          © {new Date().getFullYear()} Live Hackathons. Built with React, Tailwind, and Spline.
        </p>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
          <a className="hover:text-white" href="#" onClick={(e) => e.preventDefault()}>Terms</a>
          <a className="hover:text-white" href="#" onClick={(e) => e.preventDefault()}>Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
