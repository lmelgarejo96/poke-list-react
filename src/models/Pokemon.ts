interface PokemonAbility {
  name: string
  slot: number
  url: string
}

interface PokemonType {
  name: string,
  url: string
  slot: number
}

export interface IPokemon {
  name: string
  sprite: string
  abilities: Array<PokemonAbility>
  height: number
  weight: number
  types: Array<PokemonType>

}

export interface SimplePokemon {
  name: string
  url: string
}

export class Pokemon {

  public name: string
  public sprite: string
  public abilities: Array<PokemonAbility>
  public height: number
  public weight: number
  public types: Array<PokemonType>

  constructor(pokeData: any = {}) {
    this.name = pokeData?.name
    this.sprite = pokeData?.sprites?.other?.dream_world?.front_default
    this.height = pokeData?.height
    this.weight = pokeData?.weight
    this.types = pokeData?.types?.map((type: any) => {
      return {
        name: type?.type?.name,
        url: type?.type?.url,
        slot: type?.slot,
      }
    })
    this.abilities = pokeData?.abilities?.map((ab: any) => {
      return {
        name: ab?.ability?.name,
        url: ab?.ability?.url,
        slot: ab?.slot,
      }
    })
    console.log(this);
  }

}