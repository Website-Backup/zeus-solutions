import React from 'react'
import { projectCategory } from '../ProjectCategoryData';

const Project = () => {
  return (
    <div className='flex flex-col justify-center items-center p-5'>
        <div>
            <h1 className='text-5xl uppercase font-bold'>Projects</h1>
        </div>
        <div className='py-10'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:grid-rows-2 mx-10 gap-5 gap-x-4 gap-y-4 items-stretch justify-items-stretch text-center'>
            {
                projectCategory.map((i,index)=>{
                    return(
                    <div className='relative' key={index}>
                        <a href={i.url}>
                            <img src={require(`../../assets/ProjectCategory/${i.img}`)} alt={i.img} className=' max-h-[200px] min-h-full hover:opacity-80 hover:scale-105 transition duration-500 cursor-pointer w-full' />
                            <h1 className='absolute bottom-0 left-0 md:w-full shadow shadow-white text-white text-[9px] md:text-[12px] lg:text-xl bg-gray-950 py-1 md:py-2 px-3 font-semibold'>{i.Category}</h1>
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