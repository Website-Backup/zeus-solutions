import React from 'react'
import { Client } from '../Clients'

const ClientsSlide = () => {
  return (

        <div className=" flex items-center justify-center">
      {/* 1. */}
      <div className="w-[200%] h-36 border-t border-b border-gray-600 overflow-hidden relative">
        {/* 2. */}
        <div className="w-[200%] flex items-center h-36 justify-around absolute left-0 animate gap-20 md:animate">
            {
              Client.map((i)=>{
                return(
                
                  <img className='w-[130px]' src={require(`../../assets/ZeusData/CUSTOMERS_LOGO/${i.img}`)} alt={i.img} />
                
                );
              })
            }
            {
              Client.map((i)=>{
                return(
                
                  <img className='w-[130px]' src={require(`../../assets/ZeusData/CUSTOMERS_LOGO/${i.img}`)} alt={i.img} />
                
                );
              })
            }
            </div>
          </div>
        </div>

  )
}

export default ClientsSlide