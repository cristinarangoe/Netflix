import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import InicioNav from "../components/inicioNav";
import { useParams } from "react-router-dom";
import {Auth} from "aws-amplify";
import {useNavigate} from "react-router-dom";
import PasswordChecklist from "react-password-checklist"



async function SingUp(email, data) {
  //console.log(data)
  const pass = data.password;
  try {
    await Auth.signUp({
      username: email, 
      password: pass,
      attributes: {
        given_name: data.name,
        family_name: data.lastname,
        phone_number: data.celular,
      },
    });
    //console.log(user);
    return await 1
  } catch (error) {
    console.log(error);
    return await 0
  }
}

export default function SignUpPaso2() {
  const { register, handleSubmit } = useForm();
  const { email } = useParams();
  const [password, setPassword] = useState("")
	const [passwordAgain, setPasswordAgain] = useState("")
  const [ValidPassword, setValidPassword] = useState(false)
  const navigate = useNavigate();
  const [Error,setError] = useState("");
  const onSubmit = (data) => {
    
    console.log(data);
    console.log(password,passwordAgain)
    if(!ValidPassword){
      setError("Las contraseñas no coinciden o no cumplen con los requisitos")
      console.log("invalidas")
      return
    }
    /*
    //revirsar que las constraseñas sean iguales
    if (data.password !== data.password2) {
      setError("Las contraseñas no coinciden!");
      console.log("Las contraseñas no coinciden!")
      return;
    }
    */
    var result = 0;
    SingUp(email, data).then(res => {
      result=res
      //console.log(result)
      if (result == 0) {
        setError("Error al registrar usuario");
        console.log("Error al registrar usuario");
        return;
      }
      navigate(`/confirmation/${email}`); 
    });
      
  };

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
            type="tel"
          />
          <input
            placeholder="Contraseña"
            {...register("password", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] text-black border border-gray-200"
            type="password"
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <input
            placeholder="Vuelve a repetir la contraseña"
            {...register("password2", { required: true })}
            className="w-full p-[10px] h-[48px] my-[10px] text-black border border-gray-200"
            type="password"
            onChange={(e) => {setPasswordAgain(e.target.value)}}
          />
         <PasswordChecklist
            rules={["minLength","specialChar","number","capital","match"]}
            minLength={8}
            value={password}
            valueAgain={passwordAgain}
            onChange={(isValid) => {setValidPassword(isValid)}}
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