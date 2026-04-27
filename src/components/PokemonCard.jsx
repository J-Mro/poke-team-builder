export function PokemonCard(props) {
  const { pokemon } = props;
  return (
    <div>
      <img
        className="pokemon-sprite"
        src={pokemon.sprites.front_default}
        alt={`${pokemon.name} sprite`}
      />
      <p>{pokemon.name}</p>
      {pokemon.types.map((entry) => (
        <p>{entry.type.name}</p>
      ))}
    </div>
  );
}
