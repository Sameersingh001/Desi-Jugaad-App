import React from 'react'
import JugaadData from './Data/JugaadData'
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Landingpage from './Pages/LandingPage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Desi-Jugaad" element={<JugaadData />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;