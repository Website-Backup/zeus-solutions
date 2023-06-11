import React from 'react'
import AboutIMG from '../../assets/Homepage/About.JPG'

const About = () => {

  const Image = require('../../assets/About.webp')

  return (
    <div className='flex flex-col md:grid md:grid-cols-2 items-center justify-center gap-2 pt-12 pb-8 md:pt-28' id='aboutUs'>
      <div className='flex items-center justify-center'>
      <div className='flex flex-col gap-3 text-justify p-3 md:max-w-[600px]'>
        <h1 className='flex justify-center items-center text-5xl font-bold uppercase'>About Us</h1>
        <p>Zeus Solutions a pioneer in industrial automation and test equipments solutions since 1995. Zeus primararily serves to the enterprises involved in manufacturing of auto-electrical components that may include Starter motors, Alternators, Wiper Motors, Blower Motors, Power Window motors etc. Zeus also provide solutions to other field of AC motor manufacturers, Switch gear manufactures, Oil industries, Agro industries, two or four wheeler manufacturers.</p>
        <p>We at Zeus always seek continuous improvements. The unique value propositions are a) proven track record of long-term support b) delivery focus on an integrated functional environment for the customer " E3M (Engineering, Manufacturing, Methods, and Maintenance)". We are well equipped with manufacturing floor space of more than 10000 square feet supported by 50 highly qualified and skilled employees at a general production capacity of 15 units per month. Our long serving customers include, 25 Years - Lucas TVS Group and 20 Years - Varroc Engineering, Igarashi Motors India Limited, and 15 Years – Bajaj Auto Ltd, TVS Motor, Bosch India.</p>
      </div>
      </div>
      <div className='flex justify-center items-center w-full'>
        <img src={Image} alt="About Img" className='max-h-[600px]' loading='lazy'></img>
      </div>
    </div>
  )
}

export default About