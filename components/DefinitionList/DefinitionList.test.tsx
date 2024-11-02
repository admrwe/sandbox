import { render, screen } from '@testing-library/react';
import { DefinitionList } from './';

test('renders component', async () => {
  render(
    <DefinitionList data-testid="definition-list">
      Foo bar baz.
    </DefinitionList>
  );
  const component = screen.getByTestId('definition-list');

  expect(component).toBeInTheDocument();
});