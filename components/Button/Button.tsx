import { ComponentProps, forwardRef, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import styles from './Button.module.css';

import { CommonSizes } from '../utils';

interface ButtonProps extends ComponentProps<'button'> {
  /**
   * Button text.
   */
  children: ReactNode;

  /**
   * Icon to display after button text.
   */
  iconAfter?: ReactNode;

  /**
   * Icon to display before button text.
   */
  iconBefore?: ReactNode;

  /**
   * Styles button as icon only.
   *
   * @default false
   */
  iconOnly?: boolean;

  /**
   * Button size.
   */
  size?: CommonSizes;

  /**
   * Button variant.
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const buttonStyles = cva(styles.button, {
  variants: {
    iconOnly: {
      true: styles.iconOnly,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      tertiary: styles.tertiary,
    },
  },
  defaultVariants: {
    iconOnly: false,
    size: 'medium',
    variant: 'primary',
  },
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, forwardedRef) => {
    const {
      children,
      iconAfter,
      iconBefore,
      iconOnly = false,
      size = 'medium',
      variant = 'primary',
      className,
      ...remainingProps
    } = props;

    return (
      <button
        ref={forwardedRef}
        className={buttonStyles({ iconOnly, size, variant, className })}
        {...remainingProps}
      >
        {iconBefore && iconBefore}
        {children}
        {iconAfter && iconAfter}
      </button>
    );
  }
);
