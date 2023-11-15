import React, { useState } from 'react'

const Newslater = () => {
    const [name, setaname] = useState("")
  return (
    <div className='w-fullmax-container flex flex-col gap-3 leading-8 bg-pink-100 text-black py-8 px-4 flex-grow flex-wrap max-md:items-center border-b-2 border-b-white mt-8'>
        <h1 className='text-4xl'>Subscribe Newsletter</h1>
        <p>Subscribe newsletter to get 5% on all products.</p>
        <input type="text" value={name} placeholder="Enter your email" 
        onChange={(e)=>setaname(e.target.value)} className="bg-white text-black outline-none w-full h-[60px] pl-8 "/>
        <button className='flex flex-col items-center justify-center w-full h-[60px] bg-teal-600 text-white '>Subscribe</button>
    </div>
  )
}

export default Newslater