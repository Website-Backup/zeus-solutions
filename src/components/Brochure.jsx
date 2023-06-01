import React, { useState } from 'react'
import BrochureForm from './BrochureForm'
import { AiFillCloseCircle } from 'react-icons/ai'


const Brochure = () => {
 
  const [Set,onSet] = useState(false)  
 
    if (!Set){
        return (
            <div className='fixed top-[40%] right-0 hover:scale-110 transition-all duration-300' style={{zIndex:"2"}}>
                <div className='flex justify-center items-center'>
                    <button className='flex flex-col justify-center items-center bg-[#000073] font-semibold p-2 sm:p-3 text-white rounded-l-xl shadow shadow-black' onClick={()=>{onSet(true)}}>
                        <span>B</span>
                        <span>R</span>
                        <span>O</span>
                        <span>C</span>
                        <span>H</span>
                        <span>U</span>
                        <span>R</span>
                        <span>E</span>
                    </button>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className='fixed flex justify-center items-center bg-black bg-opacity-80 h-full w-full z-20'>
                <div className='p-2 bg-white md:w-[400px] min-h-[400px]'>
                    <button className='flex w-full justify-end' onClick={()=>{onSet(false)}}><AiFillCloseCircle size={30} color='#121212'></AiFillCloseCircle></button>
                    <h1 className='flex justify-center items-center pb-3 font-semibold'>Kindly Fill the form to download our Brochure</h1>
                    <div className='flex justify-center items-center p-2'>
                        <BrochureForm></BrochureForm>
                    </div>
                </div>
            </div>
        )
    }

}

export default Brochure