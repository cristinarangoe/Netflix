import React from "react";
import ImgInicio from "./ImgInicio";
import NavBarLogo from "./NavBarLogo";

export default function Inicio() {
  return (
    <div className="bg-[url('/img/ImgInicio.jpg')] bg-cover w-full h-full">
      <nav>
        <NavBarLogo />
        <div>
        
        </div>
      </nav>
    </div>
  );
}
