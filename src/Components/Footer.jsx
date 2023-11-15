import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from "../Assets/logo/logo2.jpeg"

const Footer = () => {
  return (
    <div className='flex flex-col bg-black text-white pt-6 gap-6 w-full max-container'>
      <div className='flex flex-row  gap-3 pl-6 max-md:items-center'>
   <Link to="/"><img src={logo1} width={120} height={60} alt="logo" className='max-md:w-[100px] max-md:h-[40] rounded-[24px] border-2 border-teal-600'/></Link>
     <h1 className='text-4xl'>LUNA <span className='font-light text-teal-700 hover'>Shop</span></h1>
    </div>
      <div className='flex flex-row flex-grow flex-wrap  items-center justify-between px-6 border-b-2 border-b-white py-6'>
      <div className='flex flex-col justify-center items-center cursor-default'>
        <h1 className='text-2xl'>Shop Men</h1>
        <p className='text-2xl text-gray-600'>Formal</p>
        <p className='text-2xl text-gray-600'>Casual</p>
        <p className='text-2xl text-gray-600'>Sports</p>
        <p className='text-2xl text-gray-600'>Winter</p>
      </div>
      <div>
        <h1 className='text-2xl'>Shop Women</h1>
        <p className='text-2xl text-gray-600'>Formal</p>
        <p className='text-2xl text-gray-600'>Casual</p>
        <p className='text-2xl text-gray-600'>Sports</p>
        <p className='text-2xl text-gray-600'>Winter</p>
      </div>
      <div>
        <h1 className='text-2xl'>Shop Kids</h1>
        <p className='text-2xl text-gray-600'>Formal</p>
        <p className='text-2xl text-gray-600'>Casual</p>
        <p className='text-2xl text-gray-600'>Sports</p>
        <p className='text-2xl text-gray-600'>Winter</p>
      </div>
      </div>
     <div className='flex flex-col items-center justify-center'>
      <p className='text-gray'>CopyRight @2023 All Rights Preserved | This Website was made by <br/>
      <span className='text-2xl font-bold text-red-500'>Aleny WebDevelopers</span>
      </p>
     </div>
    </div>
  )
}

export default Footer