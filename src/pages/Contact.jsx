import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Brochure from '../components/Brochure'

const Contact = () => {
  return (
    <div>
      <Brochure></Brochure>
      <NavBar></NavBar>
      <div className='p-24'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Contact