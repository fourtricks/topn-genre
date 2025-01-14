// ErrorMessage.js
import React from 'react';
import { AlertOctagon } from 'lucide-react'; // Exclamation icon from lucide-react

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-full max-w-[375px] sm:max-w-full mx-auto p-4">
      <div className="flex-shrink-0">
        <AlertOctagon className="w-12 h-12 sm:w-16 sm:h-16 animate-pulse text-red-500" /> {/* Responsive icon size */}
      </div>
      <div className="text-lg sm:text-2xl font-semibold text-red-500 text-center sm:text-left mt-4 sm:mt-0 sm:ml-4 break-words w-full">
        {message}
      </div>
    </div>
  );
};

export default ErrorMessage;
