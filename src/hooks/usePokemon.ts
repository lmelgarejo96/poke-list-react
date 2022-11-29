import { useEffect, useState } from "react"
import { Pokemon } from "../models/Pokemon"
import { getPokemon } from "../services/pokemon"


export const usePokemon = (pokeUrl: string) => {

  const [pokemon, setPokemon] = useState<Pokemon | null>()
  const [loading, setLoading] = useState<boolean>(true)

  const getOnePokemon = async () : Promise<void> => {
    setLoading(true)
    const pokemonResponse = await getPokemon(pokeUrl)
    setPokemon(pokemonResponse)
    setLoading(false)
  }
  
  useEffect(() => {
    getOnePokemon()
  }, [])

  return { pokemon, loading }
}