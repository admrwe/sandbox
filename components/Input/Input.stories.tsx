import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    required: false,
    size: 'medium',
    invalid: false,
    label: 'Hello world',
    placeholder: 'Placeholder',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
