export interface Pokemon {
  id: number
  name: string
  url: string
}

export interface PokemonInfo {
  id: number
  name: string
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
  return data.results.map((d) => ({
    id: extractIdFromURL(d.url),
    name: d.name,
    url: d.url,
  }))
}

export const getAllPokemonNames = async (): Promise<
  { params: { name: string } }[]
> => {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
  const data = (await result.json()) as PokemonsResponse
  return data.results.map((d) => ({ params: { name: d.name } }))
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

const extractIdFromURL = (url: string): number => {
  const splitted = url.split('/')
  return +splitted[splitted.length - 2]
}
