import React from "react";
import NavBarLogo from "./NavBarLogo";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function () {
  return (
    <div className="">
      <div className="flex flex-row items-center">
        <NavBarLogo />
        <div className="ml-5 hidden sm:hidden md:inline">
          <ul className="flex flex-row ">
            <li className="pr-5" key="home">
              <Link
                to="/"
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
        <div className="ml-5 inline sm:inline md:hidden">
          <Dropdown />
        </div>
      </div>
    </div>
  );
}
