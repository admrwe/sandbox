import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Disclosure } from './Disclosure';
import { Button } from '../Button';

const meta: Meta<typeof Disclosure> = {
  component: Disclosure,
  args: {
    title: 'Title',
    children: (
      <>
        Foo bar baz. <br />
        <Button>Hello world</Button>
      </>
    ),
    // expanded: false,
    onOpenChange: fn(),
    onToggle: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Disclosure>;

export const Default: Story = {};
