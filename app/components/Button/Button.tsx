import { ComponentProps, forwardRef } from 'react';
import styles from './Button.module.css';
import { CommonSizes } from '../utils';

interface ButtonProps extends ComponentProps<'button'> {
  /**
   * Sets button text.
   */
  children: string;
  /**
   * Sets button size.
   */
  size?: CommonSizes;
  /**
   * Sets button variant.
   */
  variant?: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      children,
      size = 'medium',
      variant = 'primary',
      ...remainingProps
    } = props;

    const baseClass = styles.button;
    const variantClass = styles[`button--${variant}`];
    const sizeClass = styles[`button--${size}`];
    const classes = `${baseClass} ${variantClass} ${sizeClass}`;

    return (
      <button ref={ref} className={classes} {...remainingProps}>
        {children}
      </button>
    );
  }
);
