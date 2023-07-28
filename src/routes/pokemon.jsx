import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemon } from "../services/api";


export default function Pokemon() {
  let { nombre } = useParams();
  const [pokemon, setPokemon] = useState(null); // Cambiamos el estado inicial a null

  //Funcion asincrona que consume la API
  const buscarPokemon = async () => {
    const pokemon = await fetchPokemon(nombre);
    setPokemon(pokemon);
  };

  useEffect(() => {
    buscarPokemon();
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-2 bg-slate-200 rounded-md min-h-full">
      {pokemon ? (
        <div className="flex flex-col md:flex-row justify-center  md:justify-between">
          <div className="m-auto">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt=""
              className="h-96"
            />
          </div>

          <div className="md:w-2/3 text-white bg-red-600 rounded-t-3xl rounded-bl-none md:rounded-tr-none md:rounded-l-3xl p-3 grid justify-center">
            <p className="text-4xl  m-2"> {pokemon.name.toUpperCase()}</p>
            <div>
              <span>Tipo</span>
              <div className="flex">
                {pokemon.types.map((tipo) => (
                  <p
                    className="m-1 px-2 rounded-lg block w-fit text-sm border border-black"
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
            </div>
            <p>
              Habilidades:{" "}
              {pokemon.abilities.map((habilidad) => (
                <p key={habilidad.ability.name}>{habilidad.ability.name}</p>
              ))}
            </p>
          </div>
        </div>
      ) : (
        <p>cargando</p>
      )}
    </div>
  );
}
