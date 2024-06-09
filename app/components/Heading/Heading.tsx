import { JSX, forwardRef, HTMLAttributes } from 'react';

import style from './Heading.module.css';

import { FontSizes, CSSMarginProps, getCssMarginPropsStyle } from '../utils';

interface HeadingProps
  extends CSSMarginProps,
    HTMLAttributes<HTMLHeadingElement> {
  /**
   * Sets HTML heading level, i.e. h2.
   *
   * @default 2
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Sets heading text.
   */
  children: string;
  /**
   * Sets font size.
   *
   * @default '2-x'
   */
  size?: FontSizes;
  /**
   * Sets font weight.
   *
   * @default 'normal'
   */
  fontWeight?: 'bold' | 'normal';
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props: HeadingProps, ref) => {
    const {
      children,
      level = 2,
      size = '2-x',
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
    const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`;
    const sizeClass = style[`size-${size}`];

    return (
      <HeadingTag
        style={{
          ...remainingProps.style,
          fontWeight: fontWeight,
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
      </HeadingTag>
    );
  }
);
