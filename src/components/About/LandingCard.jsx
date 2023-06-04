import React from 'react'

const LandingCard = () => {
  return (
        <div className='flex md:grid md:grid-cols-3 flex-col gap-2'>

  
            <div className={` bg-[#121212] text-white px-2 py-2 text-center font-semibold flex flex-col justify-start items-center min-h-[150px]`}>
                <h4 className='text-3xl'>VISION</h4>
                <p>Our Vision is to become one stop solution for all motor manufacturing companies at low cost</p>
            
            </div>
            <div className={` bg-white  text-[#121212] px-2 py-2 text-center font-semibold flex flex-col justify-start items-center min-h-[150px]`}>
                <h4 className='text-3xl'>CORE PURPOSE</h4>
                <p>Our Mission is to provide complete motor manufacturing solutions by adapting contemporary technology into our solutions day by day.</p>
            
            </div>
            <div className={`  bg-[#121212]  text-white px-2 py-2 text-center font-semibold flex flex-col justify-start items-center min-h-[150px]`}>
                <h4 className='text-3xl'>OUR PROMISE</h4>
                <ul>
                    <li>90% first time approval</li>
                    <li>80% faster turnaround</li>
                    <li>Zero Change Order</li>
                </ul>
            </div>
 
 </div>
  )
}

export default LandingCard