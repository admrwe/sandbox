import { ComponentProps, forwardRef, ReactNode } from 'react';
import styles from './Button.module.css';
import { CommonSizes } from '../utils';

interface ButtonProps extends ComponentProps<'button'> {
  /**
   * Sets button text.
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
   * Sets button size.
   */
  size?: CommonSizes;

  /**
   * Sets button variant.
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      children,
      iconAfter,
      iconBefore,
      iconOnly = false,
      size = 'medium',
      variant = 'primary',
      ...remainingProps
    } = props;

    const baseClass = styles.button;
    const variantClass = styles[`button--${variant}`];
    const sizeClass = styles[`button--${size}`];
    const iconOnlyClass = iconOnly ? styles[`button--icon-only`] : null;
    const classes = `${baseClass} ${variantClass} ${sizeClass} ${iconOnlyClass}`;

    return (
      <button ref={ref} className={classes} {...remainingProps}>
        {iconBefore && iconBefore}
        {children}
        {iconAfter && iconAfter}
      </button>
    );
  }
);
