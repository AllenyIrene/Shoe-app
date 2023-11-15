import React from 'react'
import { Link } from 'react-router-dom'
import { navLinksA } from '../Utils'

function NavLinks() {
  return (
    <div className='flex flex-row items-center justify-center flex-grow gap-10 max-md:gap-2 cursor-pointer focus:text-pink-700'>
     {navLinksA.map((lnk)=>(
        <Link to={lnk.label}>{lnk.name}</Link>
     ))}
    </div>
  )
}

export default NavLinks