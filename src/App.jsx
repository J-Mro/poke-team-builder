import "./App.css";
import { Routes, Route } from "react-router-dom";
import { TeamList } from "./components/TeamList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TeamList />} />
    </Routes>
  );
}

export default App;
