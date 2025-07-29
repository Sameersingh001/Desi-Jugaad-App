import React, { useState } from 'react';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import { AiOutlineHome } from "react-icons/ai";

import { Lightbulb, Tag, Hash, Moon, Sun } from 'lucide-react';


const Home = ({ data, loading }) => {
  const [SearchResults, setSearchResults] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const refreshPage = () => {
    window.location.reload(); // Reload the page
  };

  if (loading) {
    return (
      <div className={`flex flex-col items-center justify-center h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-purple-50 to-white text-purple-700'} font-semibold space-y-4`}>
        <Lightbulb className="animate-bounce w-12 h-12 text-yellow-400" />
        <p className="text-xl font-bold animate-pulse tracking-wide">
          Loading Desi Jugaads...
        </p>
      </div>
    );
  }

  if (!Array.isArray(data)) {
    return (
      <div className={`flex items-center justify-center h-screen ${darkMode ? 'bg-gray-900 text-red-400' : 'bg-gray-100 text-red-600'} text-lg font-semibold`}>
        No data available or loading failed.
      </div>
    );
  }

  const handleSearchID = (result) => {
    if (Array.isArray(result)) {
      setSearchResults(result); // category results (multiple items)
    } else if (result) {
      setSearchResults([result]); // wrap single ID result in array for consistency
    } else {
      setSearchResults([]); // if nothing found
    }
  };

  const display = SearchResults || data;

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-white to-purple-50'} min-h-screen`}>
      <Header mode={darkMode} />
      <div className="flex justify-around  p-4">
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition duration-200"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
        <button
          onClick={refreshPage}
          className="px-4 py-2 text-2xl  bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
         <AiOutlineHome />

        </button>
      </div>
      <SearchBar data={data} searchResult={handleSearchID} />
      <div className="max-w-6xxl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {display.length === 0 ? (
            <div className="col-span-full text-center text-lg text-gray-500 font-medium mt-8">
              😔 No Jugaad found. Try another ID, Title, or Category.
            </div>
          ) : (
            display.map((jugaad, idx) => (
              <div
                key={idx}
                className={`${
                  darkMode
                    ? 'bg-gray-800 border-gray-700 text-white'
                    : 'bg-gradient-to-br from-purple-50 to-white border border-purple-300 text-gray-700'
                } rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] max-w-2xl w-full mx-auto`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="text-yellow-500" size={24} />
                  <h2 className="text-2xl md:text-3xl font-bold">{jugaad.title}</h2>
                </div>

                <p className="text-base md:text-lg leading-relaxed mb-4">
                  {jugaad.jugaad}
                </p>

                <div className="flex flex-wrap justify-between items-center text-sm md:text-base font-medium mt-4 border-t pt-3 border-dashed">
                  <p className="flex items-center gap-1">
                    <Tag className="w-4 h-4 text-purple-600" />
                    <span>Category: {jugaad.category}</span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Hash className="w-4 h-4 text-purple-500" />
                    <span>ID: {jugaad.id}</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>  
      </div>
    </div>
  );
};

export default Home;