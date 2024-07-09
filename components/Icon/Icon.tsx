import { ComponentProps, forwardRef } from 'react';
import styles from './Icon.module.css';
// import { CommonSizes } from '../utils';

interface IconProps extends ComponentProps<'span'> {
  /**
   * Sets icon.
   */
  children: string;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (props: IconProps, ref) => {
    const { children, ...remainingProps } = props;

    const baseClass = styles.icon;
    // const variantClass = styles[`button--${variant}`];
    // const sizeClass = styles[`button--${size}`];
    const classes = `material-symbols-outlined ${baseClass}`;

    return (
      <span ref={ref} className={classes} {...remainingProps}>
        {children}
      </span>
    );
  }
);
