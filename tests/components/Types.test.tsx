import React from 'react'
import { render } from '@testing-library/react'
import Types, { Type } from '../../components/Types'

describe('Types', () => {
  test.each([
    { name: 'fighting', color: '#9f422a' },
    { name: 'flying', color: '#90b1c5' },
    { name: 'poison', color: '#642785' },
    { name: 'ground', color: '#ad7235' },
    { name: 'rock', color: '#4b190e' },
    { name: 'bug', color: '#179a55' },
    { name: 'ghost', color: '#363069' },
    { name: 'steel', color: '#5c756d' },
    { name: 'fire', color: '#b22328' },
    { name: 'water', color: '#2648dc' },
    { name: 'grass', color: '#007c42' },
    { name: 'electric', color: '#e0e64b' },
    { name: 'psychic', color: '#ac296b' },
    { name: 'ice', color: '#7ecff2' },
    { name: 'dragon', color: '#378a94' },
    { name: 'fairy', color: '#9e1a44' },
    { name: 'dark', color: '#040706' },
    { name: 'unknown', color: '#b1a5a5' },
  ])('types are displayed with color', (type) => {
    const { getByTestId } = render(<Type type={type.name} />)
    expect(getByTestId('type')).toHaveStyle(`background-color: ${type.color};`)
  })

  test('proper number of types are displayed', () => {
    const types = ['fire', 'flying']
    const { getAllByTestId } = render(<Types types={types} />)
    expect(getAllByTestId('type')).toHaveLength(types.length)
  })
})
