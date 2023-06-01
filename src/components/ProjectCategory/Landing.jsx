import React from 'react'
import ProjectNavbar from '../ProjectNavbar'

const Landing = ({data}) => {

    console.log(data)
  return (
    <div className='pt-24'>
        <div>
            <div className='bg-fixed relative projectLanding min-h-[250px] md:min-h-[500px] lg:min-h-[700px] justify-center flex items-center'>
                <h1 className='relative text-7xl uppercase font-bold text-white'>{data.title}</h1>
            </div>
        </div>
        <ProjectNavbar></ProjectNavbar>
        <div className=' md:mx-20 mx-10 gap-5 pt-5'>
            {data.details.map((i)=>{
                return(
            <div className='m-5 bg-slate-300 md:mx-5 flex flex-col md:grid md:grid-cols-3 md:items-end items-center justify-items-center  shadow shadow-slate-400 rounded-tl-3xl rounded-br-3xl '>
                <div className=' bg-white col-start-1 col-end-2 h-full w-full  flex flex-col justify-center items-center '>
                    <img src={require(`../../assets/ZeusData/${i.img}`)} className='h-[350px]'></img>
                </div>
                <div className=' flex flex-col md:text-right my-auto max-w-full box-border  col-start-2 col-end-4  text-center gap-4 w-max md:px-10 py-7 justify-center items-center rounded-lg'>
                    <h1 className='text-xl md:text-3xl font-semibold'>{i.title}</h1>
                </div>
            </div>
                )
            })}
        </div>
    </div>
  )
}

export default Landing