import React from "react";
import { useForm } from "react-hook-form";
import NavBarLogo from "../components/NavBarLogo";
import Footer from "../components/Footer"

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(data);

  return (
    <div className=" bg-black md:bg-[url('/img/ImgInicio.jpg')] md:bg-cover md:w-full md:h-full">
      <NavBarLogo />
      <main className="w-full h-full justify-center py-[50px] lg:items-center md:bg-black/70 mx-10">
        <div className="">
          <h1 className="text-white text-3xl font-bold">Inicia Sesión</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center"
          >
            <input
              placeholder="Email o número de teléfono"
              {...register("email_numero", { required: true })}
              className="w-full p-[10px] h-[48px] my-[10px]"
            />
            <input
              placeholder="Contraseña"
              {...register("password", { required: true })}
              className="w-full p-[10px] h-[48px] my-[10px]"
            />
            <button className="min-h-[48px] px-[1em] py-[0.25em] rounded-[2px] bg-red-600 mt-[0.5em] text-center flex flex-row items-center">
              <span className="text-[1]">Iniciar sesión</span>
            </button>
            <a className="text-slate-600 text-sm font-medium">
              Necesitas ayuda?
            </a>
          </form>
        </div>
        <div>
          <h3 className="text-slate-600 font-medium text-base">
            Primera vez en netflix?
            <a className="text-white">Suscribete ahora</a>
          </h3>
          <h3 className="text-slate-600 text-sm">
            Esta página está protegida por Google reCAPTCHA para comprobar que
            no eres un robot. <a className="text-blue-700">Mas info.</a>
          </h3>
        </div>
      </main>
      <Footer/>
    </div>
  );
}