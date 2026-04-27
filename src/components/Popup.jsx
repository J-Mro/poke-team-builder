import { getSinglePokemon } from "../utils/getSinglePokemon";
import { useState } from "react";
import "./Popup.css";

export function Popup(props) {
  const { isOpen, setIsOpen, setPokemon } = props;
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  async function submit(e) {
    const result = await getSinglePokemon(search);
    setPokemon(result.data);
  }
  if (isOpen) {
    return (
      <div className="popup">
        <div className="popup-contents">
          <button
            className="close-btn"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            close
          </button>
          <h3>Choose your pokemon!</h3>
          <form>
            <label>
              Use the search bar below to search for a pokemon by name:
            </label>
            <input
              type="text"
              placeholder="e.g. Bulbasaur"
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => {
                submit();
              }}
            >
              I choose you!
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return "";
  }
}
