import React from "react";

export default function Footer() {
  return (
      <div className="bg-black/30">
          <h1>Preguntas? 01 800 917 1564</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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