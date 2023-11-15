import React, { useContext } from 'react'
import { LunaContext } from '../Context/Context'

const Cart = () => {
    const {cart, setCart,AddToCart, RemoveFromCart} = useContext(LunaContext)
  return (
    <div className='flex felx-col flex-wrap w-full max-container'>
        <div>

        </div>
        <div className='flex flex-row flex-wrap flex-grow gap-4 items-center justify-center my-6'>
  {cart.map((mw)=>(
            <div key={mw.id} className="flex flex-col flex-grow  items-center justify-center gap-4">
             <img src={mw.image} width={300} height={200} className="rounded-[8px]"/>
             <div className='flex flex-col items-center justify-center gap-4'>
             <h1 className='hover:text-2xl bold hover:text-pink-600'>{mw.label} + Bag</h1>
             <p>{mw.price}</p>
             <span className="text-red-600 line-through">$2000</span>
             <span>{mw.instock}</span>
             <span>InCart : {mw.qty? mw.qty : ''}</span>
             </div>
             <button className='btn' onClick={()=>AddToCart(mw)}>Add</button>
             <button className='btn' onClick={()=> RemoveFromCart(mw)}>Remove From Cart</button>

            </div>
        ))}
       </div>
    </div>
  )
}

export default Cart