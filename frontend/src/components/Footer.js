import React from 'react';
import { Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-400 border-t dark:border-gray-800 py-6 px-6 sm:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} - CS467 Capstone Project - Oregon State University
        </div>
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-black dark:hover:text-gray-300 transition-colors"
          >
            <Github className="h-5 w-5 mr-2" />
            GitHub
          </a>
          <a
            href="mailto:example@example.com"
            className="flex items-center hover:text-black dark:hover:text-gray-300 transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
