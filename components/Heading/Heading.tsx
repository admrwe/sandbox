import { JSX, forwardRef, HTMLAttributes, ComponentProps } from 'react';
import styles from './Heading.module.css';
import { FontSizes, CSSMarginProps, getCssMarginPropsStyle } from '../utils';

interface HeadingProps extends CSSMarginProps, ComponentProps<'h1'> {
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
  (props: HeadingProps, forwardedRef) => {
    const {
      children,
      fontWeight = 'normal',
      level = 2,
      size = '2-x',
      className,
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

    return (
      <HeadingTag
        ref={forwardedRef}
        className={styles.heading}
        style={{
          ...remainingProps.style,
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
        {...remainingProps}
      >
        {children}
      </HeadingTag>
    );
  }
);
