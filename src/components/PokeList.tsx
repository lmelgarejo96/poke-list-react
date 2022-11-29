import { SimplePokemon } from "../models/Pokemon";
import PokeItem from "./PokeItem";

type pokeListProps = {
  pokeList: Array<SimplePokemon>;
  loading: boolean;
};

const PokeList = (props: pokeListProps) => {
  const pokeList = props.pokeList;
  const loading = props.loading;

  return (
    <div className="py-3 columns-4 xl:columns-5 lg:columns-5 md:columns-3 sm:columns-1">
      {pokeList.map((pokemon: SimplePokemon) => (
        <PokeItem
          simpleLoading={loading}
          pokemon={pokemon}
          key={pokemon.name}
        />
      ))}
    </div>
  );
};

export default PokeList;
