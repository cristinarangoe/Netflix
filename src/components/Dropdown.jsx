import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

export default function Dropdown() {

  const navigate = useNavigate();
  const logOut = () => {

    localStorage.removeItem("user");
    navigate("/")
  }
  return (
    <>
      <DropdownMenu.Root className="flex">
        <DropdownMenu.Trigger className="flex">
          <p className="cursor-default focus:outline-none text-gray-300 text-xl font-medium">
            Navega
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="mb-3 p-5 bg-black/90" align="start">
          <DropdownMenu.Item
            key="Home"
            className=" border-none cursor-default focus:outline-none pb-3"
          >
            <Link
              to="/home"
              className="text-gray-300 text-xl font-medium no-underline hover:text-gray-300"
            >
              Home
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            key="Peliculas"
            className=" border-none cursor-default focus:outline-none pb-3"
          >
            <Link
              to="/movies"
              className="text-gray-300 text-xl font-medium no-underline hover:text-gray-300"
            >
              Peliculas
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            key="Series"
            className=" border-none cursor-default focus:outline-none "
          >
            <Link
              to="/series"
              className="text-gray-300 text-xl font-medium no-underline hover:text-gray-300"
            >
              Series
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            key="perfil"
            className=" border-none cursor-default focus:outline-none my-3"
          >
            <Link
              to="/profile"
              className="text-gray-300 text-xl font-medium no-underline hover:text-gray-300 "
            >
              Perfil del usuario
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            key="logout"
            className=" border-none cursor-default focus:outline-none "
          >
            <a
              className="text-gray-300 text-xl font-medium no-underline hover:text-gray-300"
              onClick={logOut}
            >
              Cerrar Sesión
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </>
  );
}