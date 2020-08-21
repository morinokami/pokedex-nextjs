import React from 'react'
import { render } from '@testing-library/react'
import Navbar from '../../components/navbar'

test('title is displayed', () => {
  const { getByTestId } = render(<Navbar />)
  expect(getByTestId('navbar')).toHaveTextContent('Pokedex')
})
