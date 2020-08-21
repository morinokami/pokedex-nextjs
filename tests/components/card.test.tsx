import React from 'react'
import { render } from '@testing-library/react'
import Card from '../../components/card'

describe('Card', () => {
  const pokeon = {
    id: 1,
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  }

  test('pokemon name is displayed', () => {
    const { getByTestId } = render(<Card pokemon={pokeon} />)
    expect(getByTestId('pokemon-name')).toHaveTextContent('bulbasaur')
  })

  test('pokemon image is displayed when visible', () => {
    //TODO
  })

  test('pokemon image is not displayed when not visible', () => {
    //TODO
  })
})
