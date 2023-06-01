import React from 'react'


const projectCategory = [
 
    {
        Category:'Assembly Machine',
        img:'1.AssemblyMachine.jpg',
        url:'../project/AssemblyMachine'
    },    
    {
        Category:'Conveyorize Oven',
        img:'2.ConveyorizeOvens.JPG',
        url:'../project/ConveyorizeOvens'
    },    
    {
        Category:'Testing Rig Equipment',
        img:'3.TestingRigEquipment.jpg',
        url:'../project/TestingRigEquipment'
    },    
    {
        Category:'Conveyor',
        img:'4.Conveyor.JPG',
        url:'../project/Conveyor'
    },    
    {
        Category:'Assembly Line',
        img:'5.AssemblyLine.jpg',
        url:'../project/AssemblyLine'
    },    
    {
        Category:'Magetizer',
        img:'6.Magetizer.jpg',
        url:'../project/Magetizer'
    },    
    {
        Category:'Balancing Correction Machine',
        img:'7.BalancingCorrectionMachine.jpg',
        url:'../project/BalancingCorrectionMachine'
    },    
    {
        Category:'Special Machine',
        img:'8.SpecialMachine.jpg',
        url:'../project/SpecialMachine'
    },    
    {
        Category:'Leak Testing',
        img:'9.LeakTesting.jpg',
        url:'../project/LeakTesting'
    },    
    {
        Category:'Noice Booth',
        img:'10.NoiceBooth.jpg',
        url:'../project/NoiceBooth'
    },    
    {
        Category:'EV Related Projects',
        img:'11.EVRelatedProjects.jpg',
        url:'../project/EVRelatedProjects'
    },    
    {
        Category:'PCB',
        img:'12.PCB.jpg',
        url:'../project/PCB'
    },    

];



const ProjectNavbar = () => {
  return (
    <div className='flex justify-center items-center pt-10'>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 justify-center items-center border-2 border-slate-950 p-2'>
            {projectCategory.map((i)=>{
                return(
                    <a href={i.url}>
                        <div className='w-[120px] h-[75px] flex justify-center items-center text-center hover:bg-slate-950 hover:text-white hover:shadow-xl rounded-md'>
                            <h1>{i.Category}</h1>
                        </div>
                    </a>
                );
            })
            }
        </div>
    </div>
  )
}

export default ProjectNavbar