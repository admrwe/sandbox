import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

test('loads and displays greeting', async () => {
  render(<Button>Hello world</Button>)
  const component = screen.getByText('Hello world')

  //   await userEvent.click(component);

  expect(component).toBeInTheDocument()
})
