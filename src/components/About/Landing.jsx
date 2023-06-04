import React from 'react'
import LandingCard from './LandingCard'
import background from '../../assets/About.jpg'

const myStyle={
    backgroundImage: `url(${background})` ,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}

const Landing = () => {
  return (
    <div className='pt-24'>
        <div className='bg-fixed flex items-end  px-5 md:px-10 bg-stone-600 min-h-[42.5vw]' style={myStyle} >
            <div className=' flex flex-col-reverse md:flex-row gap-10  mt-auto'>
                <LandingCard></LandingCard>
                <h1 className='text-6xl font-bold text-white text-center uppercase min-w-max'>about us</h1>
            </div>
        </div>
    </div>
  )
}

export default Landing