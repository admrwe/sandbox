import { useId, ComponentProps, forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import styles from './Input.module.css';
import { CommonSizes, CSSMarginProps, getCssMarginPropsStyle } from '../utils';

// Internal components
import { Label } from '../Label';

interface InputProps extends CSSMarginProps, ComponentProps<'div'> {
  /**
   * Props to pass to the internal input element.
   */
  inputProps?: ComponentProps<'input'>;

  /**
   * Sets the input to invalid.
   *
   * @default false
   */
  invalid?: boolean;

  /**
   * Label for the input.
   */
  label: string;

  /**
   * Placeholder for the input.
   */
  placeholder?: string;

  /**
   * Sets the input to required.
   *
   * @default false
   */
  required?: boolean;

  /**
   * Sets the input size.
   *
   * @default 'medium'
   */
  size?: CommonSizes;
}

const inputStyles = cva(styles.input, {
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

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, forwardedRef) => {
    const {
      inputProps,
      invalid = false,
      label,
      placeholder,
      required = false,
      size = 'medium',
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
    const inputId = useId();

    return (
      <div
        className={inputStyles({ invalid, size, className })}
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
        {...remainingProps}
      >
        <Label htmlFor={inputId} required={required} size={size}>
          {label}
        </Label>
        <input
          ref={forwardedRef}
          {...inputProps}
          id={inputId}
          aria-invalid={invalid}
          aria-required={required}
          placeholder={placeholder}
        />
      </div>
    );
  }
);
