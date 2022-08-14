import React from 'react'
import Footer from '../components/Footer'
import InicioNav from '../components/inicioNav'
import { Link, useParams } from "react-router-dom";


export default function SignUpPaso1() {

    const { email } = useParams();

    return (
        <div className="flex flex-col h-screen">
            <div className="border-b-2 border-gray-200 pb-5">
                <InicioNav />
            </div>
            <main className='flex flex-col justify-center max-w-[640px] py-[50px] mx-5 md:mx-auto my-5 mb-auto'>
                <div className='text-center text-black text-2xl font-bold'>
                    <h3>Hola!</h3>
                    <h3>Suscribirse a Netflix es muy fácil.</h3>
                </div>
                <div className="grid grid-cols-2 gap-2 my-5">
                    <button className="min-h-[48px] px-[1em] py-[0.25em] border border-black rounded-[2px] bg-white mt-[0.5em] text-center flex flex-row items-center text-black">
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
                <div>
                    <h3 className='text-center text-black text-lg font-bold'>- o -</h3>
                    <Link to={`/signupemail/${email}`} className="min-h-[48px] px-[1em] py-[0.25em] rounded-[2px] bg-red-600 mt-[0.5em] text-center flex flex-row items-center text-white w-full hover:text-white">
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
                        <span className="text-[1rem]">Inicia sesión con tu correo electrónico</span>
                    </Link>
                </div>
            </main>
            <Footer estilo="bg-white" />
        </div>
    )
}
