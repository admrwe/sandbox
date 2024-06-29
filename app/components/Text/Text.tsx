import { forwardRef, HTMLAttributes } from 'react';

import style from './Text.module.css';

import { FontSizes, CSSMarginProps, getCssMarginPropsStyle } from '../utils';

interface TextProps extends CSSMarginProps, HTMLAttributes<HTMLDivElement> {
  /**
   * Sets text.
   */
  children: string;
  /**
   * Sets display type.
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
  (props: TextProps, ref) => {
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
    const sizeClass = style[`size-${size}`];

    return (
      <div
        style={{
          ...remainingProps.style,
          fontWeight: fontWeight,
          display,
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
        className={`${style.heading} ${sizeClass}`}
        ref={ref}
        {...remainingProps}
      >
        {children}
      </div>
    );
  }
);
