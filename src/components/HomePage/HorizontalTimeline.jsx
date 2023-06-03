import React, { useState,useEffect } from 'react'
import TimelineImages from './TimelineImages';

const HorizontalTimeline = () => {

const TimelineElements=[
    {
        year:"1995",
        img:["1995/1.jpg","1995/2.png","1995/3.jpg"],
        content:"Zeus Solutions is started up in founders backyard in 1995, delivering innovative solutions. With precision engineering and a customer-centric approach, they cater to global industries, pushing boundaries in automation. Quality, expertise, and relentless commitment drive their success. From concept to execution, this is the start for Zeus Solutions shapes the future of machine automation.",
    },
    {
        year:"2005",
        img:["2005/3.jpg","2005/1.png","2005/2.jpg"],
        content:"In 2005, We Zeus Solutions excelled in diverse projects, including assembly lines, test equipment, conveyors, special machines, and more. We served industries like EV, automation, and manufacturing, completing over a decade of successful projects. Our team's expertise and tailored solutions drive client success in automation and testing equipment.",
    },
    {
        year:"2010", 
        img:["2010/1.jpg","2010/2.jpg","2010/3.jpg"],
        content:"We Zeus Solutions began our export operations from 2010, marking a significant milestone in our journey. We have been dedicated to delivering top-quality automation solutions to clients worldwide.",
    },
    {
        year:"2023",
        img:["2023/1.jpg","2023/2.JPG","2023/3.JPG"],
        content:"In Zeus Solutions we has successfully completed over 1000 projects, establishing a remarkable track record in delivering cutting-edge automation and test equipment solutions. With a strong focus on diverse industries, we continue to drive innovation and exceed client expectations. Our commitment to excellence sets us apart as a trusted partner in the realm of industrial automation.",
    },
]

const[userClick,setClick]=useState(0);
const [Frame,setFrame] = useState(0);

useEffect(()=>{
  const timer=setTimeout(()=>{
    if (Frame===(TimelineElements[userClick].img.length-1)){
      setFrame(0)
    }
    else{
      setFrame(Frame+1)
    }
    return ()=>clearTimeout(timer)
  },3000)
})


const myStyle={
    backgroundImage: `url(${require(`../../assets/Homepage/History/${TimelineElements[userClick].img[Frame]}`)})`,
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out'
    
  };

const handleOnclick = (index) =>{
    setClick(index);
    setFrame(0);
}

  return (
    <div className="flex flex-wrap justify-center py-20  md:p-20">
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
        <div className='flex flex-col mt-5 w-[80%] md:w-[60%] md:grid md:grid-cols-2 justify-center md:items-start gap-3 rounded-3xl shadow shadow-slate-800 px-10 pb-5'>
            <div className='flex justify-center items-center col-start-1 col-end-3 text-3xl text-white'>
                <h1 className='bg-[#0077b6] font-semibold text-center w-24 py-1 px-2 rounded-b-md'>{TimelineElements[userClick].year}</h1>
            </div>
            <div className='flex justify-center items-center h-56' style={myStyle}>
                {/* <img 
                src={require(`../../assets/Homepage/History/${TimelineElements[userClick].img[Frame]}`)} 
                alt={`../../assets/Homepage/History/${TimelineElements[userClick].img[0]}`} 
                className="h-52 transition-all duration-500 ease-in-out opacity-100 hover:opacity-80"></img> */}
            </div>
            <div className='text-justify'>{TimelineElements[userClick].content}</div>
        </div>
    </div>
  )
}

export default HorizontalTimeline