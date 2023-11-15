import React, { createContext, useState } from 'react'


export const LunaContext = createContext()
const Context = ({children}) => {
    const [cart,setCart] = useState([])
    const [data, setdata] = useState([])

       
    const AddToCart = (prd) =>{
        const newCart = [...cart]
        const ProductInCart = newCart.find((item)=>item.id === prd.id)

        if(ProductInCart)
       {
         const Item = newCart.map((product)=>product.id === prd.id ? 
         {...ProductInCart, qty:ProductInCart.qty+1} : product,
        )
        setCart(Item)
       }
        else
        {
          newCart.push({...prd, qty:1})
          setCart(newCart)
        }
        
      }

      const RemoveFromCart = (prdId) => {
         const newCart = [...cart]
         const updatedCart = newCart.find((item)=>item.id === prdId.id)

         if(updatedCart.qty === 1) {
            const newprd = newCart.filter((item)=> item.id !== prdId.id)
            setCart(newprd)
           
         }

         else
         {
            const Item = newCart.map((product)=>product.id === prdId.id ? 
            {...updatedCart, qty:updatedCart.qty - 1} : product,
           )
           setCart(Item)
          }
      }
     
    const getTotalItems = () =>{
        const TotalQTY = cart.reduce((total,item)=>{
            return total+item.qty
        },0)
        return TotalQTY
    }
    const clearCart = () =>{
        setCart([])
    }

    const providerValues = {cart,setCart,data, setdata,AddToCart,getTotalItems,clearCart, RemoveFromCart}
  return (
    <div>
        <LunaContext.Provider value = {providerValues}>
       {children}
        </LunaContext.Provider>
    </div>
  )
}

export default Context