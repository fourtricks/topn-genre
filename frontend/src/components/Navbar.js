import React, { useEffect, useState } from 'react';
import { Music, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full bg-gray-100 border-b dark:border-gray-800 dark:bg-gray-900 px-4 sm:px-6 md:px-12 lg:px-16 z-10 transition-shadow ${hasShadow ? 'shadow-md' : ''}`}>

      <div className="flex justify-between items-center h-20 md:h-24">
        {/* Left side: Logo and navigation links */}
        <div className="flex items-center space-x-6">
          <div className="flex-shrink-0 flex items-center">
            <Music className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500" />
            <span className={`ml-3 text-xl sm:text-2xl md:text-3xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>GenreAI</span>
          </div>

          <div className="ml-4 flex space-x-4 sm:space-x-6">
            <Link to="/" className="text-sm sm:text-lg font-medium text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-gray-100">
              Home
            </Link>
            <Link to="/about" className="text-sm sm:text-lg font-medium text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-gray-100">
              About
            </Link>
          </div>
        </div>

        {/* Right side: GitHub link and dark mode button */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Github className="h-6 w-6 sm:h-8 sm:w-8" />
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 sm:px-4 sm:py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-200 transition duration-150 transform active:scale-95 hover:opacity-90"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
