import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function FormAddContentSerie() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => alert(JSON.stringify(data));

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
            Imagen
          </label>
          <input
            placeholder="Descripción"
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
            className="ml-0 h-[25px] my-[10px] bg-gray-300  border-gray-200 rounded-md"
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
            <option value="Drama">Drama</option>
            <option value="TvDrama">Tv Drama</option>
            <option value="RomanticTVDrama">Romantic TV Drama</option>
            <option value="Comedia">Comedia</option>
            <option value="Epics">Epics</option>
            <option value="MoviesBasedOnBooks">Movies Based On Books</option>
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
            <option value="Drama">Drama</option>
            <option value="TvDrama">Tv Drama</option>
            <option value="RomanticTVDrama">Romantic TV Drama</option>
            <option value="Comedia">Comedia</option>
            <option value="Epics">Epics</option>
            <option value="MoviesBasedOnBooks">Movies Based On Books</option>
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
      <div className=" border-t-2 mt-3 pt-2 ">
        <h3 className="text-red-500 text-xl pb-3 font-semibold">Información acerca del episodio 1:</h3>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-2">
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="nombreep1">
            Nombre
          </label>
          <input
            placeholder="Nombre"
            {...register("nombreep1", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="descripcionep1">
            Descripción
          </label>
          <input
            placeholder="Descripción"
            {...register("descripcionep1", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="imagenep1">
            Imagen
          </label>
          <input
            placeholder="Imágen"
            {...register("imagenep1", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="duracionep1">
            Duración
          </label>
          <input
            placeholder="Duracion"
            {...register("duracionep1", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        </div>
        
      </div>
      <div className=" border-t-2 mt-3 pt-2 ">
        <h3 className="text-red-500 text-xl pb-3 font-semibold">Información acerca del episodio 2:</h3>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-2">
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="nombreep2">
            Nombre
          </label>
          <input
            placeholder="Nombre"
            {...register("nombreep2", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="descripcionep2">
            Descripción
          </label>
          <input
            placeholder="Descripción"
            {...register("descripcionep2", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="imagenep2">
            Imagen
          </label>
          <input
            placeholder="Descripción"
            {...register("imagenep2", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="duracionep2">
            Duración
          </label>
          <input
            placeholder="Duracion"
            {...register("duracionep2", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        </div>
        
      </div>
      <div className=" border-t-2 mt-3 pt-2 ">
        <h3 className="text-red-500 text-xl pb-3 font-semibold">Información acerca del episodio 3:</h3>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-2">
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="nombreep3">
            Nombre
          </label>
          <input
            placeholder="Nombre"
            {...register("nombreep3", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="descripcionep3">
            Descripción
          </label>
          <input
            placeholder="Descripción"
            {...register("descripcionep3", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="imagenep3">
            Imagen
          </label>
          <input
            placeholder="Descripción"
            {...register("imagenep3", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        <div>
          <label className="text-white ml-0 text-lg" htmlFor="duracionep3">
            Duración
          </label>
          <input
            placeholder="Duracion"
            {...register("duracionep3", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
            type="text"
          />
        </div>
        </div>
        
      </div>
      <button className="min-h-[48px] px-[1em] py-[0.25em] mx-auto my-3 rounded-[2px] bg-red-600 mt-[0.5em] text-center flex flex-row items-center text-white">
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
    </form>
  );
}
