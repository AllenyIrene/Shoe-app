import React, { useContext, useEffect, useState } from 'react'
import { LunaContext } from '../Context/Context'
import { fetchData } from '../Utils/GetAPI'

const WomenBanner = () => {
  const {data,AddToCart,setdata} = useContext(LunaContext)

    useEffect(()=>{
      fetchData(`women.json`)
      .then((data)=>{
        setdata(data.data)
      })
    },[])
  return (
    <div>
     <div className='flex flex-row flex-wrap gap-4 items-center justify-center my-6'>
  {data.map((mw)=>(
            <div key={mw.id} className="flex flex-col flex-grow  items-center justify-center gap-4">
             <img src={mw.image} width={300} height={200} className="rounded-[8px]"/>
             <div className='flex flex-col items-center justify-center gap-4'>
             <h1 className='hover:text-2xl bold hover:text-pink-600'>{mw.label} + Bag</h1>
             <p>{mw.price}</p>
             <span className="text-red-600 line-through">$2000</span>
             </div>
             <button className='btn' onClick={()=>AddToCart(mw)}>Add TO Car</button>
            </div>
        ))}
       </div>
    </div>
  )
}

export default WomenBanner