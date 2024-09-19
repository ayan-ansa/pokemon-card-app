import { useState } from "react";
import Card from "./Card";

export default function PokemonCard({ query }) {
  const [apiData, setApiData] = useState([]);

  const getPokemonData = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=60");
    const data = await response.json();
    
    const pokemonData = data.results.map(async (res) => {
      const response = await fetch(res.url);
      const data = await response.json();
      return data;
    });


    Promise.all(pokemonData).then((data) => {
        setApiData(data);
    });
  };

  useState(() => {
    getPokemonData();
  });

  const filteredPokemon = apiData.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="card-container">
      {filteredPokemon.map((pokemon) => {
        return <Card key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
}
