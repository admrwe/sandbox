import { JSX, forwardRef, HTMLAttributes } from 'react';

import style from './Heading.module.css';

import { FontSizes, CommonCSSProps, getCommonCssPropStyles } from '../utils';

interface HeadingProps
  extends CommonCSSProps,
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
      ...remainingProps
    } = props;
    const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`;
    const sizeClass = style[`size-${size}`];

    return (
      <HeadingTag
        style={{
          fontWeight: fontWeight,
          ...getCommonCssPropStyles(remainingProps),
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
