import React, { useState } from "react";
import { useForm } from "react-hook-form";
import NavBarLogo from "../components/NavBarLogo";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

async function singIn(email, password) {
  try {
    const { user } = await Auth.signIn(email, password);
    return 1;
  } catch (error) {
    console.log("error", error);
    return 0;
  }
}

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [Error, setError] = useState("");

  const onSubmit = (data) => {
    var result = 0;
    singIn(data.email, data.password).then((res) => {
      console.log('res: ', res)
      result = res;
      console.log(result)
      if (result == 0) {
        setError("Contraseña o correo incorrectos");
        console.log("buenas");
        return;
      }
      navigate("/");
    });
    
  };

  return (
    <div className=" bg-black md:bg-[url('/img/ImgInicio.jpg')] bg-cover w-full h-full flex flex-col ">
      <div className="pt-3">
        <Link to="/">
          <NavBarLogo className="mx-[20px]" />
        </Link>
      </div>
      <main className="flex flex-col justify-center max-w-[640px] py-[50px]  md:bg-black/80 mx-auto mb-auto">
        <div className="px-0 mx-5 md:px-10">
          <div className="">
            <h1 className="text-white text-3xl font-bold">Inicia Sesión</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-gray-800"
              />
              <input
                type="password"
                placeholder="Contraseña"
                {...register("password", { required: true })}
                className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-gray-800"
              />
              <button
                type="submit"
                className="min-h-[48px] px-[1em] py-[0.25em] rounded-[2px] bg-red-600 mt-[0.5em] text-center flex flex-row items-center w-full text-white"
              >
                <span className="text-center">Iniciar sesión</span>
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-2 my-5">
            <button onClick={()=> Auth.federatedSignIn({provider: 'Google'})}
                    className="min-h-[48px] px-[1em] py-[0.25em] rounded-[2px] bg-white mt-[0.5em] text-center flex flex-row items-center text-black">
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
              <span className="text-[1rem]">Inicia sesión con google</span>
            </button>
            
            <button onClick={() => Auth.federatedSignIn({provider: 'Facebook'})} className="min-h-[48px] px-[1em] py-[0.25em] rounded-[2px] bg-blue-700 mt-[0.5em] text-center flex flex-row items-center text-white">
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
              <span className="text-[1rem]">Inicia sesión con facebook</span>
            </button>
          </div>
          <h3 className="text-gray-500 font-sm">
              <Link to="/">olvide mi contraseña</Link>
          </h3>
          <a className="text-gray-500 text-sm font-medium py-3">
            Necesitas ayuda?
          </a>

          <div className="">
            <h3 className="text-gray-500 font-medium text-base">
              Primera vez en netflix?
              <Link to="/">Suscribete ahora</Link>
            </h3>
            <h3 className="text-gray-500 text-sm">
              Esta página está protegida por Google reCAPTCHA para comprobar que
              no eres un robot. <a className="text-blue-700">Mas info.</a>
            </h3>
          </div>
        </div>
      </main>
      <Footer estilo="bg-black/80" estiloSm={"bg-black"} />
    </div>
  );
}
