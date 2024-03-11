import React from 'react'
import './Error404.css'
import Navbar from '../components/Navbar'

const Error404 = () => {
  return (
    <section>
      <Navbar />
      <p className='error-container'>
        This page does not exist. Use the menu at the top to navigate through
        the site.
      </p>
    </section>
  )
}

export default Error404
