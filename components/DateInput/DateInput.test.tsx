import { render, screen } from '@testing-library/react';
import { DateInput } from './';

test('renders component', async () => {
  render(
    <DateInput data-testid="date-input">
      Foo bar baz.
    </DateInput>
  );
  const component = screen.getByTestId('date-input');

  expect(component).toBeInTheDocument();
});