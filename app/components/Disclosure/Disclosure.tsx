import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useId,
  ReactNode,
  forwardRef,
  ComponentProps,
} from 'react';

import style from './Disclosure.module.css';

import { CSSMarginProps, getCssMarginPropsStyle } from '../utils';

interface DisclosureProps extends CSSMarginProps, ComponentProps<'div'> {
  /**
   * Content for the disclosure.
   */
  children: ReactNode;
  /**
   * Title for disclosure.
   */
  title: string;
  /**
   * Sets expanded state (controlled).
   */
  expanded?: boolean;
  /**
   * Sets expanded state (uncontrolled).
   */
  defaultExpanded?: boolean;
  /**
   * Removes disclosure container.
   */
  noContainer?: boolean;
  /**
   * Handler fired when toggled state changes.
   */
  onToggle?: () => void;
  /**
   * Handler fired when expanded state changes, returns current expanded state.
   */
  onExpandedChange?: (isExpanded: boolean) => void;
}

export const Disclosure = forwardRef<HTMLDivElement, DisclosureProps>(
  (props: DisclosureProps, ref) => {
    const {
      children,
      title,
      expanded,
      defaultExpanded = false,
      noContainer = false,
      onToggle,
      onExpandedChange,
      marginInlineStart,
      marginInlineEnd,
      marginInline,
      marginBlockStart,
      marginBlockEnd,
      marginBlock,
      margin,
      ...remainingProps
    } = props;

    const disclosureBodyContentRef = useRef<HTMLDivElement>(null);
    const disclosureBodyId = useId();
    const isFirstRender = useRef<boolean>(true);

    const [isOpen, setIsOpen] = useState(expanded ?? defaultExpanded ?? false);

    // If expanded on first render, set height to auto to avoid flash of animation,
    // otherwise set to 0 as start point for animation
    const getInitialHeight = () => {
      if ((expanded || defaultExpanded) && isFirstRender) {
        return 'auto';
      } else {
        return 0;
      }
    };
    const [bodyHeight, setBodyHeight] = useState<number | string | undefined>(
      getInitialHeight()
    );

    useEffect(() => {
      isFirstRender.current = false;
      return () => {
        isFirstRender.current = true;
      };
    }, []);

    useEffect(() => {
      // Only run effect in controlled case
      if (expanded !== undefined) {
        if (expanded) {
          setOpen(true);
        } else if (!expanded) {
          setOpen(false);
        }
      }
    }, [expanded]);

    const setOpen = useCallback(
      (newIsOpen: boolean) => {
        onExpandedChange?.(newIsOpen);
        setIsOpen(newIsOpen);

        if (newIsOpen === false) {
          // Close

          // Reset height from "auto" to explicit current height
          setBodyHeight(disclosureBodyContentRef.current?.offsetHeight);

          setTimeout(() => {
            // Animate back to 0
            setBodyHeight(0);
          }, 10);
        } else if (newIsOpen === true) {
          // Open

          // Set to current height for animation
          setBodyHeight(disclosureBodyContentRef.current?.offsetHeight);

          setTimeout(() => {
            // Reset to "auto" to allow element to respond to viewport resize
            setBodyHeight('auto');
          }, 200);
        }
      },
      [onExpandedChange, setIsOpen, setBodyHeight]
    );

    const handleOnClick = () => {
      if (isOpen === false) {
        setOpen(true);
      } else {
        setOpen(false);
      }

      if (onToggle) {
        onToggle();
      }
    };

    return (
      <div
        ref={ref}
        className={`${style['disclosure']} ${noContainer && style['disclosure--no-container']}`}
        {...remainingProps}
        style={{
          ...getCssMarginPropsStyle({
            marginInlineStart,
            marginInlineEnd,
            marginInline,
            marginBlockStart,
            marginBlockEnd,
            marginBlock,
            margin,
          }),
          ...remainingProps.style,
        }}
      >
        <button
          onClick={handleOnClick}
          aria-expanded={isOpen}
          aria-controls={disclosureBodyId}
          className={style['disclosure__header']}
        >
          <div>{title}</div>
          <div
            style={{
              transition: 'inherit',
              transform: isOpen ? 'rotate(180deg)' : undefined,
            }}
          >
            👇
          </div>
        </button>
        <div
          className={style['disclosure__body']}
          id={disclosureBodyId}
          style={{
            blockSize: bodyHeight,
            visibility: isOpen ? 'visible' : 'hidden',
          }}
        >
          <div
            ref={disclosureBodyContentRef}
            className={style['disclosure__body-content']}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);
