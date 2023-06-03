import React from 'react'
import { projectCategory } from '../ProjectCategoryData';



const ProjectNavbar = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 justify-center items-center border-2 border-slate-950 p-2'>
            {projectCategory.map((i,index)=>{
                return(
                    <a href={i.url} key={index}>
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