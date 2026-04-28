import { getSinglePokemon } from "../utils/getSinglePokemon";
import { useState } from "react";
import "./Popup.css";

export function Popup(props) {
  const { index, setIndex, pokemonTeam, setPokemonTeam } = props;
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = () => {
    setIndex(null);
  };
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const pokemon = await getSinglePokemon(search);
      const updatedTeam = Array.from(pokemonTeam);
      updatedTeam[index] = pokemon;
      setPokemonTeam(updatedTeam);
      setIndex(null);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="popup">
      <div className="popup-contents">
        <button className="close-btn" onClick={handleClick}>
          close
        </button>
        <h3>Choose your pokemon!</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Use the search bar below to search for a pokemon by name:
          </label>
          <input
            type="text"
            placeholder="e.g. Bulbasaur"
            onChange={handleChange}
          />
          <button type="submit">I choose you!</button>
        </form>
      </div>
    </div>
  );
}
