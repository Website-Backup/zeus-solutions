import React, { useEffect, useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai';
import Typed from 'react-typed';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {data} from './LandingData';


const Landing = () => {

  const [Frame,setFrame] = useState(0)

  useEffect(()=>{
    const timer=setTimeout(()=>{
      if (Frame===4){
        setFrame(0)
      }
      else{
        setFrame(Frame+1)
      }
      return ()=>clearTimeout(timer)
    },5000)
  })

  const myStyle={
    backgroundImage: `url(${data[Frame].img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out'
    
  };
 
 return(
  <div className="w-full">
    <div className='bg-fixed flex justify-center flex-col gap-8 items-center px-10 bg-slate-600 min-h-[100vh] md:min-h-[110vh]' style={myStyle}>
         <div>
           <h1 className='text-white font-bold md:font-semibold text-3xl md:text-5xl text-center'>Zeus Solutions a pioneer in 
           industrial automation and test equipments solutions since <Typed
          strings={['1995','1995']}
            typeSpeed={120}
            backSpeed={140}
            loop></Typed></h1>
        </div>
        <div className='flex gap-3'>
          {
            data.map((i,index)=>{
              return(
                <span className={`w-4 h-2 rounded-full transition-all duration-300 ${(Frame==index)?'bg-white scale-150':'bg-[#b3b2b0]'}`} key={index}></span>
              )
            })
          }
        </div>
        <div>
            <a href='/#aboutUs'><AiOutlineDown size={70} color='white'></AiOutlineDown></a>
        </div>
    </div>
  </div>
 )
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  // const images = ['1.JPG', '3.jpg','5.JPG' ]; // Replace with your own image URLs

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   className: 'w-full h-auto pt-24'
  //
  //   return (
    

//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={index} className="flex justify-center items-center">
//           <img src={require(`../../assets/Homepage/Landing/${image}`)} alt={`Slide ${index + 1}`} className="w-full h-auto" />
//         </div>
//       ))}
//   </Slider>

    // <div className="w-full">
    //   <div className='bg-fixed flex justify-center flex-col gap-8 items-center px-10 bg-slate-600 min-h-[100vh] md:min-h-[110vh] ' style={myStyle}>
    //     <div>
    //       <h1 className='text-white font-bold md:font-semibold text-3xl md:text-5xl text-center'>Zeus Solutions a pioneer in 
    //       industrial automation and test equipments solutions since <Typed
    //       strings={['1995','1995']}
    //         typeSpeed={120}
    //         backSpeed={140}
    //         loop ></Typed></h1>
    //     </div>
    //   <div>
    //       <a href='/#'><AiOutlineDown size={70} color='white'></AiOutlineDown></a></div>
    //   </div>
    // </div>
//   )
 }

export default Landing