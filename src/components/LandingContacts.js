import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import './LandingContacts.css'

const LandingContacts = () => {
  return (
    <div className='landing-contacts'>
      <FaWhatsapp className='contact-icon' />
      <FaInstagram className='contact-icon' />
    </div>
  )
}

export default LandingContacts
