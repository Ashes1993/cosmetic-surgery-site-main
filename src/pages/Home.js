import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import AboutUs from '../components/AboutUs'
import Anatomy from '../components/Anatomy'
import AboutIran from '../components/AboutIran'
import ScrollToTopButton from '../components/ScrollToTopButton'
import LandingContacts from '../components/LandingContacts'
import Services from '../components/Services'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='landing-container'>
      <Navbar />
      <Slider />
      <AboutUs />
      <Anatomy />
      <AboutIran />
      <Services />
      <ScrollToTopButton />
      <LandingContacts />
      <Footer />
    </div>
  )
}

export default Home
