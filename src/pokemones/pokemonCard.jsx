import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonCard(props) {
  const { urlPokemon } = props;
  const [pokemon, setPokemon] = useState(null); // Cambiamos el estado inicial a null

  //Funcion asincrona que consume la API
  const buscarPokemon = async () => {
    const data = await fetch(urlPokemon);
    const pokemon = await data.json();
    setPokemon(pokemon);
    //console.log(pokemon.sprites.other["official-artwork"].front_default)
  };

  useEffect(() => {
    buscarPokemon();
  }, []);

  // Verificación para mostrar el nombre del Pokémon solo si "pokemon" no es nulo
  return (
    <div className="bg-gradient-to-r from-red-400 from-10% to-red-600 to-90% m-2 p-2 hover:bg-gradient-to-l rounded-md shadow-lg shadow-red-500/50">
      {pokemon ? (
        <div className="flex flex-col items-center justify-center">
          <div className="rounded h-36 bg-gradient-to-r from-slate-200 from-10% to-slate-400 to-90% ">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          
          <div
            className="w-full mt-1 text-center"
            style={{ fontFamily: "Archivo", fontWeight: "600" }}
          >
            {pokemon.name.toUpperCase()}
          </div>
          <div className="flex">
            {pokemon.types.map((tipo) => (
              <p
                className="m-1 px-2 rounded-lg text-sm border border-black"
                key={tipo.type.name}
                style={{
                  backgroundColor: "var(--bg-" + tipo.type.name + ")",
                  fontFamily: "Inconsolata",
                  fontWeight: "600",
                }}
              >
                {tipo.type.name}
              </p>
            ))}

          </div>
          <Link to={'/pokemon/'+pokemon.name}>Ver</Link>
        </div>
      ) : (
        <div className="rounded-full h-36 w-36"></div>
      )}
    </div>
  );
}
