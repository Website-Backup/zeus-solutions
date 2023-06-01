import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/Logo.png'

const NavBar = () => {

  const [nav, setNav] = useState(true)



  return (
    <div className="fixed w-full z-10">
        <div className="flex justify-between items-center h-24 px-8 bg-[#dcdcdc]">
            <a href="/">
              <div className='flex flex-col justify-center items-center'>
                <img src={Logo} className='h-12'></img>
                <h1 className='text-lg font-semibold'>Zeus Solutions</h1>
              </div>
              </a> 

            <ul className="md:flex font-montserrat md:gap-4 lg:gap-10 items-center hidden">
              <li className="text-xl p-2"><a href="/">Home</a></li>
              <li className="text-xl p-2"><a href="/about">About</a></li>
              <li className="text-xl p-2"><a href="/methods">Methods</a></li>
              <li className="text-xl p-2"><a href="/project">Projects</a></li>
              <li className="p-2 "><button className="text-lg text-white bg-[#121212] py-2 px-8 rounded-xl hover:shadow-xl hover:scale-110 transition-all duration-300"><a href="/contact">Contact</a></button></li>
            </ul>
            <div className='md:hidden'>
                {nav ? <button onClick={()=>{setNav(false)}}><AiOutlineMenu size={20}/></button> : <></>}
            </div>

            <div className={!nav ? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-[0.25] ease-in-out duration-100 md:hidden" : "fixed left-[-100%]"}>
                <div className="absolute top-2 right-2 p-2 bg-white rounded-sm">
                    {!nav ? <button onClick={()=>{setNav(true)}}><AiOutlineClose size={30} /></button> : <></>}
                </div>
                <ul className="bg-white w-[60%] h-full p-4 pt-24">
                  <li className="text-xl p-4 border-b border-gray-600"><a href="/">Home</a></li>
                  <li className="text-xl p-4 border-b border-gray-600"><a href="/about">About</a></li>
                  <li className="text-xl p-4 border-b border-gray-600"><a href="/methods">Methods</a></li>
                  <li className="text-xl p-4 border-b border-gray-600"><a href="/project">Projects</a></li>
                  <li className="text-xl p-4 "><a href="/contact">Contact</a></li>
                </ul>
            </div>



        </div>
    </div>
  )
}

export default NavBar