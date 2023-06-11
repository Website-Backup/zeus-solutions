import React from 'react'
import { projectCategory } from '../ProjectCategoryData';

const ProjectCategory = () => {
  return (
    <div className='py-10' id='projectCategory'>
        <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 mx-10 gap-5 gap-x-4 gap-y-4 items-stretch justify-items-stretch text-center'>
        {
              projectCategory.map((i)=>{
                return(
                <div className='relative'>
                    <a href={i.url}>
                        <img src={require(`../../assets/ProjectCategory/${i.img}`)} alt={i.img} className=' max-h-[400px] min-h-full hover:opacity-80 hover:scale-105 transition duration-500 cursor-pointer w-full' loading='lazy'/>
                        <h1 className='absolute bottom-0 left-0 md:w-full shadow shadow-white text-white text-xl bg-gray-950 py-2 px-3 font-semibold'>{i.Category}</h1>
                    </a>
                </div>
                
                );
              })
            }
        </div>
    </div>
  )
}

export default ProjectCategory