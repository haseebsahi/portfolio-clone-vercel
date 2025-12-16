import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="flex items-center text-gray-300 dark:text-gray-400 transition-colors duration-300">
              Made with{' '}
              <Heart size={16} className="mx-2 text-red-500 fill-current" />
              by a Haseeb S.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 mt-1 transition-colors duration-300">
              © 2025 Personal Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="p-2 bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 rounded-full transition-colors duration-300"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;