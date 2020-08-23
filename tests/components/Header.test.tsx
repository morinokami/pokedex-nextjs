import React from 'react'
import { render } from '@testing-library/react'
import Header from '../../components/Header'

test('title is displayed', () => {
  const { getByTestId } = render(<Header />)
  expect(getByTestId('header')).toHaveTextContent('Pokedex')
})
