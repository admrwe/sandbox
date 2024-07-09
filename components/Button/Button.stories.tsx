import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';
import { Icon } from '../Icon';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Hello world',
    iconOnly: false,
    variant: 'primary',
    size: 'medium',
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const IconOnly: Story = {
  args: {
    children: <Icon>close</Icon>,
    iconOnly: true,
  },
};

export const WithIcons: Story = {
  args: {
    iconBefore: <Icon aria-hidden>star</Icon>,
    iconAfter: <Icon aria-hidden>keyboard_arrow_down</Icon>,
  },
};
