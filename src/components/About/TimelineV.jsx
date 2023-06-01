import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineElement } from './TimelineElement';

const TimelineV = () => {
  return (
    <div>
      <div className='text-center font-anton text-7xl font-bold py-5 text-[#121212]'>
        <h1>TIMELINE</h1>
      </div>
      <div className='bg-[#cccccc]'>
        <VerticalTimeline>

          <VerticalTimelineElement
          iconStyle={{ background: '#F5F5F5', color: '', display:'flex', justifyContent:"center", alignItems:"center", fontWeight:"bold", fontSize:"15px"}}
          icon="Started"
          ></VerticalTimelineElement>

          {
            TimelineElement.map((i)=>{
              return(
                <VerticalTimelineElement
                contentArrowStyle={{ borderRight: '7px solid rgb(18,18,18)' }}
                iconStyle={{ background: '#F5F5F5', color: '', display:'flex', justifyContent:"center", alignItems:"center", fontWeight:"bold", fontSize:"20px" }}
                icon={i.year}>
                  <div className='flex flex-col gap-3 text-center'>
                    <h1>{i.title}</h1>
                    <h1>{i.customer}</h1>
                  </div>
                </VerticalTimelineElement>
              )
            })
          }

          <VerticalTimelineElement
           iconStyle={{ background: '#F5F5F5', color: '', display:'flex', justifyContent:"center", alignItems:"center", fontWeight:"bold", fontSize:"15px"}}
           icon="Present"
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default TimelineV