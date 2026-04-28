import { getSinglePokemon } from "../utils/getSinglePokemon";
import { useState } from "react";
import "./Popup.css";

export function Popup(props) {
  const { index, setIndex, pokemonTeam, setPokemonTeam } = props;
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClick = () => {
    if (!error) setIndex(null);
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    try {
      e.preventDefault();
      const pokemon = await getSinglePokemon(search);
      const updatedTeam = Array.from(pokemonTeam);
      updatedTeam[index] = pokemon;
      setPokemonTeam(updatedTeam);
      setError(null);
      setIndex(null);
    } catch (err) {
      setError(err);
    }
  };

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
          {error && <p>This pokemon was not found!</p>}
          <button type="submit">I choose you!</button>
        </form>
      </div>
    </div>
  );
}
