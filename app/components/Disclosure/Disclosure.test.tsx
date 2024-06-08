import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Disclosure } from './Disclosure'

test('renders component', async () => {
  render(
    <Disclosure title="Title" data-testid="disclosure">
      Foo bar baz.
    </Disclosure>
  )
  const component = screen.getByTestId('disclosure')

  expect(component).toBeInTheDocument()
})

test('expands/collapses on click', async () => {
  render(
    <Disclosure title="Title" data-testid="disclosure">
      Foo bar baz.
    </Disclosure>
  )
  const header = screen.getByRole('button')

  await userEvent.click(header)
  expect(header).toHaveAttribute('aria-expanded', 'true')

  await userEvent.click(header)
  expect(header).toHaveAttribute('aria-expanded', 'false')
})
