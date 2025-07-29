import React from 'react';
import { Lightbulb } from "lucide-react";

const Header = ({ mode }) => {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center px-4 py-10 sm:py-14 md:py-20 text-center ${
          mode
            ? 'bg-gray-800 text-white'
            : 'bg-gradient-to-br from-purple-100 via-white to-purple-300 text-violet-900'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb
            className={`w-10 h-10 animate-pulse drop-shadow ${
              mode ? 'text-yellow-300' : 'text-yellow-500'
            }`}
          />
          <h1
            className={`font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight drop-shadow-md ${
              mode ? 'text-white' : 'text-violet-900'
            }`}
          >
            DESI JUGAAD 
          </h1>
        </div>
            
        <h2
          className={`font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono mb-4 sm:mb-6 tracking-wide ${
            mode ? 'text-gray-300' : 'text-violet-700'
          }`}
        >
          DESI HACKS FOR DAILY LIFE 💡</h2>

        <div
          className={`h-1 w-1/2 rounded-full mb-2 ${
            mode
              ? 'bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600'
              : 'bg-gradient-to-r from-purple-500 via-violet-700 to-purple-500'
          }`}
        ></div>
      </div>
    </>
  );
};

export default Header;