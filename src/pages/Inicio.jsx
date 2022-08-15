import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InicioNav from "../components/inicioNav";
import RegisterForm from "../components/registerForm";

export default function SignInInicio() {
  let navigate = useNavigate();
  useEffect(()=>{
    const authenticateUser = () => {
      if (localStorage.getItem("user")){
        console.log(localStorage.getItem("user"))
        console.log("aca")
        navigate("/home")
      }
      let userToken = window.location.search.split("?code=")[1]
      console.log(userToken)
      if (userToken){
        console.log("not empty")
         localStorage.setItem("user", window.location.search.split("?code=")[1])
         navigate("/home")
       }
    }
    authenticateUser()


  },[])
  return (
    <div className="flex bg-[url('/img/ImgInicio.jpg')] bg-cover w-full h-full ">
      <div className="inline-block bg-[rgba(0,0,0,.4)] h-full w-full z-0 absolute"></div>
      <div className="z-10 w-full h-full">
        <InicioNav />
        <main className="flex w-full flex-row justify-center pt-[50px] lg:items-center ">
          <div className="max-w-[640px] text-white text-center pt-[30px] px-[5%]">
            <h1 className="text-2xl md:text-4xl font-bold">
              Películas y series ilimitadas y mucho más.
            </h1>
            <h2 className="text-lg md:text-2xl my-4">
              Disfruta donde quieras. Cancela cuando quieras.
            </h2>
            <RegisterForm />
          </div>
        </main>
      </div>
    </div>
  );
}
//////