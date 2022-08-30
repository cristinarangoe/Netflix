import React from "react";
import FormAddContent from "../components/FormAddContent";
import HomeNavBar from "../components/HomeNavBar";

export default function AddMovie() {
  return (
    <div className="bg-[url('/public/img/ImgInicio.jpg')] bg-cover h-full w-full">
      <div className="relative z-10 bg-black/80">
        <HomeNavBar/>
      </div>
      <div className="flex flex-col justify-center max-w-[640px] py-3 mx-5 md:mx-auto my-8 mb-auto bg-black/80">
        <h2 className="text-white font-bold text-2xl text-center my-3">Que pelicula quisieras ver en nuestro portafolio?</h2>
        <FormAddContent/>
      </div>
    </div>
  );
}
