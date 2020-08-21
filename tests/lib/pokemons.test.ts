import {
  getPokemons,
  getAllPokemonNames,
  getPokemonInfo,
} from '../../lib/pokemons'
import pokemons from '../data/pokemons.json'
import pokemon from '../data/pokemon.json'

beforeEach(() => {
  fetchMock.resetMocks()
})

test('fetch pokemons', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(pokemons))

  const data = await getPokemons()

  expect(data.length).toEqual(pokemons.results.length)
})

test('fetch all pokemon names', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(pokemons))

  const data = await getAllPokemonNames()

  expect(data.length).toEqual(pokemons.results.length)
})

test('fetch pokemon info', async () => {
  fetchMock.mockResponseOnce(JSON.stringify(pokemon))

  const data = await getPokemonInfo(pokemon.name)

  expect(data.name).toEqual(pokemon.name)
  expect(data.height).toEqual(pokemon.height)
  expect(data.weight).toEqual(pokemon.weight)
  // TODO
})
