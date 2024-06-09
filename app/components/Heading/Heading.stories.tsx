import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  args: {
    children: 'Hello world',
    level: 2,
    size: '2-x',
    fontWeight: 'normal',
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {};
