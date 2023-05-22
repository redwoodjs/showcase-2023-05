import { render } from '@redwoodjs/testing/web'

import Confetti from './Confetti'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Confetti', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Confetti />)
    }).not.toThrow()
  })
})
