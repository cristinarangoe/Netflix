import React from 'react'
import * as Dialog from "@radix-ui/react-dialog";

import { useSelector } from "react-redux";
import orderService from '../services/orderService';


export default function Cart() {
  const buyItems = useSelector(state => state.buyItems)
  const userData = useSelector(state => state.userData)
  const handleOrderService = async ()=>{
    const response = await orderService.saveOrder(buyItems.items, userData.data)

  }
  return (

    <Dialog.Root >
    
      <Dialog.Trigger >
      <button className='text-white'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-7 h-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

                  </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-[hsla(0, 0%, 0%, 0.439)] bg-fixed inset-0" />
        <Dialog.Content className="overflow-y-scroll overscroll-x-none fixed bg-black rounded-[6px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[90vw] sm:w-[50vw] max-w-[300px] lg:w-[200vw] lg:max-w-[500px] h-[100%] p-[25px]">
            
            <div className='text-white text-center'>
            <text className='text-lg font-bold'>Shopping Cart</text>
             {buyItems.items.map((value, key)=>
             <div>
                  <text>{value.name}</text>
              <div key={key} className='flex justify-center'>
                <img  className="w-[70%] h-auto" src={value.image} alt={value.name}/>
                
    
              </div>
              <span className="text-white align font-bold">price {value.price}$</span>
              </div>
             )}
             <div className='flex justify-center grid grid-cols-2 mt-5'>
              <span className="text-white align-middle font-bold text-lime-600">Total {buyItems.items.reduce((sum, media) => { return sum + media.price}, 0)}$</span>
                <button onClick={handleOrderService}>Complete order</button>
            
            </div>
            </div>
          
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
