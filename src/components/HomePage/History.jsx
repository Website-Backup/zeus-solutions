import React from 'react'
import HorizontalTimeline from './HorizontalTimeline'

const History = () => {
  return (
    <div>
        <div className='flex justify-center items-center'>
            <h1 className='text-5xl uppercase  font-bold text-[#121212]'>History</h1>
        </div>
        <div>
            <HorizontalTimeline></HorizontalTimeline>
        </div>
    </div>
  )
}

export default History