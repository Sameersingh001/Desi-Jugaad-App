import React from 'react'
import JugaadData from './Data/JugaadData'
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Landingpage from './Pages/LandingPage'
import NotFound from './Components/LandingComponets/NotFound';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Desi-Jugaad" element={<JugaadData />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;