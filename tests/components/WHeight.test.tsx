import React from 'react'
import { render } from '@testing-library/react'
import WHeight from '../../components/WHeight'

describe('WHeight', () => {
  test('weight is displayed', () => {
    const { getByTestId } = render(<WHeight value={3} weight={true} />)
    expect(getByTestId('wheight')).toHaveTextContent('3 KG')
    expect(getByTestId('wheight')).toHaveTextContent('Weight')
  })

  test('height is displayed', () => {
    const { getByTestId } = render(<WHeight value={3} weight={false} />)
    expect(getByTestId('wheight')).toHaveTextContent('3 M')
    expect(getByTestId('wheight')).toHaveTextContent('Height')
  })
})
