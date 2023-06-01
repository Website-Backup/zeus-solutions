import React from 'react'
import ClientsSlide from './ClientSlide'

const Clients = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center gap-8 py-8 '>
        <div>
            <h1 className='text-5xl font-bold uppercase'>Clients</h1>
        </div>
        <div className='w-full'>
          <ClientsSlide></ClientsSlide>
        </div>

    </div>
  )
}

export default Clients