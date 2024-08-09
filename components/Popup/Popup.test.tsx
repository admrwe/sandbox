import { render, screen } from '@testing-library/react';
import { Popup } from './';

test('renders component', async () => {
  render(
    <Popup data-testid="popup">
      Foo bar baz.
    </Popup>
  );
  const component = screen.getByTestId('popup');

  expect(component).toBeInTheDocument();
});