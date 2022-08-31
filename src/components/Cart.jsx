import React, { useState } from 'react'
import * as Dialog from "@radix-ui/react-dialog";

import { useSelector, useDispatch } from "react-redux";
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
      <a><svg class="w-7 h-7 hover:w-8 hover:h-8" fill="none" stroke="currentColor" color="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></a>
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
                <img  className="w-[70%] h-auto" src={value.image}/>
                
    
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
