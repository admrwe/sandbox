import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Hello world',
    variant: 'primary',
    size: 'medium',
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
