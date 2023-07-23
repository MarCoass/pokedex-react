import { useEffect, useState } from "react";

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
    <div className="bg-gray-100 m-2 rounded-md">
      {pokemon ? (
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full h-36">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="w-full mt-1 text-center">
            {pokemon.name.toUpperCase()}
          </div>
          <div className="flex">
            {pokemon.types.map((tipo) => (
              <p className="m-1 px-2 rounded-lg text-xs"
                key={tipo.type.name}
                style={{ backgroundColor: "var(--bg-" + tipo.type.name + ")" }}
              >
                {tipo.type.name}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-full h-36 w-36">
            
          </div>
      )}
    </div>
  );
}
