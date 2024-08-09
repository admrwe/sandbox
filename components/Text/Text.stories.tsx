import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Text } from './Text';
import { Stack } from '../Stack';

const meta: Meta<typeof Text> = {
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amit.',
    display: 'block',
    size: '1-x',
    fontWeight: 'normal',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Nested: Story = {
  render: () => (
    <Stack space="3-x">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        malesuada velit nec mi aliquam, vitae pulvinar tellus tempus. Nulla
        facilisi.{' '}
        <Text display="inline" fontWeight="bold">
          Fusce ac nibh et risus
        </Text>{' '}
        sollicitudin tincidunt quis vel urna. In ultrices aliquet bibendum. In
        hac habitasse platea dictumst. Integer lacinia sapien non massa
        efficitur fermentum. Etiam commodo placerat ante, quis luctus nunc
        aliquam ut. Cras sit amet lorem purus. Integer vitae purus turpis.
        Aliquam et elit pharetra, tristique neque ac, imperdiet est.
      </Text>

      <Text>
        Suspendisse vehicula dolor sed arcu rhoncus, in pellentesque risus
        placerat. Aenean fermentum rutrum pellentesque. Cras cursus purus massa,
        ut laoreet magna consectetur et. Morbi enim quam, mollis sed ex at,
        ultrices lacinia ex. Nulla vulputate sollicitudin tortor sed ultricies.
      </Text>
    </Stack>
  ),
};
