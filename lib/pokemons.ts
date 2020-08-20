export interface Pokemon {
  name: string
  url: string
}

export interface PokemonInfo {
  name: string
  id: number
  height: number
  weight: number
  //TODO: Extend
  // types
  // stats
  // ...
}

interface PokemonsResponse {
  count: number
  next: string
  previous: string
  results: Array<{ name: string; url: string }>
}

interface PokemonInfoResponse {
  id: number
  name: string
  height: number
  weight: number
}

export const getPokemons = async (): Promise<Pokemon[]> => {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
  const data = (await result.json()) as PokemonsResponse
  return data.results.map((d) => ({ name: d.name, url: d.url }))
}

export const getPokemonInfo = async (name: string): Promise<PokemonInfo> => {
  //TODO: Error handling
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = (await result.json()) as PokemonInfoResponse
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    weight: data.weight,
  }
}

export const getPokemonImageURL = (id: number): string => {
  return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
}
