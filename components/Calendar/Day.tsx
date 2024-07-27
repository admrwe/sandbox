import { ComponentProps, forwardRef, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import styles from './Calendar.module.css';
// import { CommonSizes, CSSMarginProps, getCssMarginPropsStyle } from '../utils';

interface DayProps extends ComponentProps<'button'> {
  /**
   * Children.
   */
  children?: ReactNode;
  today?: boolean;
  active?: boolean;
}

const dayStyles = cva(styles.day, {
  variants: {
    active: {
      true: styles.active,
    },
    today: {
      true: styles.today,
    },
  },
  defaultVariants: {
    active: false,
    today: false,
  },
});

export const Day = forwardRef<HTMLButtonElement, DayProps>(
  (props: DayProps, forwardedRef) => {
    const {
      children,
      today = false,
      active = false,
      className,
      ...remainingProps
    } = props;

    return (
      <button
        ref={forwardedRef}
        className={dayStyles({ active, today, className })}
        {...remainingProps}
      >
        {children}
      </button>
    );
  }
);
