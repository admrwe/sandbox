import { useId, ComponentProps, forwardRef } from 'react';
import styles from './Input.module.css';
import { CSSMarginProps, getCssMarginPropsStyle } from '../utils';
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
  size?: 'small' | 'medium' | 'large';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const {
      inputProps,
      invalid = false,
      label,
      placeholder,
      required = false,
      size = 'medium',
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

    const baseClass = styles.input;
    const sizeClass = styles[`input--${size}`];
    const invalidClass = styles[`input--invalid`];
    const classes = `${baseClass} ${sizeClass} ${invalid ? invalidClass : null}`;

    return (
      <div
        className={classes}
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
          ref={ref}
          id={inputId}
          {...inputProps}
          aria-invalid={invalid}
          aria-required={required}
          placeholder={placeholder}
        />
      </div>
    );
  }
);
