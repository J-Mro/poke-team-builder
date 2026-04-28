import { useState } from "react";
import "./PokemonCard.css";

export function PokemonCard(props) {
  const { pokemon, index } = props;
  const [isShiny, setIsShiny] = useState(false);
  return (
    <div>
      <img
        className="pokemon-sprite"
        src={
          !isShiny ? pokemon.sprites.front_default : pokemon.sprites.front_shiny
        }
        alt={`${pokemon.name} sprite`}
      />
      <p>
        <span>{pokemon.name}</span>
      </p>
      {pokemon.types.map((entry) => (
        <p key={`pokemonCard${index}`}>
          <span className={`${entry.type.name}-type`}>{entry.type.name}</span>
        </p>
      ))}
      <label>
        shiny
        <input
          type="checkbox"
          onChange={() => {
            setIsShiny(!isShiny);
          }}
        />
      </label>
    </div>
  );
}
