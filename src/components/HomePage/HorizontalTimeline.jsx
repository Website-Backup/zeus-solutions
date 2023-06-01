import React, { useState } from 'react'
import TimelineImages from './TimelineImages';

const HorizontalTimeline = () => {

const TimelineElements=[
    {
        year:"1995",
        img:["","",""],
        content:"Zeus Solutions is started up in founders backyard in 1995, delivering innovative solutions. With precision engineering and a customer-centric approach, they cater to global industries, pushing boundaries in automation. Quality, expertise, and relentless commitment drive their success. From concept to execution, this is the start for Zeus Solutions shapes the future of machine automation.",
    },
    {
        year:"2005",
        img:["","",""],
        content:"",
    },
    {
        year:"2010",
        img:["","",""],
        content:"",
    },
    {
        year:"2023",
        img:["","",""],
        content:"",
    },
]

const[userClick,setClick]=useState(0);

  return (
    <div className="flex flex-wrap justify-center py-20  md:p-20">
        {console.log(userClick)}
        <div className='w-full p-5'>
        {/* <div className="flex justify-evenly items-center h-1 w-full bg-gray-300"> */}
            <h1 className="h-1 w-full bg-gray-300"></h1>
            <div className='flex justify-evenly items-center'>
            {
                TimelineElements.map((i,index)=>{
                    return(
                        <div className={`flex flex-col justify-center items-center relative mt-[-16px] cursor-pointer transition-all font-semibold duration-300 ${(index==userClick)?'scale-125 text-[#0077b6]':'hover:scale-110'}`} key={index} onClick={()=>{setClick(index)}}>
                            <div className={`border-[4px] rounded-full bg-white p-[4px] ${(index==userClick)?'border-[#0077b6]':'border-gray-400'}`}>
                                <div className={`h-4 w-4 rounded-full ${(index==userClick)?'bg-[#0077b6]':'bg-gray-400 '}`}></div>
                            </div>
                            <h1>{i.year}</h1>
                        </div>
                    )
                })
            }
        </div>
        </div>
        {/* </div> */}
        <div className='mt-5 w-[80%] md:w-[60%] md:grid md:grid-cols-2 justify-center items-start md:h-[300px] gap-3 rounded-3xl shadow shadow-slate-800 px-10 pb-5'>
            <div className='flex justify-center items-center col-start-1 col-end-3 text-3xl text-white'>
                <h1 className='bg-[#0077b6] font-semibold text-center w-24 py-1 px-2 rounded-b-md'>{TimelineElements[userClick].year}</h1>
            </div>
            <div><TimelineImages data={TimelineElements[userClick].img}></TimelineImages></div>
            <div className='text-justify'>{TimelineElements[userClick].content}</div>
        </div>
    </div>
  )
}

export default HorizontalTimeline