import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  args: {
    children: 'close',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
