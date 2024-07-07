import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amit.',
    display: 'block',
    size: '1-x',
    fontWeight: 'normal',
    marginBlockStart: '2-x',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};
