import { render, screen } from '@testing-library/react';
import { Textarea } from './';

test('renders component', async () => {
  render(
    <Textarea data-testid="textarea">
      Foo bar baz.
    </Textarea>
  );
  const component = screen.getByTestId('textarea');

  expect(component).toBeInTheDocument();
});