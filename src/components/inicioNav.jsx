import NavBarLogo from "./NavBarLogo";
import { Link } from "react-router-dom";

export default function InicioNav() {
  return (
    <nav className=" ">
      <div className="flex flex-row w-full justify-between items-center">
        <Link to="/"><NavBarLogo /></Link>
        <div className="">
        <Link to="/signin">
          <button className="text-white bg-red-600 py-[0.25rem] px-[0.5rem] text-[0.9rem] rounded-[3px] mr-5">
            Iniciar sesion
          </button>
        </Link>
        </div>
      </div>
    </nav>
  );
}