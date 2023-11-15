import React, { useContext, useState } from 'react'
import logo1 from "../Assets/logo/logo1.jpeg"
import NavLinks from './NavLinks'
import {BsPersonCircle} from "react-icons/bs"
import {BsCart4} from "react-icons/bs"
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"
import { LunaContext } from '../Context/Context'

const NavBar = () => {
    const [isopen, setisopen] = useState(false)
    const {cart,getTotalItems} = useContext(LunaContext)
  return (
    <section className='w-full max-container flex flex-col flex-grow flex-wrap sticky top-0 bg-white text-black'>
     <div className='flex flex-row flex-grow  items-center justify-center gap-12 max-md:py-8 max-md:gap-4 max-md:px-6 gap pt-2 pb-1.5'>
     <div className='flex flex-row justify-center items-center gap-1'>
   <Link to="/"><img src={logo1} width={120} height={60} alt="logo" className='max-md:w-[100px] max-md:h-[40] rounded-[24px] border-2 border-teal-600'/></Link>
     <h1>LUNA <span className='font-light text-teal-700 hover'>Shop</span></h1>
    </div>
    <div className='hidden md:flex flex-row'>
        <NavLinks/>
    </div>
    <div className='flex-row items-center justify-center gap-6  md:flex-row md:flex '>
     <BsPersonCircle size="2rem"/>
     <Link to="cart" className='flex flex-row gap-1 items-center justify-center'><BsCart4 size="2rem"/><span className='text-pink-500'>{getTotalItems()}</span></Link>
    </div>
    <div className='flex flex-row md:hidden gap-1' onClick={()=>setisopen(!isopen)}>
     <h1>Menu</h1>
     <GiHamburgerMenu size="2rem"/>
    </div>
    </div>
    {isopen && (
   <div className='md:hidden'>
   <div className='bg-gray-500 flex flex-col items-center justify-center'>
       <NavLinks/>
   </div>
   </div>
    )
    }
   
    <div className='bg-black text-white items-center justify-center flex flex-row gap-12 py-6'>
        <h1>Sale up To 50%. Biggest Discount</h1>
        <h2 className='text-teal-500 border-b-4 border-b-pink-400 hover'>Shop Now</h2>
    </div>

    </section>
  )
}

export default NavBar