import React from 'react'
import { delivery } from '../Utils'

const ContactUs = () => {
  return (
    <div className='flex flex-row flex-grow flex-wrap items-center justify-center gap-4 my-6'>
        {delivery.map((dry,index)=>(
            <div key={index} className="bg-gray-200  shadow-gray-800 shadow-xl p-6">
                <div>
                <h1>{dry.label}</h1>
             <span className='flex flex-col items-center justify-center'>{dry.image}</span>
                </div>
            <p>{dry.name}</p>
            </div>
        ))}
        
     </div>
  )
}

export default ContactUs