import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Stack } from '../Stack';
import { Heading } from '../Heading';
import { Text } from '../Text';

import Dialog, { DialogProps } from './Dialog';

const meta = {
  component: Dialog,
  args: {
    defaultOpen: false,
    title: 'Dialog title',
  },
} satisfies Meta<DialogProps & { title: string }>;

export default meta;
type Story = StoryObj<DialogProps & { title: string }>;

export const Default: Story = {
  render: (args) => {
    const handleOnOpenChange = (isOpen: boolean) => {
      console.log('onopenchange', isOpen);
    };

    return (
      <Dialog onOpenChange={handleOnOpenChange} {...args}>
        {({ openDialog, closeDialog }) => (
          <>
            <Button onClick={openDialog}>Open</Button>
            <Dialog.Body title={args.title}>
              <Stack>
                <Text>Hello world foo bar baz.</Text>
                <Button style={{ alignSelf: 'start' }} onClick={closeDialog}>
                  Child close
                </Button>
              </Stack>
            </Dialog.Body>
          </>
        )}
      </Dialog>
    );
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const handleOnOpenChange = (isOpen: boolean) => {
      console.log('onopenchange', isOpen);
      setOpen(isOpen);
    };

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Dialog open={open} onOpenChange={handleOnOpenChange}>
          <Dialog.Body title={args.title}>
            <Stack>
              <Text>Hello world foo bar baz.</Text>
              <Button onClick={() => setOpen(false)}>Close child</Button>
            </Stack>
          </Dialog.Body>
        </Dialog>
      </>
    );
  },
};
