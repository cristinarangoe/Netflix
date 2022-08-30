import React from "react";
import NavBarLogo from "./NavBarLogo";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function HomeNavBar() {
  const {user, signOut} = useAuthenticator();

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
            <li className="pr-5 absolute right-0" key="cerrarSesion">
              <button
                onClick={signOut}
                className="text-gray-300 text-xl font-medium hover:text-white mr-3"
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
        <div className="ml-5 inline sm:inline md:hidden">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}