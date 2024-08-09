import { ComponentProps, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import styles from './Textarea.module.css';
import { CommonSizes, CSSMarginProps, getCssMarginPropsStyle } from '../utils';

interface TextareaProps extends CSSMarginProps, ComponentProps<'textarea'> {
  /**
   * Prop description.
   */
  defaultValue?: string;
  value?: string;

  /**
   * Sets the textarea to invalid.
   *
   * @default false
   */
  invalid?: boolean;

  /**
   * Sets the textarea size.
   *
   * @default 'medium'
   */
  size?: CommonSizes;
}

const textareaStyles = cva(styles.textarea, {
  variants: {
    invalid: {
      true: styles.invalid,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
  },
  defaultVariants: {
    invalid: false,
    size: 'medium',
  },
});

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props: TextareaProps, forwardedRef) => {
    const {
      defaultValue,
      value,
      invalid,
      size,
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

    return (
      <textarea
        ref={forwardedRef}
        className={textareaStyles({ invalid, size, className })}
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
        }}
        defaultValue={defaultValue}
        value={value}
        {...remainingProps}
      />
    );
  }
);
