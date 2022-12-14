import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createMovie } from "../utils/contentfulDataHelpers";
import * as Toast from "@radix-ui/react-toast";

export default function FormAddContentMovie({ genres }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createMovie(data).then((e) => console.log(e));
  };
  
    const [open, setOpen] = useState(false);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" mx-8">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-2">
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="nombre">
            Nombre
          </label>
          <input
            placeholder="Nombre"
            {...register("nombre", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="descripcion">
            Descripción
          </label>
          <input
            placeholder="Descripción"
            {...register("descripcion", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="descripcion">
            URL Imagen
          </label>
          <input
            placeholder="URL Imagen"
            {...register("imagen", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white ml-0 text-lg" htmlFor="adultos">
            Es contenido para adultos?
          </label>
          <input
            {...register("adultos", { required: false })}
            className="ml-0 h-[25px] my-auto ml-0 bg-gray-300  border-gray-200 rounded-md right-0"
            type="checkbox"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="adultos">
            Escoja el primer género
          </label>
          <select
            {...register("gender1")}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
          >
            {genres.items.map((g, key) => (
              <option key={key} value={g.sys.id}>
                {g.fields.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="adultos">
            Escoja el segundo género
          </label>
          <select
            {...register("gender2")}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
          >
            {genres.items.map((g, key) => (
              <option key={key} value={g.sys.id}>
                {g.fields.name}
              </option>
            ))}
            {/* <option value="Drama">Drama</option>
            <option value="TvDrama">Tv Drama</option>
            <option value="RomanticTVDrama">Romantic TV Drama</option>
            <option value="Comedia">Comedia</option>
            <option value="Epics">Epics</option>
            <option value="MoviesBasedOnBooks">Movies Based On Books</option> */}
          </select>
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="actor1">
            Primer actor
          </label>
          <input
            placeholder="Primer actor"
            {...register("actor1", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="actor2">
            Segundo actor
          </label>
          <input
            placeholder="Segundo actor"
            {...register("actor2", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="duracion">
            Duración
          </label>
          <input
            placeholder="Duracion"
            {...register("duracion", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="Precio">
            Precio
          </label>
          <input
            placeholder="Precio"
            {...register("Precio", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="number"
          />
        </div>
      </div>

      <Toast.Provider swipeDirection="right">

        <button
          className="min-h-[48px] px-[1em] py-[0.25em] mx-auto my-3 rounded-[2px] bg-red-600 mt-[0.5em] text-center flex flex-row items-center text-white"
          onClick={() => {
            setOpen(false);
            setTimeout(5000);
            setOpen(true);
          }}
        >
          <span className="text-[1rem]">Adicionar</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </button>

        <Toast.Root
          open={open}
          onOpenChange={setOpen}
          className="bg-white text-red-500 px-3 pt-4 font-medium text-xl rounded-md border-2 border-red-500 z-10"
        >
          <Toast.Title className="flex flex-row">
            <span>Pelicula adicionada con éxito!</span>
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
    </form>
  );
}
