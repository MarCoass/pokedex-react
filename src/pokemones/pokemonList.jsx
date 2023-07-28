import { useEffect, useState } from "react";
import Paginacion from "./paginacion";
import PokemonCard from "./pokemonCard";
import { fetchPokemones } from "../services/api";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsPorPagina, setPokemonsPorPagina] = useState(18);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(0);

  //Funcion asincrona que consume la API
  const pokemonsList = async () => {
    const respuesta = await fetchPokemones();//llamada a la funcion en api.js
    //const respuesta = await data.json();
    const pokemons = respuesta.results;
    /*console.log(pokemons)*/
    setPokemons(pokemons);
    setTotalPaginas(Math.ceil(pokemons.length / pokemonsPorPagina))
  };
  useEffect(() => {
    pokemonsList();
  }, []);


  // Lógica para paginación
  const handlePaginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual((prev) => prev + 1);
    }
  };

  const handlePaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual((prev) => prev - 1);
    }
  };

  const indexUltimoPokemon = paginaActual * pokemonsPorPagina;
  const indexPrimerPokemon = indexUltimoPokemon - pokemonsPorPagina;
  const pokemonsMostrados = pokemons.slice(indexPrimerPokemon, indexUltimoPokemon);


  return (
    <div className="flex flex-col justify-items-center items-center content-evenly gap-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {pokemonsMostrados.map((pokemon) => (
          <div className="" key={pokemon.name}>
                    <PokemonCard nombre={pokemon.name}/>
          </div>

        ))}
      </div>
      <Paginacion
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        handlePaginaSiguiente={handlePaginaSiguiente}
        handlePaginaAnterior={handlePaginaAnterior}
      />

    </div>
  );
}
