import { useState } from "react";
import "./App.css";
import PokemonCard from "./components/PokemonCard.jsx";
import SearchBar from "./components/Search";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <h1>Let's See Pokemon</h1>
      <SearchBar setQuery={setQuery} query={query} />
      <PokemonCard query={query} />
    </div>
  );
}

export default App;
