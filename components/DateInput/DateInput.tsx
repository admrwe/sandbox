import {
  ComponentProps,
  forwardRef,
  useState,
  useEffect,
  useRef,
  KeyboardEventHandler,
} from 'react';
import { getDaysInMonth } from 'date-fns';
import { cva } from 'class-variance-authority';
import styles from './DateInput.module.css';
import { CSSMarginProps, getCssMarginPropsStyle } from '../utils';

interface DateSpinButtonProps extends ComponentProps<'div'> {
  value: number;
  label: string | number;
  onValueChange: (value: number) => void;
}

const DateSpinButton = forwardRef<HTMLDivElement, DateSpinButtonProps>(
  (props: DateSpinButtonProps, forwardedRef) => {
    const { value, label, onValueChange, ...remainingProps } = props;

    // const [val, setVal] = useState(value);

    // useEffect(() => {
    //   setVal(value);
    //   console.log('value', value);
    //   console.log('val', val);
    // }, [value]);

    const handleOnKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
      if (event.key === 'ArrowUp') {
        onValueChange(value + 1);
      } else if (event.key === 'ArrowDown') {
        onValueChange(value - 1);
      }

      remainingProps.onKeyDown?.(event);

      // if (event.key === 'ArrowUp') {
      //   onValueChange(value + 1);
      // } else if (event.key === 'ArrowDown') {
      //   onValueChange(value - 1);
      // }

      // remainingProps.onKeyDown?.(event);
    };

    return (
      <div
        ref={forwardedRef}
        role="spinbutton"
        tabIndex={0}
        {...remainingProps}
        onKeyDown={handleOnKeyDown}
      >
        {label}
      </div>
    );
  }
);

interface DateInputProps extends CSSMarginProps, ComponentProps<'div'> {
  value: Date;
  onValueChange: (value: Date) => void;
}

const dateInputStyles = cva(styles['date-input'], {
  variants: {},
  defaultVariants: {},
});

export const DateInput = forwardRef<HTMLDivElement, DateInputProps>(
  (props: DateInputProps, forwardedRef) => {
    const {
      value = new Date(),
      onValueChange,
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

    const [month, setMonth] = useState(value.getMonth());
    const [day, setDay] = useState(value.getDate());
    const [year, setYear] = useState(value.getFullYear());

    const monthRef = useRef<HTMLDivElement>(null);
    const dayRef = useRef<HTMLDivElement>(null);
    const yearRef = useRef<HTMLDivElement>(null);

    const [daysInMonth, setDaysInMonth] = useState(
      new Date(year, month, 0).getDate()
    );

    if (day > daysInMonth) {
      setDay(daysInMonth);
    }

    const fieldRefs = [monthRef, dayRef, yearRef];
    const [activeFieldIndex, setActiveFieldIndex] = useState(0);

    const handleOnKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
      let newIndex = activeFieldIndex;

      if (event.key === 'ArrowRight') {
        newIndex = newIndex + 1;
      } else if (event.key === 'ArrowLeft') {
        newIndex = newIndex - 1;
      } else return;

      if (newIndex < 0) {
        setActiveFieldIndex(fieldRefs.length - 1);
      } else if (newIndex > fieldRefs.length - 1) {
        setActiveFieldIndex(0);
      } else {
        setActiveFieldIndex(newIndex);
      }

      fieldRefs[activeFieldIndex].current?.focus();
    };

    const handleMonthKeyDown: KeyboardEventHandler<HTMLDivElement> = (
      event
    ) => {
      // Detect if keypress is a number.
      // Space key also also returns true for isFinine(), so needs to be ignored.
      const isNumber = event.key !== ' ' && isFinite(Number(event.key));

      if (isNumber) {
        setMonth(Number(event.key));

        if (
          (month === 0 && Number(event.key) === 0) ||
          Number(event.key) === 1
        ) {
          setMonth(10 + Number(event.key));
        }
        // newVal = Number(event.key) - 1; // Account for month being 0 indexed

        // if (newVal === 0) {
        //   setMonth(0);
        // }
      }

      // setMonth(val);
    };

    useEffect(() => {
      fieldRefs[activeFieldIndex].current?.focus();
    }, [activeFieldIndex]);

    useEffect(() => {
      setDaysInMonth(getDaysInMonth(new Date(year, month)));
    }, [year, month]);

    useEffect(() => {
      onValueChange(new Date(year, month, day));
    }, [year, month, day]);

    return (
      <div
        ref={forwardedRef}
        className={dateInputStyles({ className })}
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
        onKeyDown={handleOnKeyDown}
        {...remainingProps}
      >
        <DateSpinButton
          ref={monthRef}
          aria-label="Month"
          value={month}
          label={month} // Account for 0 index
          onKeyDown={handleMonthKeyDown}
          onValueChange={(value) => {
            if (value > 11) {
              setMonth(0);
            } else if (value < 0) {
              setMonth(11);
            } else {
              setMonth(value);
            }
          }}
        />
        {/* <input
          type="number"
          value={month}
          min={0}
          max={11}
          onChange={(event) => setMonth(event.target.value)}
        /> */}
        <DateSpinButton
          ref={dayRef}
          aria-label="Day"
          value={day}
          label={day}
          onValueChange={(value) => {
            if (value > daysInMonth) {
              setDay(1);
            } else if (value < 1) {
              setDay(daysInMonth);
            } else {
              setDay(value);
            }
          }}
        />
        <DateSpinButton
          ref={yearRef}
          aria-label="Year"
          value={year}
          label={year}
          onValueChange={(value) => {
            setYear(value);
          }}
        />
      </div>
    );
  }
);
