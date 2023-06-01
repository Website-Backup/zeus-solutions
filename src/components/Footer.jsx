import React from 'react'
import ContactForm from './ContactForm'

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center'>
    <div className='py-10 flex flex-col md:w-[900px] justify-evenly items-start md:grid md:grid-cols-2 gap-5 md:gap-y-10 m-2 md:gap-x-32'>
        <div className='flex w-full justify-center items-center text-5xl font-bold uppercase col-start-1 col-end-3'>
            <h1>Contact</h1>
        </div>
        <div className='flex w-full justify-center items-center col-start-1 col-end-3'>
            <a href='https://www.google.com/maps/place/Zeus+Solutions/@13.0878212,80.0510715,12z/data=!4m10!1m2!2m1!1szeus+solutions!3m6!1s0x3a5263db15d29b19:0x9d3759afa4e29042!8m2!3d13.0878212!4d80.1573142!15sCg56ZXVzIHNvbHV0aW9uc5IBEGNvcnBvcmF0ZV9vZmZpY2XgAQA!16s%2Fg%2F11c5zxbbnw' target="_blank">
                <img src={require('../assets/Map.png')} 
                className='h-[200px] sm:h-[350px] shadow-lg shadow-slate-400 rounded-md'/>
            </a>
        </div>
        <div className='lg:w-[380px] text-lg flex flex-col gap-2'>
            <h1 className='text-3xl font-semibold'>Inquiries</h1>
            <p>For any inquiries, questions or commendations, please call: +91 044 26880963 / 65154149 or fill out the following form</p>
        </div>
        <div className='row-start-4 row-end-7'> 
            <h1 className='text-3xl font-semibold'>Contact Us</h1>
            <ContactForm></ContactForm>
        </div>
        <div className='lg:w-[380px] text-lg flex flex-col gap-2'>
            <h1 className='text-3xl font-semibold'>Head Office</h1>
            <p>224/2, Nageswara Rao Road,Vanagaram Road, Athipet Chennai-600058</p>
            <p>Phone : +91 044 26880963 / 65154149</p>
            <p>Email : zeussolutions@dataone.in</p>
        </div>
        <div>
            <img src={require('../assets/Make_In_India.png')}></img>
        </div>
        <div className='lg:w-[380px] text-lg flex flex-col gap-2'>
            <h1 className='text-3xl font-semibold'>Employment</h1>
            <p>To apply for a job with Zeus Solutions, please send a cover letter together with your C.V. to: info@mysite.com</p>
        </div>
    </div>
    </div>
  )
}

export default Footer