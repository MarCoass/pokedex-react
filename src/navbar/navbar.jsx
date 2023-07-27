import Opciones from "./opciones/opciones";
import { useState } from "react";

function NavBar() {
  
 // Estado para controlar la visibilidad del menú
 const [menuVisible, setMenuVisible] = useState(false);

 // Función para cambiar la visibilidad del menú al hacer clic en el botón
 const handleMenuClick = () => {
   setMenuVisible(!menuVisible);
 };
  
  return (
    <nav className="">
      <div className="max-w-6xl mx-auto border bg-slate-200 rounded">
        <div className="flex justify-between">
          
            {/*logo */}
            <div className="">
              <a href="/" className="flex items-center py-4 px-3 text-gray-700">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="" />
                <span className="font-bold">PokeAmeba</span>
              </a>
            </div>

            {/*nav primario */}
            <div className="hidden md:flex items-center space-x-1">
             
              <Opciones></Opciones>
            </div>
       

         
          {/* mobile button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={handleMenuClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/*menu mobile */}
      <div className={`md:hidden  ${menuVisible ? "" : "hidden"}`}>
        <Opciones></Opciones>
      </div>
      {/*  */}
    </nav>
  );
}

export default NavBar;
