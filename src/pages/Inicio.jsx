import React from "react";
import InicioNav from "../components/inicioNav";
import RegisterForm from "../components/registerForm";

export default function Inicio() {
  return (
    <div className="bg-[url('/img/ImgInicio.jpg')] bg-cover w-full h-full">
      <InicioNav />
      <main className="flex w-full h-full flex-row justify-center py-[50px] lg:items-center">
        <div className="max-w-[640px] text-white text-center py-[30px] px-[5%]">
          <h1 className="text-3xl">
            Películas y series ilimitadas y mucho más.
          </h1>
          <h2 className="text-lg my-4">
            Disfruta donde quieras. Cancela cuando quieras.
          </h2>
          <RegisterForm />
        </div>
      </main>
    </div>
  );
}