import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import HomePage from './pages/HomePage';
import Methods from './pages/Methods';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import ProjectCategory from './pages/ProjectCategory';
import { ProjectData } from './ProjectData';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path='/about' element={<About></About>} />
      <Route path="/methods" element={<Methods></Methods>}/>
      <Route path="/project" element={<Project></Project>} />


      <Route path="/project/AssemblyMachine" element={<ProjectCategory data={ProjectData[0]}></ProjectCategory>} />
      <Route path="/project/TestingRigEquipment" element={<ProjectCategory data={ProjectData[1]}></ProjectCategory>} />
      <Route path="/project/ConveyorizeOvens" element={<ProjectCategory data={ProjectData[2]}></ProjectCategory>} />
      <Route path="/project/Conveyor" element={<ProjectCategory data={ProjectData[3]}></ProjectCategory>} />
      <Route path="/project/AssemblyLine" element={<ProjectCategory data={ProjectData[4]}></ProjectCategory>} />
      <Route path="/project/Magetizer" element={<ProjectCategory data={ProjectData[5]}></ProjectCategory>} />
      <Route path="/project/BalancingCorrectionMachine" element={<ProjectCategory data={ProjectData[6]}></ProjectCategory>} />
      <Route path="/project/SpecialMachine" element={<ProjectCategory data={ProjectData[7]}></ProjectCategory>} />
      <Route path="/project/LeakTesting" element={<ProjectCategory data={ProjectData[8]}></ProjectCategory>} />
      <Route path="/project/NoiceBooth" element={<ProjectCategory data={ProjectData[9]}></ProjectCategory>} />
      <Route path="/project/EVRelatedProjects" element={<ProjectCategory data={ProjectData[10]}></ProjectCategory>} />
      <Route path="/project/NewProjects" element={<ProjectCategory data={ProjectData[11]}></ProjectCategory>} />

      <Route path="/contact" element={<Contact></Contact>} />
    </Routes>
  );
}

export default App;
