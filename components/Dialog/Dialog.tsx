import {
  useRef,
  useState,
  useCallback,
  ComponentProps,
  useLayoutEffect,
  ReactNode,
  SyntheticEvent,
} from 'react';
import {
  DialogProvider,
  DialogContextValue,
  useDialogContext,
} from './context';
import styles from './Dialog.module.css';

import { Stack } from '../Stack';
import { Heading } from '../Heading';
import { Button } from '../Button';
import { Icon } from '../Icon';

/**
 * ---------------------------
 * Dialog
 * ---------------------------
 *
 * When closing the <dialog> element with an internal action (close button, user provided action, escape key),
 * you must toggle the close() method on the dialogRef directly, to ensure that the DOM state doesn't get out of sync
 * with the internal isOpen state, since there is no way to toggle the internal state via the escape key close action
 * without suppressing this <dialog> behavior and reimplementing.
 *
 * To work around this, the setOpen setter is only called in the <dialog>'s onClose handler, which accounts for any action
 * that closes the <dialog> via close(), the rest of the internal actions simply call the close() method. The closeDialog
 * function also calls close(), to allow a user to use it on custom actions without needing to be aware of the internal ref.
 */

export interface DialogProps {
  children:
    | ReactNode
    | ((renderProps: {
        isOpen: boolean;
        openDialog: () => void;
        closeDialog: () => void;
      }) => ReactNode);
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

const Dialog = (props: DialogProps) => {
  /**
   * Props and defaults
   * ---------------------------
   */
  const { children, open, defaultOpen, onOpenChange } = props;

  /**
   * Ref and state
   * ---------------------------
   */
  const dialogRef = useRef<HTMLDialogElement>(null); // Create ref for context
  const [isOpen, setIsOpen] = useState<boolean>(open ?? defaultOpen ?? false); // Internal open state

  /**
   * Callbacks
   * ---------------------------
   */
  // Set the internal and DOM open state
  const setOpen = useCallback(
    (newIsOpen: boolean) => {
      setIsOpen(newIsOpen);
      onOpenChange?.(newIsOpen);

      if (newIsOpen) {
        dialogRef.current?.showModal();
      } else {
        dialogRef.current?.close();
      }
    },
    [setIsOpen, onOpenChange, dialogRef]
  );

  // Provided to children to open/close dialog
  const openDialog = () => setOpen(true);
  const closeDialog = () => dialogRef.current?.close();

  useLayoutEffect(() => {
    if (open !== undefined) {
      if (open) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }
  }, [open]);

  useLayoutEffect(() => {
    if (defaultOpen) {
      setOpen(true);
    }
  }, [defaultOpen]);

  /**
   * Context
   * ---------------------------
   */
  const context: DialogContextValue = {
    setOpen,
    dialogRef,
    isOpen,
  };

  const dialogChildren =
    typeof children === 'function'
      ? children({ isOpen, openDialog, closeDialog })
      : children;

  return <DialogProvider value={context}>{dialogChildren}</DialogProvider>;
};

/**
 * ---------------------------
 * Dialog.Body
 * ---------------------------
 */

interface DialogBodyProps extends ComponentProps<'dialog'> {
  children: ReactNode;
  title: string;
}

const Body = (props: DialogBodyProps) => {
  const { children, title, ...remainingProps } = props;

  const baseClass = styles.dialog;
  // const variantClass = styles[`button--${variant}`];
  // const sizeClass = styles[`button--${size}`];
  // const classes = `${baseClass} ${variantClass} ${sizeClass}`;
  const classes = `${baseClass}`;

  const { dialogRef, setOpen } = useDialogContext();

  const handleOnClose = (event: SyntheticEvent<HTMLDialogElement>) => {
    setOpen(false);
    remainingProps.onClose?.(event);
  };

  return (
    <dialog
      ref={dialogRef}
      className={classes}
      onClose={handleOnClose}
      {...remainingProps}
    >
      <Stack>
        <Stack direction="row" style={{ justifyContent: 'space-between' }}>
          <Heading size="1-and-half-x" fontWeight="bold">
            {title}
          </Heading>
          <Button
            onClick={() => dialogRef.current?.close()}
            autoFocus
            type="button"
            size="small"
            variant="tertiary"
            iconOnly
            style={{ alignSelf: 'center' }}
          >
            <Icon>close</Icon>
          </Button>
        </Stack>
        {children}
      </Stack>
    </dialog>
  );
};

Dialog.Body = Body;
export default Dialog;
