import React from 'react'
import NavBar from '../components/NavBar'
import Landing from '../components/About/Landing'
import Second from '../components/About/Second'
import ClientGrid from '../components/Projects/ClientGrid'
import Footer from '../components/Footer'
import TimelineV from '../components/About/TimelineV'
import Brochure from '../components/Brochure'



const About = () => {
  return (
    <div>
      <Brochure></Brochure>
      <NavBar></NavBar>
      <Landing></Landing>
      <Second></Second>
      <TimelineV></TimelineV>
      <ClientGrid></ClientGrid>
      <Footer></Footer>
    </div>
  )
}

export default About