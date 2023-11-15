import React, { useContext, useEffect, useState } from 'react'
import {cartitems, Menswear } from '../Utils'
import axios from 'axios'
import { fetchData } from '../Utils/GetAPI'
import { LunaContext } from '../Context/Context'

const Trending = () => {
    const [trendingimg, settrendingimg] = useState("men.json")
   const {data,setdata,AddToCart} = useContext(LunaContext)

    useEffect(()=>{
      fetchData(`${trendingimg}`)
      .then((data)=>{
        console.log(data.data)
        setdata(data.data)
      })
    },[trendingimg])
   
      const onSubmit = (e) =>{
        e.preventDefault()
      }
 

  return (
    <section className='flex flex-col flex-grow flex-wrap w-full max-container'>
        <div  className="flex flex-row flex-grow flex-wrap max-md:gap-6 gap-24 px-8 my-6 max-md:items-center">
        <div>
        <h1 className='text-bold text-2xl'>Trending This Week</h1>
       </div>
       <div className='flex flex-row flex-grow flex-wrap gap max-md:gap-2'>
          <form onSubmit={onSubmit}>
            <select value={trendingimg} onChange={(e)=>settrendingimg(e.target.value)}>
              <option value="men.json">Mens Wear</option>  
              <option value="women.json">Women Wear</option>  
              <option value="kids.json">Kids Wear</option>  
            </select>
          </form>
       </div>
       </div>
       <div className='flex flex-row flex-wrap gap-4 items-center justify-center my-6'>
  {data.slice(6,10).map((mw)=>(
            <div key={mw.id} className="flex flex-col flex-grow  items-center justify-center gap-4">
             <img src={mw.image} width={300} height={200} className="rounded-[8px]"/>
             <div className='flex flex-col items-center justify-center gap-4'>
             <h1 className='hover:text-2xl bold hover:text-pink-600'>{mw.label} + Bag</h1>
             <p>{mw.price}</p>
             <span className="text-red-600 line-through">$2000</span>
             </div>
             <button className='btn' onClick={()=>AddToCart(mw)}>Add TO Car</button>
             {mw.cartitems >0 ? `(${mw.cartitems})` : ""}
            </div>
        ))}
       </div>
    </section>
  )
}

export default Trending