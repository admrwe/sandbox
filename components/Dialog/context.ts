import { createContext, useContext, RefObject } from 'react';

export interface DialogContextValue {
  setOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  dialogRef: RefObject<HTMLDialogElement>;
}

const DialogContext = createContext<DialogContextValue>(
  {} as DialogContextValue
);

export const DialogProvider = DialogContext.Provider;
export const useDialogContext = (): DialogContextValue =>
  useContext(DialogContext);
