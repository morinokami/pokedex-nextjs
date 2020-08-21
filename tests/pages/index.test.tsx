import React from 'react'
import { render } from '@testing-library/react'
import Home from '../../pages/index'

test('pokemons are displayed', () => {
  const pokemons = [
    {
      id: 1,
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    { id: 2, name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    {
      id: 3,
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
  ]
  const { container } = render(<Home pokemons={pokemons} />)
  expect(container.querySelectorAll('a')).toHaveLength(pokemons.length)
})
