import pokeApi from "../api/pokemon"
import { SimplePokemon, Pokemon } from "../models/Pokemon"
import { memoize } from "../utils/memo"
import { replaceUrl } from "../utils/replaceUrl"

interface PokemonResponseList {
  count: number
  next: string | null
  previous: string | null,
  results: Array<SimplePokemon>
}

export const getPokemons = memoize(async (url?: string | null, limit : number = 15) : Promise<PokemonResponseList> => {
  const urlReplaced = url ? replaceUrl(url, "https://pokeapi.co/api/v2", "") : `/pokemon?limit=${limit}` // only params if has
  const response =  await pokeApi.get(urlReplaced)
  const pokemonsResponse : PokemonResponseList = response.body as PokemonResponseList
  return pokemonsResponse
})

export const getPokemon = memoize(async (url: string) : Promise<Pokemon | null> => {
  const urlReplaced = replaceUrl(url, "https://pokeapi.co/api/v2", "")
  const response =  await pokeApi.get(urlReplaced)
  const pokemonResponse = new Pokemon(response.body)
  return pokemonResponse
})