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
  types: string[]
  stats: { name: string; value: number }[]
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
  types: { type: { name: string } }[]
  stats: { base_stat: number; stat: { name: string } }[]
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
  const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000')
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
    types: data.types.map((t) => t.type.name),
    stats: data.stats
      .filter((s) => ['hp', 'attack', 'defense', 'speed'].includes(s.stat.name))
      .map((s) => ({ name: s.stat.name, value: s.base_stat })),
  }
}

export const getPokemonImageURL = (id: number): string => {
  return `/images/${id}.png`
}

const extractIdFromURL = (url: string): number => {
  const splitted = url.split('/')
  return +splitted[splitted.length - 2]
}
