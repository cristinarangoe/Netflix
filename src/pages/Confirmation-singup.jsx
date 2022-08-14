import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import InicioNav from "../components/inicioNav";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Auth} from 'aws-amplify'



async function Confirm(email, code) {
  
  try {
    await Auth.confirmSignUp(email, code);
    return 1;
  } catch (error) {
    console.log(error);
    return 0;
  }
}

export default function ConfirmationSingup() {
    const { register, handleSubmit } = useForm();
    const { email } = useParams();
    const [Error, setError] = useState("");
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(email)
        var result = 0; 
        Confirm(email, data.code).then(res => {
            result=res
            if (result) {
                setError("Error al confirmar usuario, el codigo es incorrecto");
                return;
            }
            navigate("/");
        });
        
    };


    return (
        <div className="flex flex-col h-full">
        <div className="border-b-2 border-gray-200">
            <InicioNav />
        </div>
        <div className="flex flex-col justify-center max-w-[640px] py-3 mx-5 md:mx-auto my-3 mb-auto ">
            <div className="text-2xl text-black font-bold text-center">
                
            </div>
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center"
            >
            <h3 className="text-2xl text-black font-bold text-center">
                Te enviamos un correo electrónico para confirmar tu cuenta.
            </h3>
            <input
                placeholder="Correo electrónico"
                {...register("code", { required: true })}
                className="w-full p-[10px] h-[48px] my-[10px] text-black border border-gray-200"
            />
            <button className="min-h-[48px] px-[1em] py-[0.25em] rounded-[2px] bg-red-600 mt-[0.5em] text-center flex flex-row items-center text-white">
                <span className="text-[1rem]">Confirmar Cuenta</span>
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
