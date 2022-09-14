import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createSerie } from "../utils/contentfulDataHelpers";
import * as Toast from "@radix-ui/react-toast";

export default function FormAddContentSerie({ genres }) {
  let [nFields, setNFields] = useState(1);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      episodes: [
        {
          nombre: "",
          descripcion: "",
          imagen: "",
          duracion: "",
        },
      ],
    },
  });
  const { fields, remove, append } = useFieldArray({
    control,
    name: "episodes",
  });

  const navigate = useNavigate();
  const onSubmit = (data) => {
    createSerie(data).then((e) => console.log(e));
  };

  const [open, setOpen] = useState(false);

  //   const episodesFields = { nombre, descripcion, imagen, duracion };

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
            s
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
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id} className="border-t-2 mt-3 pt-2 ">
              <div className="flex flex-row justify-between">
                <h3 className="text-red-500 text-xl pb-3 font-semibold">
                  Información acerca del episodio {index + 1}:
                </h3>
                {index != 0 ? (
                  <button type="button" onClick={() => remove(index)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-red-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                ) : null}
              </div>
              <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-2">
                <div>
                  <label className="text-white ml-0 text-lg">Nombre</label>
                  <input
                    placeholder="Nombre"
                    {...register(`episodes.${index}.nombre`, {
                      required: true,
                    })}
                    className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
                    type="text"
                  />
                </div>
                <div>
                  <label className="text-white ml-0 text-lg">Descripción</label>
                  <input
                    placeholder="Descripción"
                    {...register(`episodes.${index}.descripcion`, {
                      required: true,
                    })}
                    className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
                    type="text"
                  />
                </div>
                <div>
                  <label className="text-white ml-0 text-lg">Imagen</label>
                  <input
                    placeholder="Imágen"
                    {...register(`episodes.${index}.imagen`, {
                      required: true,
                    })}
                    className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
                    type="text"
                  />
                </div>
                <div>
                  <label className="text-white ml-0 text-lg p-3">
                    Duración
                  </label>
                  <input
                    placeholder="Duracion"
                    {...register(`episodes.${index}.duracion`, {
                      required: true,
                    })}
                    className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-black border border-gray-200 rounded-md"
                    type="text"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        className="bg-white p-3 text-black font-medium"
        type="button"
        onClick={() => {
          append({
            nombre: "",
            descripcion: "",
            imagen: "",
            duracion: "",
          });
        }}
      >
        Insertar Capitulo
      </button>
      {/* <div className=" border-t-2 mt-3 pt-2 ">
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
        
      </div> */}

      <Toast.Provider swipeDirection="right">
        <button
          onClick={() => {
            setOpen(false);
            setTimeout(5000);
            setOpen(true);
          }}
          className="min-h-[48px] px-[1em] py-[0.25em] mx-auto my-3 rounded-[2px] bg-red-600 mt-[0.5em] text-center flex flex-row items-center text-white"
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
            <span>Serie adicionada con éxito!</span>
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
