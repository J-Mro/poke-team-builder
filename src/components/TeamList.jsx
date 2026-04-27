import { useState } from "react";
import { getSinglePokemon } from "../utils/getSinglePokemon";
import { AddPokemonBtn } from "./AddPokemonBtn";
import { PokemonCard } from "./PokemonCard";
import { Popup } from "./Popup";
import "./TeamList.css";

export function TeamList() {
  const teamSlots = [1, 2, 3, 4, 5, 6];
  return (
    <section className="team-list">
      <h2>My Team</h2>
      {teamSlots.map((slot) => (
        <AddPokemonBtn>
          <img className="pokeball-btn-img" src="src/images/pokeball.png"></img>
          <h3>Add Pokemon {slot}</h3>
        </AddPokemonBtn>
      ))}
    </section>
  );
}
