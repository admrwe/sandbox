import { ReactNode, ComponentProps, forwardRef } from 'react';
import styles from './Stack.module.css';
import { Spaces } from '../utils';

interface StackProps extends ComponentProps<'div'> {
  /**
   * Pass content to the stack.
   */
  children: ReactNode;
  /**
   * Sets direction of the stack.
   */
  direction?: 'row' | 'column';
  /**
   * Sets the space between stack items.
   */
  space?: Spaces;
  /**
   * Allows items in the stack to wrap.
   */
  wrap?: boolean;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (props: StackProps, ref) => {
    const {
      children,
      direction = 'column',
      space = '1-x',
      wrap,
      //   size = 'medium',
      //   variant = 'primary',
      ...remainingProps
    } = props;

    const baseClass = styles.stack;
    // const variantClass = styles[`button--${variant}`];
    // const sizeClass = styles[`button--${size}`];
    // const classes = `${baseClass} ${variantClass} ${sizeClass}`;
    const classes = `${baseClass}`;

    return (
      <div
        ref={ref}
        className={classes}
        style={{
          ...remainingProps.style,
          flexDirection: direction,
          gap: `var(--space-${space})`,
          flexWrap: wrap ? 'wrap' : 'nowrap',
        }}
        {...remainingProps}
      >
        {children}
      </div>
    );
  }
);
