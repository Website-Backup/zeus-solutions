import React from 'react'
import { Client } from '../Clients'

const ClientsCard = () => {
  return (
        <div className='overflow-hidden'>
          <div className='flex items-center justify-around absolute left-0 animate gap-20 animate'>
            <div className='flex justify-center items-center'>
            {
              Client.map((i,index)=>{
                return(
                <div key={index} className="flex justify-center items-center w-[4rem] mx-2 md:w-[10rem] md:mx-6">
                  <img src={require(`../../assets/ZeusData/CUSTOMERS_LOGO/${i.img}`)} alt={i.img} />
                </div>
                );
              })
            }
            {
              Client.map((i,index)=>{
                return(
                <div key={index} className="flex justify-center items-center w-[4rem] mx-2 md:w-[10rem] md:mx-6">
                  <img src={require(`../../assets/ZeusData/CUSTOMERS_LOGO/${i.img}`)} alt={i.img} />
                </div>
                );
              })
            }
            </div>
          </div>
        </div>
  )
}

export default ClientsCard