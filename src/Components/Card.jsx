import React from 'react'
import { Link } from 'react-router-dom'
import { cartitems } from '../Utils'

const Card = () => {
  return (
    <div className='flex flex-row flex-grow flex-wrap items-center justify-center gap-7 my-8'>
        {cartitems.map((item)=>(
                <div>
            <Link to={item.links}> <img src={item.name} width={400} className="rounded-[24px] h-[300px]"/></Link>
                <div className='flex flex-col items-center justify-center'>
                <Link to="men" className='text-2xl font-bold text-teal-900'>{item.label}</Link>
                </div>
                
                </div>
              
            ))
        }
    </div>
  )
}

export default Card