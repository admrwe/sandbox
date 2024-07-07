import { ComponentProps, forwardRef } from 'react';
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

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (props: LabelProps, ref) => {
    const {
      children,
      required = false,
      size = 'medium',
      ...remainingProps
    } = props;

    const baseClass = styles.label;
    const sizeClass = styles[`label--${size}`];
    const classes = `${baseClass} ${sizeClass}`;

    return (
      <label ref={ref} className={classes} {...remainingProps}>
        {children}
        {required && <span>(Required)</span>}
      </label>
    );
  }
);
