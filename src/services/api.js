import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

// Función para obtener todos los pokemones
export const fetchPokemones = async () => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon?limit=100000&offset=0`);
    return response.data;
  } catch (error) {
    console.error('Error obteniendo datos:', error);
    throw error;
  }
};

// Función para obtener todos los pokemones
export const fetchPokemon = async (nombre) => {
  try {
    const response = await axios.get(`${BASE_URL}pokemon/${nombre}`);
    return response.data;
  } catch (error) {
    console.error('Error obteniendo datos:', error);
    throw error;
  }
};

