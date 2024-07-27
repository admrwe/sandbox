import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  argTypes: {
    value: {
      control: 'date',
    },
  },
  args: {
    value: new Date(),
    onDayClick: (date) => console.log(date),
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};
