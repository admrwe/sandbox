import {
  useRef,
  useState,
  useEffect,
  useCallback,
  useId,
  ReactNode,
  HTMLAttributes,
} from 'react';

import style from './Disclosure.module.css';

import { CSSMarginProps, getCssMarginPropsStyle } from '../utils';

interface DisclosureProps
  extends CSSMarginProps,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title: string;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onToggle?: () => void;
  onOpenChange?: (isOpen: boolean) => void;
}

export const Disclosure = (props: DisclosureProps) => {
  const {
    children,
    title,
    expanded,
    defaultExpanded = false,
    onToggle,
    onOpenChange,
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
      onOpenChange?.(newIsOpen);
      setIsOpen(newIsOpen);

      if (newIsOpen === false) {
        // Reset height from "auto" to explicit current height
        setBodyHeight(disclosureBodyContentRef.current?.offsetHeight);

        setTimeout(() => {
          // Animate back to 0
          setBodyHeight(0);
        }, 10);
      } else if (newIsOpen === true) {
        // Set to current height for animation
        setBodyHeight(disclosureBodyContentRef.current?.offsetHeight);

        setTimeout(() => {
          // Reset to "auto" to allow element to respond to viewport resize
          setBodyHeight('auto');
        }, 200);
      }
    },
    [onOpenChange, setIsOpen, setBodyHeight]
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
      className={style['disclosure']}
      {...remainingProps}
      style={{
        ...remainingProps.style,
        ...getCssMarginPropsStyle({
          marginInlineStart,
          marginInlineEnd,
          marginInline,
          marginBlockStart,
          marginBlockEnd,
          marginBlock,
          margin,
        }),
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
};
