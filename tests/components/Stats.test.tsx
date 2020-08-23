import React from 'react'
import { render } from '@testing-library/react'
import Stats from '../../components/Stats'

describe('Stats', () => {
  test('title is displayed', () => {
    const { container } = render(<Stats stats={[]} />)
    expect(container).toHaveTextContent('Base Stats')
  })

  test('proper number of stats are displayed', () => {
    const stats = [
      { name: 'hp', value: 100 },
      { name: 'attack', value: 100 },
      { name: 'defense', value: 100 },
    ]
    const { getAllByTestId } = render(<Stats stats={stats} />)
    expect(getAllByTestId('progress')).toHaveLength(stats.length)
  })
})
