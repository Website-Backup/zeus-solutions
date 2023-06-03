import React from 'react'
import ProjectLanding from '../../assets/ourprojects.webp'
import { AiOutlineDown } from 'react-icons/ai';

const myStyle={
    backgroundImage: `url(${ProjectLanding})` ,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
    
  };


const Landing = () => {


  return (
    <div className='pt-24' >
      <div className='bg-fixed relative projectLanding min-h-[250px] md:min-h-[500px] lg:min-h-[700px] justify-center flex flex-col items-center'>
          <h1 className='relative text-7xl uppercase font-bold text-white font-anton'>projects</h1>
          <div className='relative md:py-8'>
            <a><AiOutlineDown size={70} color='white'></AiOutlineDown></a>
          </div>
      </div>
    </div>
  )
}

export default Landing