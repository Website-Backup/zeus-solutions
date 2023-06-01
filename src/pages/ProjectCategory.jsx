import React from 'react'
import NavBar from '../components/NavBar'
import Landing from '../components/ProjectCategory/Landing'
import ClientGrid from '../components/Projects/ClientGrid'
import Footer from '../components/Footer'
import Brochure from '../components/Brochure'

const ProjectCategory = ({data}) => {
  return (
    <div>
        <Brochure></Brochure>
        <NavBar></NavBar>
        <Landing data={data}></Landing>
        <ClientGrid></ClientGrid>
        <Footer></Footer>
    </div>
  )
}

export default ProjectCategory