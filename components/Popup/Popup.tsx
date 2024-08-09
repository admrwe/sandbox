import {
  ReactNode,
  ComponentProps,
  forwardRef,
  useEffect,
  useState,
  useRef,
} from 'react';
import { cva } from 'class-variance-authority';
import {
  useFloating,
  Placement,
  autoUpdate,
  offset,
  arrow as fuiArrow,
} from '@floating-ui/react-dom';
import styles from './Popup.module.css';

interface PopupProps extends ComponentProps<'div'> {
  /**
   * Prop description.
   *
   * @default default
   */
  anchor: Element | null;
  placement?: Placement;
  open?: boolean;
  arrow?: boolean;
  children?: ReactNode;
}

const popupStyles = cva(styles.popup, {
  variants: {},
  defaultVariants: {},
});

export default function mergeRefs<T = any>(
  ...refs: React.ForwardedRef<T>[]
): React.RefCallback<T> {
  return (node: T) => {
    for (const ref of refs) {
      if (ref) {
        if (typeof ref === 'function') ref(node);
        if ('current' in ref) ref.current = node;
      }
    }
  };
}

export const Popup = forwardRef<HTMLDivElement, PopupProps>(
  (props: PopupProps, forwardedRef) => {
    const {
      anchor,
      arrow = false,
      children,
      placement = 'bottom',
      open = false,
      className,
      ...remainingProps
    } = props;

    const [isOpen, setIsOpen] = useState<boolean>(open);
    const arrowRef = useRef<HTMLDivElement>(null);

    // Make open reactive
    useEffect(() => {
      setIsOpen(open);
    }, [open]);

    // Set up Floating UI
    const { refs, floatingStyles, elements, update, middlewareData } =
      useFloating({
        placement,
        elements: {
          reference: anchor,
        },
        middleware: [
          offset(arrow ? 12 : 6),
          fuiArrow({ element: arrowRef, padding: 8 }),
        ],
      });

    // Floating UI autoUpdate and cleanup to enable hide/show with CSS
    useEffect(() => {
      if (isOpen && elements.reference && elements.floating) {
        const cleanup = autoUpdate(
          elements.reference,
          elements.floating,
          update
        );
        return cleanup;
      }
    }, [isOpen, elements, update]);

    // Arrow styling
    const side = placement.split('-')[0];
    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[side];

    const arrowRotation = {
      top: 'rotate(-135deg)',
      right: 'rotate(-45deg)',
      bottom: 'rotate(45deg)',
      left: 'rotate(135deg)',
    }[side];

    return (
      <div
        ref={mergeRefs(forwardedRef, refs.setFloating)}
        className={popupStyles({ className })}
        style={{
          opacity: isOpen ? 1 : 0,
          ...floatingStyles,
        }}
        {...remainingProps}
      >
        {children}
        {arrow && (
          <div
            ref={arrowRef}
            className={styles.arrow}
            style={{
              left: middlewareData.arrow?.x,
              top: middlewareData.arrow?.y,
              transform: arrowRotation,
              [staticSide!]: '-7px',
            }}
          />
        )}
      </div>
    );
  }
);
