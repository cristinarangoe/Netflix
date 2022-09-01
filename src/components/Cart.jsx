import React from 'react'
import * as Dialog from "@radix-ui/react-dialog";

import { useSelector } from "react-redux";
import orderService from '../services/orderService';


export default function Cart() {
  const buyItems = useSelector(state => state.buyItems)
  const userData = useSelector(state => state.userData)
  const handleOrderService = async () => {
    const response = await orderService.saveOrder(buyItems.items, userData.data)

  }

  return (

    <Dialog.Root >

      <Dialog.Trigger className='p-0'>
        <a className='text-white p-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </a>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-[hsla(0, 0%, 0%, 0.439)] bg-fixed inset-0" />
        <Dialog.Content className="overflow-visible md:overflow-y-scroll md:overscroll-x-none fixed bg-black rounded-[6px] top-1/2 md:right-0 translate-x-[-50%] translate-x-[-0%] translate-y-[-50%] w-[90vw] sm:w-[50vw] max-w-[300px] lg:w-[200vw] lg:max-w-[500px] h-[100%] p-[25px] mt-16 absolute right-0">

          <div className='text-white text-center'>
            <p className='text-2xl font-bold'>Carrito de compras</p>
            {buyItems.items.map((value, key) =>
              <div className='flex flex-row mt-3 border-t-2 border-white'>
                <div key={key} className='flex justify-center my-3 w-[60%]'>
                  <img className="w-full h-auto" src={value.image} alt={value.name} />
                </div>
                <div className='flex flex-col text-center ml-3 my-auto'>
                  <p className='text-white text-xl'>{value.name}</p>
                  <span className="text-white align font-bold">Precio: {value.price}$</span>
                </div>


              </div>
            )}
            <div className='flex flex-row justify-center grid grid-cols-2 mt-5 pt-3 border-t-2 border-white'>
              <span className="text-white text-2xl align-middle font-bold text-red-600 my-auto">Total {buyItems.items.reduce((sum, media) => { return sum + media.price }, 0)}$</span>
              <button onClick={handleOrderService} className="border-2 border-red-600 bg-color-black text-xl">Completar orden</button>
            </div>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
