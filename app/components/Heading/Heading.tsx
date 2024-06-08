import { JSX, forwardRef, HTMLAttributes } from 'react'

import style from './Heading.module.css'

type HeadingSizes =
  | 'three-quarter-x'
  | '1-x'
  | '1-and-eigth-x'
  | '1-and-half-x'
  | '2-x'
  | '3-x'
  | '5-x'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Sets HTML heading level, i.e. h2.
   *
   * @default 2
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6
  /**
   * Sets heading text.
   */
  children: string
  /**
   * Sets font size.
   *
   * @default "2-x"
   */
  size?: HeadingSizes
  /**
   * Sets font weight.
   *
   * @default "normal"
   */
  weight?: 'bold' | 'normal'
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (props: HeadingProps, ref) => {
    const {
      children,
      level = 2,
      size = '2-x',
      weight = 'normal',
      ...remainingProps
    } = props
    const HeadingTag: keyof JSX.IntrinsicElements = `h${level}`
    const sizeStyle = style[`size-${size}`]

    return (
      <HeadingTag
        style={{ fontWeight: weight }}
        className={`${style.heading} ${sizeStyle}`}
        ref={ref}
        {...remainingProps}
      >
        {children}
      </HeadingTag>
    )
  }
)
