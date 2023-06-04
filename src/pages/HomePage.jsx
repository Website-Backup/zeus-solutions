import React from 'react'
import NavBar from '../components/NavBar'
import Landing from '../components/HomePage/Landing'
import About from '../components/HomePage/About'
import Clients from '../components/HomePage/Clients'
import Project from '../components/HomePage/Project'
import Footer from '../components/Footer'
import History from '../components/HomePage/History'
import Brochure from '../components/Brochure'

const HomePage = () => {


document.title='Zeus Solutions | Industrial Automation and Test Equipments Solutions';


  return (
    <div>
        <Brochure></Brochure>
        <NavBar></NavBar>
        <Landing></Landing>
        <About></About>
        <History></History>
        <Clients></Clients>
        <Project></Project>
        <Footer></Footer>
    </div>
  )
}

export default HomePage