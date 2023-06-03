import React, { useState,useEffect } from 'react'

const ImageSlider = ({images}) => {

    const [Frame,setFrame] = useState(0);

    useEffect(()=>{
      const timer=setTimeout(()=>{
        if (Frame===(images.length-1)){
          setFrame(0)
        }
        else{
          setFrame(Frame+1)
        }
        return ()=>clearTimeout(timer)
      },5000)
    })
    
    const myStyle={
        backgroundImage: `url(${require(`../../assets/ZeusData/${images[Frame]}`)})`,
        backgroundSize: 'auto 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out'
        
      };

  return (
    <div className='flex justify-center items-center h-[250px] pb-2'>
        <img src={`${require(`../../assets/ZeusData/${images[Frame]}`)}`} className='h-[100%]'></img>
    </div>
  )
}

export default ImageSlider