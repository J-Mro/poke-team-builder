import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PokemonList } from "./components/PokemonList.jsx";

function App() {
  return (
    <main>
      <h1>Pokemon Team Builder</h1>
      <Routes>
        <Route path="/" element={<PokemonList />} />
      </Routes>
    </main>
  );
}

export default App;
