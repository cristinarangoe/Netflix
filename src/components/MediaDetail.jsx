import React from "react";
import HomeNavBar from "./HomeNavBar";

export default function MediaDetail({ name, image }) {
  return (
    <div className="bg-black h-screen">
      <HomeNavBar />
      <div>
        <div>
          <img src={image} className="w-full h-auto block" alt={name} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="text-white">Aca va a ir la descripcion de todo</div>
          <div className="grid grid-rows-2 gap-2">
            <div>
              <h3 className="text-gray-400">
                Cast:{" "}
                <span className="text-white">Aca iria la lista de cast</span>
              </h3>
            </div>
            <div>
              <h3 className="text-gray-400">
                Géneros:{" "}
                <span className="text-white">Aca iria la lista de generos</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
