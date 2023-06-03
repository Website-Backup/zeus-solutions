import React, { useState } from 'react'
import ProjectNavbar from './ProjectNavbar'
import ImageSlider from './ImageSlider'

const Landing = ({data}) => {

  
  return (
    <div className='pt-24'>
        <div>
            <div className='bg-fixed relative min-h-[250px] justify-center flex items-center'>
                <h1 className='relative text-5xl md:text-7xl uppercase font-bold text-[#121212] font-anton'>{data.title}</h1>
            </div>
        </div>
        <ProjectNavbar></ProjectNavbar>
        <div className=' md:mx-20 mx-10 gap-5 pt-5'>
            {data.details.map((i)=>{
                return(
            <div className='m-5 bg-slate-300 md:mx-5 flex flex-col md:grid md:grid-cols-3 md:items-end items-center justify-items-center  shadow shadow-slate-400 rounded-tl-3xl rounded-br-3xl '>
                <div className=' bg-white col-start-1 col-end-2 h-full w-full  flex flex-col justify-center items-center'>
                    <h1 className=' font-jost text-xl font-bold uppercase mb-4 pt-2'>{i.title}</h1>
                    <div className=' w-10 h-[3px] bg-yellow-400 mb-5'></div>
                    <ImageSlider images={i.img}></ImageSlider>
                </div>
                <div className=' flex flex-col md:text-right my-auto max-w-full box-border  col-start-2 col-end-4  text-center gap-4 w-max md:px-10 py-7 justify-start items-start rounded-lg'>
                    <div className='flex gap-2 justify-center items-end'><p className='font-semibold text-xl'>Name:</p> <p>{i.title}</p></div>
                    <div className='flex gap-2 justify-center items-end'><p className='font-semibold text-xl'>Client:</p> <p>{i.client}</p></div>
                </div>
            </div>
                )
            })}
        </div>
    </div>
  )
}

export default Landing