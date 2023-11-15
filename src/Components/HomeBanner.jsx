import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import m4 from "../Assets/Men/p4.jpeg"
import { cartitems, homeBanner } from '../Utils'
import {BsArrowRightCircleFill} from "react-icons/bs"
import {AiOutlineArrowUp} from "react-icons/ai"


const HomeBanner = () => {
    const [image, setImage] = useState(m4)

    const changeImage = (img) =>{
        setImage(img)
    }
  return (
    <div className='flex flex-col w-full max-container flex-grow flex-wrap'>
        <section className='flex flex-row flex-grow flex-wrap items-center justify-center px-20 bg-slate-300 py-10 max-md:gap-6 gap-3 max-md:flex-col-reverse'>
       <div className='flex flex-col flex-grow flex-wrap max-md:gap-2'>
        {homeBanner.map((items,index)=>(
            <div key={index} className={`hidden md:flex flex-col items-center justify-center py-2 rounded-[32px] ${image === items.name ? "border-4 border-teal-700" : "border-transparent"}`}
             onClick={()=>changeImage(items.name)}>
          <img src={items.name} width={200} height={200} className="rounded-[40px]"/>
          <div className='flex flex-row gap-2 flex-grow pt-3'>
          <p>{items.label}</p>
          <span><BsArrowRightCircleFill size="2.5rem"/></span>
          </div>
            </div>
        ))}
           {homeBanner.map((items,index)=>(
            <div key={index} className={`flex md:hidden flex-col items-center justify-center py-2 rounded-[32px] ${image === items.name ? "border-4 border-teal-700" : "border-transparent"}`}
             onClick={()=>changeImage(items.name)}>
          <img src={items.name} width={200} height={200} className="rounded-[40px]"/>
          <div className='flex flex-row gap-2 flex-grow pt-3'>
          <p>{items.label}</p>
          <span><AiOutlineArrowUp size="2.5rem"/></span>
          </div>
            </div>
        ))}
       </div>
       <div className='flex flex-col flex-grow items-center gap-8'>
      <img src={image} width={600} height={400} className="rounded-full"/>
      <h1 className='text-2xl'>Prevew SOme Of Our Fav Sections</h1>
       </div>
        </section>
  </div>
  )
}

export default HomeBanner