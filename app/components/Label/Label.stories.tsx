import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
  component: Label,
  args: {
    children: 'Hello world',
    required: false,
    size: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};
