import React from 'react'
import Hero from "../Components/LandingComponets/Hero"
import Features from "../Components/LandingComponets/Features"
import JugaadGallery from "../Components/LandingComponets/JugaadGallery"
import CTA from "../Components/LandingComponets/CTA"
import Footer from "../Components/LandingComponets/Footer"


const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <JugaadGallery />
      <CTA />
      <Footer />
    </div>
  )
}

export default LandingPage