import { PokemonCard } from "./PokemonCard";

export function AddPokemonBtn(props) {
  const { index, setIndex, pokemonTeam, children } = props;

  if (pokemonTeam[index] === null) {
    return (
      <div>
        <button
          onClick={() => {
            setIndex(index);
          }}
          className="add-pokemon-btn"
        >
          {children}
        </button>
      </div>
    );
  } else {
    return <PokemonCard pokemon={pokemonTeam[index]} index={index} />;
  }
}
