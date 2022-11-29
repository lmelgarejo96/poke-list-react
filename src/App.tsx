import Header from "./components/Header";
import Pagination from "./components/Pagination";
import PokeList from "./components/PokeList";
import { usePokemons } from "./hooks/usePokemons";

function App() {
  const { pokeList, previous, next, loading, getPokemonsList } = usePokemons();
  return (
    <div className="App bg-slate-900 h-full min-h-screen">
      <Header />
      <div className="container mx-auto">
        {pokeList && <PokeList pokeList={pokeList} loading={loading} />}
        <Pagination
          prev={() => getPokemonsList(previous)}
          next={() => getPokemonsList(next)}
          disabledPrev={!!!previous}
          disabledNext={!!!next}
        />
      </div>
    </div>
  );
}

export default App;
