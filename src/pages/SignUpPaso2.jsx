import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import InicioNav from "../components/inicioNav";
import { useParams } from "react-router-dom";

export default function SignUpPaso2() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(data.email);
  const { email } = useParams();

  return (
    <div className="flex flex-col h-full">
      <div className="border-b-2 border-gray-200">
        <InicioNav />
      </div>
      <div className="flex flex-col justify-center max-w-[640px] py-3 mx-5 md:mx-auto my-3 mb-auto ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center"
        >
          <h3 className="text-2xl text-black font-bold text-center">
            Inicia sesión creando una cuenta con tu correo electrónico.
          </h3>
          <input
            value={email}
            placeholder="Correo electrónico"
            {...register("email", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] text-black border border-gray-200"
            type="email"
          />
          <input
            placeholder="Nombre"
            {...register("name", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] text-black border border-gray-200"
            type="name"
          />
          <input
            placeholder="Apellido"
            {...register("lastname", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] text-black border border-gray-200"
            type="lastname"
          />
          <input
            placeholder="Celular"
            {...register("celular", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] text-black border border-gray-200"
            type="number"
          />
          <input
            placeholder="Contraseña"
            {...register("password", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] text-black border border-gray-200"
            type="password"
          />
          <input
            placeholder="Vuelve a repetir la contraseña"
            {...register("password2", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] text-black border border-gray-200"
            type="password"
          />

          <button className="min-h-[48px] px-[1em] py-[0.25em] rounded-[2px] bg-red-600 mt-[0.5em] text-center flex flex-row items-center text-white">
            <span className="text-[1rem]">Registrar</span>
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
      </div>
      <Footer estilo={"bg-white"} />
    </div>
  );
}