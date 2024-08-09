import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import styles from './Text.module.css';
import { FontSizes, CSSMarginProps, getCssMarginPropsStyle } from '../utils';

interface TextProps extends CSSMarginProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Sets text.
   */
  children: ReactNode;
  /**
   * Sets display type.
   *
   * @default 'block'
   */
  display?: 'block' | 'inline';
  /**
   * Sets font size.
   *
   * @default '1-x'
   */
  size?: FontSizes;
  /**
   * Sets font weight.
   *
   * @default 'normal'
   */
  fontWeight?: 'bold' | 'normal';
}

export const Text = forwardRef<HTMLDivElement, TextProps>(
  (props: TextProps, forwardedRef) => {
    const {
      children,
      display = 'block',
      size = '1-x',
      fontWeight = 'normal',
      marginInlineStart,
      marginInlineEnd,
      marginInline,
      marginBlockStart,
      marginBlockEnd,
      marginBlock,
      margin,
      ...remainingProps
    } = props;

    return (
      <div
        ref={forwardedRef}
        className={styles.text}
        {...remainingProps}
        style={{
          ...remainingProps.style,
          display,
          fontWeight: fontWeight,
          fontSize: `var(--font-size-${size})`,
          ...getCssMarginPropsStyle({
            marginInlineStart,
            marginInlineEnd,
            marginInline,
            marginBlockStart,
            marginBlockEnd,
            marginBlock,
            margin,
          }),
        }}
      >
        {children}
      </div>
    );
  }
);
