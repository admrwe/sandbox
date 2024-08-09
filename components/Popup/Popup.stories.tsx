import { useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Popup } from './';

const PLACEMENTS = [
  'top',
  'right',
  'bottom',
  'left',
  'top-start',
  'top-end',
  'right-start',
  'right-end',
  'bottom-start',
  'bottom-end',
  'left-start',
  'left-end',
];

const meta: Meta<typeof Popup> = {
  component: Popup,
  args: {
    placement: 'bottom',
    open: true,
    arrow: false,
  },
  argTypes: {
    placement: {
      control: 'select',
      options: PLACEMENTS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  render: (args) => {
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

    return (
      <>
        <button ref={setAnchor}>I'm the anchor!</button>
        <Popup {...args} anchor={anchor}>
          Hello world :)
        </Popup>
      </>
    );
  },
};
