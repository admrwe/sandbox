import { ComponentProps, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import styles from './Label.module.css';
import { CommonSizes } from '../utils';

interface LabelProps extends ComponentProps<'label'> {
  /**
   * Sets label text.
   */
  children: string;
  /**
   * Adds required label.
   *
   * @default false
   */
  required?: boolean;
  /**
   * Sets label size.
   *
   * @default 'medium'
   */
  size?: CommonSizes;
}

const labelStyles = cva(styles.label, {
  variants: {
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (props: LabelProps, forwardedRef) => {
    const {
      children,
      required = false,
      size = 'medium',
      className,
      ...remainingProps
    } = props;

    const baseClass = styles.label;
    const sizeClass = styles[`label--${size}`];
    const classes = `${baseClass} ${sizeClass}`;

    return (
      <label
        ref={forwardedRef}
        className={labelStyles({ size, className })}
        {...remainingProps}
      >
        {children}
        {required && <span>(Required)</span>}
      </label>
    );
  }
);
