import React from "react";
import { useForm } from "react-hook-form";
import NavBarLogo from "../components/NavBarLogo";
import Footer from "../components/Footer"
import { Link, useNavigate } from "react-router-dom";
import  {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import UserPool from "../services/UserPool";


export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [Error, setError] = React.useState("");
  
  
  const navigate = useNavigate();


  const onSubmit = (data) => {
    data.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool
    })

    const authenticationData = new AuthenticationDetails({
      username: email,
      password: password
    })

    user.authenticateUser(authenticationData, {
      onSuccess: (result) => {
        console.log(result)
        navigate("/")
      },
      onFailure: (err) => {
        console.log(err)
        setError(err.message)
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        console.log(userAttributes, requiredAttributes)
        setError("Por favor cambia tu contraseña")
      }
    })
  }
      


  return (
    <div className=" bg-black md:bg-[url('/img/ImgInicio.jpg')] bg-cover w-full h-full flex flex-col ">
      <div className="pt-3">
      <Link to="/"><NavBarLogo className="mx-[20px]"/></Link>
      </div>
      <main className="flex flex-col justify-center max-w-[640px] py-[50px]  md:bg-black/80 mx-auto mb-auto">
        <div className="px-0 mx-5 md:px-10">
              <div className="">
                <h1 className="text-white text-3xl font-bold">Inicia Sesión</h1>
                <form
                  onSubmit={onSubmit}
                  className=""
                >
                  <input
                    type="email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email o número de teléfono"
                    {...register("email_numero", { required: true })}
                    className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-gray-800"
                  />
                  <input
                    type="password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    {...register("password", { required: true })}
                    className="w-full p-[10px] h-[48px] my-[10px] bg-gray-300 placeholder:text-gray-800"
                  />
                  <button type='submit' className="min-h-[48px] px-[1em] py-[0.25em] rounded-[2px] bg-red-600 mt-[0.5em] text-center flex flex-row items-center w-full text-white">
                    <span className="text-center">Iniciar sesión</span>
                  </button>
                </form>
                </div>
                <div className="grid grid-cols-2 gap-2 my-5">
                  <button className="min-h-[48px] px-[1em] py-[0.25em] rounded-[2px] bg-white mt-[0.5em] text-center flex flex-row items-center text-black">
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
                        <button className="min-h-[48px] px-[1em] py-[0.25em] rounded-[2px] bg-blue-700 mt-[0.5em] text-center flex flex-row items-center text-white">
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
                                  <a className="text-gray-500 text-sm font-medium py-3">
                    Necesitas ayuda?
                  </a>
                
                            <div className="">
              <h3 className="text-gray-500 font-medium text-base">
                Primera vez en netflix? 
                <Link to="/" >
                 Suscribete ahora
                </Link>
              </h3>
              <h3 className="text-gray-500 text-sm">
                Esta página está protegida por Google reCAPTCHA para comprobar que
                no eres un robot. <a className="text-blue-700">Mas info.</a>
              </h3>
            </div>
        </div>
      </main>
      <Footer estilo="bg-black/80" estiloSm={"bg-black"}/>
    </div>
  );
}