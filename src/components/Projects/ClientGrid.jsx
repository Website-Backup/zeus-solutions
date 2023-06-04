import React from 'react'
import { Client } from '../Clients'

const ClientGrid = () => {
  return (
    <div>
         {/* <div className='absolute inset-0 h-[220vw] md:h-[100vh] lg:h-[150%]' style={{backgroundColor:'rgb(0,0,0,0.80)'}}>
          <div className='flex h-[100vh] justify-center items-center'>
            <h1 className='text-7xl text-white font-bold uppercase'>projects</h1>
          </div>
        </div>  */}
    <div className='flex justify-center items-center w-full'>
    <div className='grid grid-cols-5 md:grid-cols-9 justify-center items-center gap-5'>
        {Client.map((i,index)=>{
                return(
                
                  <img className='w-16 md:w-28 lg:w-32 ' src={require(`../../assets/ZeusData/CUSTOMERS_LOGO/${i.img}`)} alt={i.img} key={index} />
                
                );
              })}
    </div>
    </div>
    </div>
  )
}

export default ClientGrid