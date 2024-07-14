import { ComponentProps, forwardRef } from 'react';
import styles from './Icon.module.css';

interface IconProps extends ComponentProps<'span'> {
  /**
   * Sets icon (https://fonts.google.com/icons).
   */
  children: string;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (props: IconProps, forwardedRef) => {
    const { children, ...remainingProps } = props;

    const classes = `material-symbols-outlined ${styles.icon}`;

    return (
      <span ref={forwardedRef} className={classes} {...remainingProps}>
        {children}
      </span>
    );
  }
);
