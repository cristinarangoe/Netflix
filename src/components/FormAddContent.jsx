import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function FormAddContent() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => navigate("/home");

  console.log("hola cris")
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col mx-8"
    >
      <label className="text-white ml-0 text-lg" htmlFor="nombre">Nombre</label>
      <input
        placeholder="Nombre"
        {...register("nombre", { required: true })}
        className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
        type="text"
      />
      <label className="text-white ml-0 text-lg" htmlFor="descripcion">Descripción</label>
            <input
        placeholder="Descripción"
        {...register("descripcion", { required: true })}
        className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
        type="text"
      />
      <label className="text-white ml-0 text-lg" htmlFor="descripcion">Imagen</label>
      <input
        placeholder="Descripción"
        {...register("imagen", { required: true })}
        className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
        type="text"
      />
      <label className="text-white ml-0 text-lg" htmlFor="adultos">Es contenido para adultos?</label>
      <input
        {...register("adultos", { required: false })}
        className="ml-0 h-[25px] my-[10px] bg-gray-300  border-gray-200 rounded-md"
        type="checkbox"
      />
      <label className="text-white ml-0 text-lg" htmlFor="adultos">Escoja el primer género</label>
      <select {...register("gender1")} className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md">
        <option value="Drama">Drama</option>
        <option value="TvDrama">Tv Drama</option>
        <option value="RomanticTVDrama">Romantic TV Drama</option>
        <option value="Comedia">Comedia</option>
        <option value="Epics">Epics</option>
        <option value="MoviesBasedOnBooks">Movies Based On Books</option>
      </select>
      <label className="text-white ml-0 text-lg" htmlFor="adultos">Primer género</label>
      <select {...register("gender2")} className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md">
        <option value="Drama">Drama</option>
        <option value="TvDrama">Tv Drama</option>
        <option value="RomanticTVDrama">Romantic TV Drama</option>
        <option value="Comedia">Comedia</option>
        <option value="Epics">Epics</option>
        <option value="MoviesBasedOnBooks">Movies Based On Books</option>
      </select>
      <label className="text-white ml-0 text-lg" htmlFor="actor1">Primer actor</label>
      <input
        placeholder="Primer actor"
        {...register("actor1", { required: true })}
        className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
        type="text"
      />
      <label className="text-white ml-0 text-lg" htmlFor="actor2">Segundo actor</label>
      <input
        placeholder="Segundo actor"
        {...register("actor2", { required: true })}
        className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
        type="text"
      />
    </form>
  );
}