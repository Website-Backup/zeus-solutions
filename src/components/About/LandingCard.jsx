import React from 'react'

const LandingCard = () => {
  return (
        <div className='flex md:grid md:grid-cols-3 flex-col gap-1'>

  
            <div className={` bg-textGrey text-white px-2 py-2 text-center font-semibold flex flex-col justify-start items-center min-h-[150px]`}>
                <h4 className='text-3xl'>VISION</h4>
                <p>To be the trailblazers in the Automation industry by being fast and adaptable to the changing needs</p>
            
            </div>
            <div className={` bg-white  text-black px-2 py-2 text-center font-semibold flex flex-col justify-start items-center min-h-[150px]`}>
                <h4 className='text-3xl'>CORE PURPOSE</h4>
                <p>Quick, Adaptable,
                Drama Free Service
                with zero change orders</p>
            
            </div>
            <div className={`  bg-textGrey  text-white px-2 py-2 text-center font-semibold flex flex-col justify-start items-center min-h-[150px]`}>
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