import { useEffect, useState } from "react";
import { usePokemon } from "../hooks/usePokemon";
import { Pokemon, SimplePokemon } from "../models/Pokemon";

type PokeItemProp = {
  pokemon: SimplePokemon;
  simpleLoading: boolean;
};

const PokeItem = (props: PokeItemProp) => {
  const simplePokemon: SimplePokemon = props.pokemon;
  const simpleLoading: boolean = props.simpleLoading;
  const { pokemon, loading } = usePokemon(simplePokemon.url);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg py-1 mx-auto">
      <div className="min-h-28 h-28">
        {simpleLoading || loading ? (
          <div className="flex justify-center items-center text-gray-400 h-28">
            Loading ...
          </div>
        ) : (
          <img
            draggable={false}
            className="mx-auto max-h-28 h-28 min-h-28"
            src={pokemon?.sprite}
            alt="Sunset in the mountains"
          />
        )}
      </div>
      <div className="px-6 py-2">
        <div className="font-bold text-xl text-gray-100 mb-2 capitalize">
          {simplePokemon.name}
        </div>
      </div>
      {/* <div className="px-6 pb-2">
        {pokemon?.abilities.map((ability) => (
          <span
            style={{ paddingTop: "3px", paddingBottom: "3px" }}
            className="inline-block bg-green-200 rounded-full px-3 py-0 text-xs font-semibold text-gray-700 mr-1 mb-1 capitalize"
          >
            {ability.name}
          </span>
        ))}
      </div> */}
      <div className="px-6 pb-2">
        {pokemon?.types.map((type) => (
          <span
            style={{ paddingTop: "3px", paddingBottom: "3px" }}
            className="inline-block bg-gray-200 rounded-full px-3 py-0 text-xs font-semibold text-gray-700 mr-1 mb-1 capitalize"
          >
            {type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokeItem;
