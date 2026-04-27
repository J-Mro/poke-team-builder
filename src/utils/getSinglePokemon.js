import axios from "axios";

export async function getSinglePokemon(name) {
  const pkmn = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return pkmn;
}
