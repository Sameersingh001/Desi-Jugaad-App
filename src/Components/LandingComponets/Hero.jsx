import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-200 via-orange-100 to-pink-200 py-20 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-orange-800 drop-shadow">
        Desi Jugaad App
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-800 max-w-xl mx-auto">
        Har Indian problem ka creative solution – Desi Style! Explore 1000+ desi hacks and make life easy.
      </p>
      <button className="mt-6 bg-orange-600 hover:scale-105 transform transition px-6 py-3 text-white font-bold rounded-full shadow-lg">
        <Link to="/Desi-Jugaad">🔍 Explore Jugaads</Link>
      </button>
    </section>
  );
};

export default Hero;