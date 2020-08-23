import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Card from '../../components/Card'

describe('Card', () => {
  const pokemon = {
    id: 1,
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  }

  test('pokemon name is displayed', () => {
    const { getByTestId } = render(
      <Card
        pokemon={pokemon}
        setPokemon={jest.fn()}
        setOpenModal={jest.fn()}
        setColor={jest.fn()}
      />
    )
    expect(getByTestId('pokemon-name')).toHaveTextContent('bulbasaur')
  })

  test('pokemon image is displayed when visible', () => {
    //TODO
  })

  test('pokemon image is not displayed when not visible', () => {
    //TODO
  })

  test('setPokemon and setOpenModal are called when clicked', () => {
    const setPokemon = jest.fn()
    const setOpenModal = jest.fn()
    const { getByTestId } = render(
      <Card
        pokemon={pokemon}
        setPokemon={setPokemon}
        setOpenModal={setOpenModal}
        setColor={jest.fn()}
      />
    )

    const card = getByTestId('card')
    fireEvent.click(card)
    expect(setPokemon).toHaveBeenCalledTimes(1)
    expect(setPokemon).toHaveBeenCalledWith(pokemon)
    expect(setOpenModal).toHaveBeenCalledTimes(1)
    expect(setOpenModal).toHaveBeenCalledWith(true)
  })
})
