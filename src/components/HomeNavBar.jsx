import React from "react";
import NavBarLogo from "./NavBarLogo";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
export default function () {
  const {user, signOut} = useAuthenticator();
  const navigate = useNavigate()

  return (
    <div className="">
      <div className="flex flex-row items-center">
        <NavBarLogo />
        <div className="ml-5 hidden sm:hidden md:inline">
          <ul className="flex flex-row ">
            <li className="pr-5" key="home">
              <Link
                to="/home"
                className="text-gray-300 text-xl font-medium hover:text-white"
              >
                Home
              </Link>
            </li>
            <li className="pr-5" key="series">
              <Link
                to="/series"
                className="text-gray-300 text-xl font-medium hover:text-white"
              >
                Series
              </Link>
            </li>
            <li className="pr-5" key="movies">
              <Link
                to="/movies"
                className="text-gray-300 text-xl font-medium hover:text-white"
              >
                Peliculas
              </Link>
            </li>
            <div className="pr-5 absolute right-0 flex mr-3">
            <li className="mr-10 self-center" key="profile">
              
              <svg onClick={()=>navigate("/profile")} className="w-9 h-9 cursor-pointer" fill="none" color="white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          
            </li>
            <li className="mr-10 self-center" key="cart">
              <Cart/>
            </li>
            <li className="ml-10" key="movies">
            
              <a
                onClick={signOut}
                className="text-gray-300 text-xl font-medium hover:text-white mr-3"
              >
                Cerrar sesión
              </a>
            </li>
            </div>
          </ul>
        </div>
        <div className="ml-5 inline sm:inline md:hidden">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}