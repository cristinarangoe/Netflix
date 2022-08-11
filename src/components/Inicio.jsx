import React from 'react'
import ImgInicio from './ImgInicio'
import NavBarLogo from './NavBarLogo'

export default function Inicio() {
  return (
    <div className="w-full h-full bg-[url('/img/ImgInicio.jpg')] bg-cover">
            <nav>
                    <NavBarLogo/>
                    <div>
                        <h1>hola</h1>
                        <h2>holka2</h2>
                    </div>
                </nav>
    
    </div>
  )
}
