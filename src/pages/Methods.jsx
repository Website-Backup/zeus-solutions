import React from 'react'
import NavBar from '../components/NavBar'
import Working from '../components/Methods/Working'
import Footer from '../components/Footer'
import ClientGrid from '../components/Projects/ClientGrid'
import Brochure from '../components/Brochure'

const Methods = () => {

document.title='Methords';

  return (
    <div>
        <Brochure></Brochure>
        <NavBar></NavBar>
        <Working></Working>
        <ClientGrid></ClientGrid>
        <Footer></Footer>
    </div>
  )
}

export default Methods