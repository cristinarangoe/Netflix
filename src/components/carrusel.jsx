import React from "react";
import MediaItem from "./MediaItem";
import { Link } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import Modal from "../components/Modal";

// cotent es una lista de series o peliculas
export default function Carrusel({ content, genre, id }) {
  const slideLeft = () => {
    var slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + id);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // arreglo de modals
  return (
    <div className="mt-5 ml-3 md:ml-5">
      <h2 className="text-white font-bold text-xl ml-1">{genre}</h2>
      <div className="relative flex items-center group">
        <button
          className="transition-all h-10 w-10 hover:h-16 hover:w-16 left-0 rounded-full absolute cursor-pointer hidden group-hover:block z-10"
          onClick={slideLeft}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" "
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div
          className="overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
          id={"slider" + id}
        >
          {content.map((e, key) => {
            return <MediaItem key={key} name={e.name} image={e.image} />;
          })}
          {/* {content.map((e) => (
            <Dialog.Root >
                <Dialog.Trigger><MediaItem name={e.name} image={e.image} /></Dialog.Trigger>
                    <Modal/>
            </Dialog.Root>
          ))} */}
        </div>

        <button
          className="transition-all h-10 w-10 hover:h-16 hover:w-16 right-0 rounded-full absolute cursor-pointer hidden group-hover:block z-10"
          onClick={slideRight}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
