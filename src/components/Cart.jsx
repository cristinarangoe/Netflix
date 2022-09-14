import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { useSelector, useDispatch } from "react-redux";
import orderService from "../services/orderService";
import { emptyItems } from "../storeData/buyItems";
import * as Toast from "@radix-ui/react-toast";

export default function Cart() {
  const buyItems = useSelector((state) => state.buyItems);
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleOrderService = async () => {
    if (buyItems.items.length) {
      const response = await orderService.saveOrder(
        buyItems.items,
        userData.data
      );
      if (response) {
        await delay(5000);
        // alert("Compra exitosa!");
        emptyCart();
        return;
      } else {
        alert("hubo un error en el sistema, intenta mas tarde");
      }
    }
  };

  const emptyCart = () => {
    dispatch(emptyItems());
  };

  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger className="p-0">
        <a className="text-white p-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </a>
      </Dialog.Trigger>

      <Dialog.Portal className="">
        <Dialog.Overlay className="bg-[hsla(0, 0%, 0%, 0.439)] bg-fixed inset-0" />
        <Dialog.Content className="overflow-y-auto overscroll-x-none absolute top-8 right-0 bg-black rounded-[6px] md:right-0 translate-x-[-0%] translate-y-[-0%] w-[90vw] sm:w-[50vw] max-w-[300px] lg:w-[200vw] lg:max-w-[500px] max-h-[85vh] p-[25px] mt-16">
          <div className="text-white w-full">
            <p className="text-2xl font-bold text-center">Carrito de compras</p>
            {buyItems.items.map((value, key) => (
              <div className="flex flex-row mt-3 border-t-2 border-white">
                <div key={key} className="flex justify-center my-3 w-[60%]">
                  <img
                    className="w-full h-auto"
                    src={value.image}
                    alt={value.name}
                  />
                </div>
                <div className="flex flex-col text-center ml-3 my-auto w-[40%]">
                  <p className="text-white text-xl">{value.name}</p>
                  <span className="text-white align font-bold">
                    Precio: {value.price}$
                  </span>
                </div>
              </div>
            ))}
            {buyItems.items.length === 0 ? (
              <span className="text-2xl font-bold text-red-600 my-3">
                Tu carrito está vacio, anímate a comprar!
              </span>
            ) : (
              <div className="flex flex-col mt-5 pt-3 border-t-2 border-white">
                <span className=" text-2xl font-bold text-red-600 my-3">
                  Total:{" "}
                  {buyItems.items.reduce((sum, media) => {
                    return sum + media.price;
                  }, 0)}
                  $
                </span>

                <div className="flex flex-row mx-auto">
                  <button
                    onClick={emptyCart}
                    className="border-2 border-red-600 bg-color-black text-xl ml-2 p-2 mr-4"
                  >
                    Vaciar orden
                  </button>

                  <Toast.Provider swipeDirection="right">
                    <button
                      onClick={() => {
                        setOpen(false);
                        handleOrderService();
                        setOpen(true);
                      }}
                      className="border-2 border-red-600 bg-color-black text-xl p-2"
                    >
                      Completar orden
                    </button>

                    <Toast.Root
                      open={open}
                      onOpenChange={setOpen}
                      className="bg-white text-red-500 px-3 pt-4 font-medium text-xl rounded-md border-2 border-red-500"
                    >
                      <Toast.Title className="flex flex-row">
                        <span>Compra realizada!</span>
                        <span> </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="3"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </Toast.Title>
                      <Toast.Description />
                      <Toast.Action />
                      <Toast.Close />
                    </Toast.Root>

                    <Toast.Viewport className="fixed top-3 right-3" />
                  </Toast.Provider>
                </div>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
