import React from 'react'

const Banner = () => {
  return (
    <div className='bg-image bg-cover bg-center h-[500px] flex flex-col pt-28 max-md:items-center md:pl-32 w-full max-container'>
        <div className='flex flex-col gap-4 leading-9 flex-grow px-3'>
            <h2 className='text-teal-500 text-2xl'>FASHIONABLE SHOES !!</h2>
            <h1 className='text-4xl hover:text-[2.75rem]'>Your Shoes Your Style </h1>
            <p className='text-[1.5rem]'>Get up to 50% of on any purchase above $20,000.<br/>
              Let us help you walk in our most comfortable shoes <br/>
              Come let us save you<br/>
            </p>
            <button className='btn bg-pink-600 text-black'>Shop Now</button>
        </div>
    </div>
  )
}

export default Banner