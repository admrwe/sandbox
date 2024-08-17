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
  arrow as fuiArrow, // Rename to not conflict with internal prop
} from '@floating-ui/react-dom';
import styles from './Popup.module.css';

interface PopupProps extends ComponentProps<'div'> {
  /**
   * The anchor element, accepts a state getter.
   */
  anchor: Element | null;

  /**
   * Shows an arrow pointing to the anchor.
   *
   * @default false
   */
  arrow?: boolean;

  /**
   * The content for the popup.
   */
  children?: ReactNode;

  /**
   * The open state of the popup.
   *
   * @default false
   */
  open?: boolean;

  /**
   * The placement for the popup.
   *
   * @default 'bottom'
   */
  placement?: Placement;
}

const popupStyles = cva(styles.popup, {
  variants: {},
  defaultVariants: {},
});

// Merge refs utility, based on https://mayursinhsarvaiya.medium.com/how-to-merge-refs-in-react-component-d5e4623b6924
// TODO: Abstract somewhere reusalbe
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
        transform: false,
        placement,
        elements: {
          reference: anchor,
        },
        middleware: [
          offset(arrow ? 12 : 6), // Increase space from anchor when arrow is displayed
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

    // Arrow styling based on placement
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
          transform: isOpen ? 'scale(1)' : 'scale(.95)',
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
