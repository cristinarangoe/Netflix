import React from "react";

export default function Footer({estilo}) {
  return (
      <div className={`md:${estilo} absolute bottom-0 left-0 right-0 px-5 pb-3 md:px-32 md:pb-5 border-t border-gray-300`}>
          <h1 className="text-gray-500 font-medium text-base py-5">Preguntas? 01 800 917 1564</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 text-sm text-gray-500 ">
              <p>Preguntas frecuentes</p>
              <p>Preferencias de cookies</p>
               <p>Términos de uso</p>
              <p>Centro de ayuda</p>
                <p>Privacidad</p>
              <p>Información corporativa</p>
          </div>
        
      </div>
  );
}