import React from "react";
import NavBarLogo from "./NavBarLogo";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
export default function HomeNavBar() {
  const { user, signOut } = useAuthenticator();
  const navigate = useNavigate();

  return (
    <div className="">
      <div className="flex flex-row items-center">
        <NavBarLogo />
        <div className="flex flex-row ml-5 hidden sm:hidden md:inline">
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
          </ul>
        </div>
        <div className="flex flex-row ml-5 hidden sm:hidden md:inline absolute right-0">
          <ul className="flex flex-row">
            <li className="m-0 pt-1" key="profile">
              <Link to="/profile" className="text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
            </li>
            <li className="px-5 mt-1" key="cart">
              <Cart />
            </li>
            <li className="" key="movies">
              <button
                onClick={signOut}
                className="text-gray-300 text-xl font-medium hover:text-white mr-3 p-0"
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-row ml-5 inline sm:inline md:hidden">
          <Dropdown />
          <Cart/>
        </div>
      </div>
    </div>
  );
}