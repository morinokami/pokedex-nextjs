import React from 'react'
import { render } from '@testing-library/react'
import Home from '../../pages/index'

test('renders welcome message', () => {
  const { getByText } = render(<Home pokemons={[]} />)
  expect(getByText('hey')).toBeInTheDocument()
})
