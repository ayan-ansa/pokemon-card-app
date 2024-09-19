import React from "react";
export default function Card({ pokemon }) {
  return (
    <div className="card">
        <div className="card-img">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        </div>
        <h3 className="name">{pokemon.name}</h3>
    </div>
  );
}
