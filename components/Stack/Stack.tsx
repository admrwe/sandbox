import { ReactNode, ComponentProps, forwardRef } from 'react';
import styles from './Stack.module.css';
import { Spaces } from '../utils';
import { CSSMarginProps, getCssMarginPropsStyle } from '../utils';

interface StackProps extends CSSMarginProps, ComponentProps<'div'> {
  /**
   * Sets alignment along chosen direction.
   */
  alignment?: 'start' | 'end' | 'center';
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
  (props: StackProps, forwardedRef) => {
    const {
      alignment = 'start',
      children,
      direction = 'column',
      space = '1-x',
      wrap,
      marginInlineStart,
      marginInlineEnd,
      marginInline,
      marginBlockStart,
      marginBlockEnd,
      marginBlock,
      margin,
      className,
      ...remainingProps
    } = props;

    const getAlignment = (alignment: string) => {
      switch (alignment) {
        case 'start':
          return 'flex-start';
        case 'center':
          return 'center';
        case 'end':
          return 'flex-end';
      }
    };

    return (
      <div
        ref={forwardedRef}
        className={styles.stack}
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
          flexDirection: direction,
          gap: `var(--space-${space})`,
          flexWrap: wrap ? 'wrap' : 'nowrap',
          justifyContent: getAlignment(alignment),
        }}
      >
        {children}
      </div>
    );
  }
);
