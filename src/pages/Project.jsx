import React from 'react'
import NavBar from '../components/NavBar'
import ClientGrid from '../components/Projects/ClientGrid'
import Landing from '../components/Projects/Landing'
import ProjectCategory from '../components/Projects/ProjectCategory'
import Footer from '../components/Footer'
import Brochure from '../components/Brochure'

const Project = () => {
  return (
    <div>
      <Brochure></Brochure>
      <NavBar></NavBar>
      <Landing></Landing>
      <ProjectCategory></ProjectCategory>
      <ClientGrid></ClientGrid>
      <Footer></Footer>
    </div>
  )
}

export default Project