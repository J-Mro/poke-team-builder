import { useState } from "react";
import { AddPokemonBtn } from "./AddPokemonBtn";
import "./PokemonList.css";
import { Popup } from "./Popup";
import "./Popup.css";

export function PokemonList() {
  const teamSlots = new Array(6).fill(null);
  const [pokemonTeam, setPokemonTeam] = useState(teamSlots);
  const [index, setIndex] = useState(null);

  const handleResetClick = () => {
    setPokemonTeam(new Array(6).fill(null));
  };

  return (
    <main>
      <h2>Pokemon A & Pokemon I team</h2>
      <section className="pokemon-list">
        {teamSlots.map((slot, i) => (
          <AddPokemonBtn
            key={`pokemonTeamSlot${i}`}
            index={i}
            setIndex={setIndex}
            pokemonTeam={pokemonTeam}
          >
            <img
              className="pokeball-btn-img"
              src="src/images/pokeball.png"
            ></img>
            <h3>Add Pokemon {i + 1}</h3>
          </AddPokemonBtn>
        ))}
      </section>
      {index !== null && (
        <Popup
          pokemonTeam={pokemonTeam}
          setPokemonTeam={setPokemonTeam}
          index={index}
          setIndex={setIndex}
        />
      )}
      <button onClick={handleResetClick}>Reset</button>
    </main>
  );
}
