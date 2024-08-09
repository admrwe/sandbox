import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  args: {
    defaultValue: '',
    value: 'Hello world',
    invalid: false,
    size: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
