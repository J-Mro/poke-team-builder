import { useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { Popup } from "./Popup";

export function AddPokemonBtn(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemon, setPokemon] = useState({});
  if (Object.keys(pokemon).length === 0) {
    return (
      <div>
        <button
          onClick={() => {
            setIsOpen(true);
          }}
          className="add-pokemon-btn"
        >
          {props.children}
        </button>
        <Popup isOpen={isOpen} setIsOpen={setIsOpen} setPokemon={setPokemon} />
      </div>
    );
  } else {
    return <PokemonCard pokemon={pokemon} />;
  }
}
