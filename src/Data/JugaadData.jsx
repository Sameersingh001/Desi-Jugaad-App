import React, { useState, useEffect } from 'react';
import Home from '../Pages/Home';

const JugaadData = () => {
  const [jugaads, setJugaads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://indian-jugaad-api.onrender.com/jugaad/all")
      .then((res) => res.json())
      .then((data) => {
        setJugaads(data); // Use data.data to access the actual Jugaad array
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch Jugaads:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Home data={jugaads} loading={loading}  />
    </>
  );
};


export default JugaadData;

