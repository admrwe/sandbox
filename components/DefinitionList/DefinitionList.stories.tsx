import type { Meta, StoryObj } from '@storybook/react';

import { DefinitionList, DefinitionListItem } from './DefinitionList';
import { Button } from '../Button';
import { Text } from '../Text';

const meta: Meta<typeof DefinitionList> = {
  component: DefinitionList,
  args: {
    horizontal: false,
    inlineLabels: false,
  },
};

export default meta;
type Story = StoryObj<typeof DefinitionList>;

export const Default: Story = {
  render: (args) => {
    return (
      <DefinitionList {...args}>
        <DefinitionListItem label="Label is usually a string">
          Children of type "string" automatically get default text tyles.
        </DefinitionListItem>
        <DefinitionListItem label="Label text">
          Lorem ipsum dolor amit sit. Foo bar baz.
        </DefinitionListItem>
        <DefinitionListItem label="Label text">
          Lorem ipsum dolor amit sit. Foo bar baz. Lorem ipsum dolor amit sit.
          Foo bar baz. Lorem ipsum dolor amit sit. Foo bar baz. Lorem ipsum
          dolor amit sit. Foo bar baz.
        </DefinitionListItem>
        <DefinitionListItem label="Label text">
          <>
            <Text marginBlockEnd="1-x">
              This is custom content using the Text and Button components.
            </Text>
            <Button>Action</Button>
          </>
        </DefinitionListItem>
        <DefinitionListItem label={<button>ReactNode as Label</button>}>
          Lorem ipsum dolor amit sit. Foo bar baz.
        </DefinitionListItem>
      </DefinitionList>
    );
  },
};
