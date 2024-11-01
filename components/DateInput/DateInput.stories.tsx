import { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { DateInput } from './';

const meta: Meta<typeof DateInput> = {
  component: DateInput,
  args: {},
};

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(new Date());
    console.log('current value', value);

    return (
      <DateInput
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
      />
    );
  },
};
