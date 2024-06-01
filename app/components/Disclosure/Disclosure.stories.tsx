import type { Meta, StoryObj } from "@storybook/react";

import { Disclosure } from "./Disclosure";

const meta: Meta<typeof Disclosure> = {
  component: Disclosure,
  args: {
    title: "Title",
    children: "Foo bar baz.",
    expanded: undefined,
    defaultExpanded: true,
  },
};

export default meta;
type Story = StoryObj<typeof Disclosure>;

export const Default: Story = {};
