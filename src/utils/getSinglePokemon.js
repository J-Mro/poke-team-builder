import axios from "axios";

export async function getSinglePokemon(name) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = response.data;
  return pokemon;
}
