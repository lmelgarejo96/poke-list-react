import { useEffect, useState } from "react"
import { SimplePokemon } from "../models/Pokemon"
import { getPokemon, getPokemons } from "../services/pokemon"


export const usePokemons = () => {
  const [total, setTotal] = useState<number>(0)
  const [next, setNext] = useState<string | null>(null)
  const [previous, setPrevious] = useState<string | null>(null)
  const [pokeList, setPokeList] = useState<Array<SimplePokemon>>([])
  const [loading, setLoading] = useState<boolean>(false)

  
  const getPokemonsList = async (url? : string | null) => {
    setLoading(true)
    const response = await getPokemons(url)
    setNext(response.next)
    setPrevious(response.previous)
    setTotal(response.count)
    setPokeList(response.results)
    setLoading(false)
    console.log(response);
  }

  useEffect(() => {
    console.log("montando hook");
    getPokemonsList()
  }, [])

  return { pokeList, total, next, previous, loading, getPokemonsList }
}