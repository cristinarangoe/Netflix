import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import UserPool from "../services/UserPool";
import { useNavigate } from "react-router-dom";

export default function ConfirmationSingup() {
    const { register, handleSubmit } = useForm();
    const {Error, setError} = useState("");
    const { email } = useParams();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        data.preventDefault();
        UserPool.ConfirmSingUp(email, data.code, (err, result) => {
            if (err) {
                console.log(err);
                setError(err.message);
                return;
            }
            navigate("/home");
        });
    };


    return (
        <div className="flex flex-col h-full">
        <div className="border-b-2 border-gray-200">
            <InicioNav />
        </div>
        <div className="flex flex-col justify-center max-w-[640px] py-3 mx-5 md:mx-auto my-3 mb-auto ">
            <div className="text-2xl text-black font-bold text-center">
                {Error}
            </div>
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center"
            >
            <h3 className="text-2xl text-black font-bold text-center">
                Te enviamos un correo electrónico para confirmar tu cuenta.
            </h3>
            <input
                value={code}
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
