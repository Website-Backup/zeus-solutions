import React from 'react'

const projectCategory = [
 
    {
        Category:'Assembly Machine',
        img:'1.AssemblyMachine.jpg',
        url:'project/AssemblyMachine'
    },    
    {
        Category:'Conveyorize Oven',
        img:'2.ConveyorizeOvens.JPG',
        url:'project/ConveyorizeOvens'
    },    
    {
        Category:'Testing Rig Equipment',
        img:'3.TestingRigEquipment.jpg',
        url:'project/TestingRigEquipment'
    },    
    {
        Category:'Conveyor',
        img:'4.Conveyor.JPG',
        url:'project/Conveyor'
    },    
    {
        Category:'Assembly Line',
        img:'5.AssemblyLine.jpg',
        url:'project/AssemblyLine'
    },    
    {
        Category:'Magetizer',
        img:'6.Magetizer.jpg',
        url:'project/Magetizer'
    },    
    {
        Category:'Balancing Correction Machine',
        img:'7.BalancingCorrectionMachine.jpg',
        url:'project/BalancingCorrectionMachine'
    },    
    {
        Category:'Special Machine',
        img:'8.SpecialMachine.jpg',
        url:'project/SpecialMachine'
    },    
    {
        Category:'Leak Testing',
        img:'9.LeakTesting.jpg',
        url:'project/LeakTesting'
    },    
    {
        Category:'Noice Booth',
        img:'10.NoiceBooth.jpg',
        url:'project/NoiceBooth'
    },    
    {
        Category:'EV Related Projects',
        img:'11.EVRelatedProjects.jpg',
        url:'project/EVRelatedProjects'
    },    
    {
        Category:'PCB',
        img:'12.PCB.jpg',
        url:'project/PCB'
    },    

];

const Project = () => {
  return (
    <div className='flex flex-col justify-center items-center p-5'>
        <div>
            <h1 className='text-5xl uppercase font-bold'>Projects</h1>
        </div>
        <div className='py-10'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:grid-rows-2 mx-10 gap-5 gap-x-4 gap-y-4 items-stretch justify-items-stretch text-center'>
            {
                projectCategory.map((i)=>{
                    return(
                    <div className='relative'>
                        <a href={i.url}>
                            <img src={require(`../../assets/ProjectCategory/${i.img}`)} alt={i.img} className=' max-h-[200px] min-h-full hover:grayscale-0 hover:scale-105 transition duration-500 cursor-pointer w-full' />
                            <h1 className='centered child text-white md:text-lg bg-gray-950 p-1 font-semibold'>{i.Category}</h1>
                        </a>
                    </div>
                    
                    );
                })
                }
            </div>
        </div>
    </div>
  )
}

export default Project