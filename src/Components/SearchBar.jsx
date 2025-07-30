import React from 'react'
import { useState } from 'react';

const SearchBar = ({ data, searchResult }) => {


  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = () => {
    const id = parseInt(searchTerm.trim());
    const category = searchTerm.trim().toLowerCase() 
    const tag = searchTerm.trim().toLowerCase()
    const title = searchTerm.trim().toLowerCase()
    let match = null

if (id) {
  const idMatch = data.find((j) => j.id === Number(id));
  if (idMatch) {
    match = [idMatch]; // wrap in array for consistent display
  }
}
  // If not found by ID, try finding all items in that category
  if (!match && category) {
    const categoryMatches = data.filter(
      (j) => j.category.toLowerCase() === category
    );
    match = categoryMatches.length > 1 ? categoryMatches : null;
  }

    if (!match && tag) {
    const tagMatches = data.filter(
      (j) => j.tags.some((t) => t.toLowerCase() === tag)
    );
    match = tagMatches.length > 1 ? tagMatches : null;
  }

if (!match && title) {
  const exactTitleMatch = data.find(
    (j) => j.title.toLowerCase() === title.toLowerCase()
  );
  if (exactTitleMatch) {
    match = [exactTitleMatch];
  } else {
    const partialMatches = data.filter((j) =>
      j.title.toLowerCase().includes(title.toLowerCase())
    );
    match = partialMatches.length > 0 ? partialMatches : null;
  }
}
  // Send the match result (or null if nothing was found)
  searchResult(match);
};


  return (
    <>
      <div className="flex justify-center mt-5 ml-5 mr-5">
        <div className="flex w-full max-w-md shadow-md ">
          <input
            type="search"
            placeholder="Search Jugaad.... by ID, Title or Category"
            className="w-[400px] px-8 py-2 text-sm border border-gray-700  rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button onClick={handleSearch} className="px-5 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 transition duration-200">
            Search
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchBar