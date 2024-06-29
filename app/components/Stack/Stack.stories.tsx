import type { Meta, StoryObj } from '@storybook/react';

import { Stack } from './Stack';
import { Text } from '../Text';

const meta: Meta<typeof Stack> = {
  component: Stack,
  args: {
    direction: 'column',
    space: '1-x',
    wrap: true,
    children: (
      <>
        <Text>Foo</Text>
        <Text>Bar</Text>
        <Text>Baz</Text>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {};
