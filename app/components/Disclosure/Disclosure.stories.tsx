import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Disclosure } from './Disclosure';
import { Button } from '../Button';
import { Text } from '../Text';
import { Heading } from '../Heading';
import { Input } from '../Input';
import { Stack } from '../Stack';

const meta: Meta<typeof Disclosure> = {
  component: Disclosure,
  args: {
    title: 'Title',
    children: (
      <Stack space="2-x">
        <Heading size="1-and-eigth-x" fontWeight="bold">
          Section title
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet
          libero dolor, non scelerisque risus dictum quis. Nullam a mauris vitae
          purus convallis ultricies.
        </Text>
        <Input label="Hello world" />
        <Heading size="1-and-eigth-x" fontWeight="bold" marginBlockStart="2-x">
          Section title
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet
          libero dolor, non scelerisque risus dictum quis. Nullam a mauris vitae
          purus convallis ultricies.
        </Text>
        <Button style={{ alignSelf: 'flex-start' }}>Hello world</Button>
      </Stack>
    ),
    noContainer: false,
    onExpandedChange: fn(),
    style: { maxInlineSize: 600 },
  },
};

export default meta;
type Story = StoryObj<typeof Disclosure>;

export const Default: Story = {};
