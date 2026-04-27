import { useState } from "react";

export function PokemonCard(props) {
  const { pokemon } = props;
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
      <p>{pokemon.name}</p>
      {pokemon.types.map((entry) => (
        <p>{entry.type.name}</p>
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
