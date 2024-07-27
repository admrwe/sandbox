import {
  ComponentProps,
  forwardRef,
  useState,
  useEffect,
  useRef,
  KeyboardEventHandler,
} from 'react';
import { cva } from 'class-variance-authority';
import styles from './Calendar.module.css';
import {
  startOfMonth,
  endOfMonth,
  setDate,
  isToday,
  sub,
  add,
  format,
  getDaysInMonth,
} from 'date-fns';

import { Header } from './Header';
import { Day } from './Day';
import { Text } from '../Text';

interface CalendarProps extends ComponentProps<'div'> {
  value?: Date;
  month?: Date;
  onDayClick: (date: Date) => void;
}

const calendarStyles = cva(styles.calendar, {
  variants: {},
  defaultVariants: {},
});

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (props: CalendarProps, forwardedRef) => {
    const {
      month = new Date(),
      onDayClick,
      value = undefined,
      className,
      ...remainingProps
    } = props;

    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    const daysRef = useRef<HTMLDivElement>(null);
    const [shownMonth, setShownMonth] = useState<Date>(month);

    const currentMonth = shownMonth.getMonth() + 1;
    const currentYear = shownMonth.getFullYear();
    const currentDay = shownMonth.getDate();
    const daysInCurrentMonth = getDaysInMonth(shownMonth);
    const daysInPrevMonth = getDaysInMonth(sub(shownMonth, { months: 1 }));
    const monthStartPad = startOfMonth(shownMonth).getDay(); // Empty days at start of month
    const monthEndPad = 6 - endOfMonth(shownMonth).getDay(); // Empty days at end of month

    const activeDayString = `${currentYear}-${currentMonth}-${currentDay}`;
    const [activeDay, setActiveDay] = useState<string | undefined>(
      activeDayString
    );
    const [activeDesc, setActiveDesc] = useState<string>(activeDayString);
    const [activeDescDay, setActiveDescDay] = useState<number>(currentDay);
    const [focusVisible, setFocusVisible] = useState<boolean>(false);

    const prevMonth = () => setShownMonth(sub(shownMonth, { months: 1 }));
    const nextMonth = () => setShownMonth(add(shownMonth, { months: 1 }));
    const prevYear = () => setShownMonth(sub(shownMonth, { years: 1 }));
    const nextYear = () => setShownMonth(add(shownMonth, { years: 1 }));

    useEffect(() => {
      setActiveDesc(`${currentYear}-${currentMonth}-${activeDescDay}`);
    }, [activeDescDay]);

    const handleOnKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
      setFocusVisible(true);
      let newDay;

      switch (event.key) {
        case 'ArrowRight':
          newDay = activeDescDay + 1;
          if (newDay > daysInCurrentMonth) {
            nextMonth();
            setActiveDescDay(1);
            break;
          }
          setActiveDescDay(newDay);
          break;
        case 'ArrowLeft':
          newDay = activeDescDay - 1;
          if (newDay < 1) {
            prevMonth();
            setActiveDescDay(daysInPrevMonth);
            break;
          }
          setActiveDescDay(newDay);
          break;
        case 'ArrowUp':
          newDay = activeDescDay - 7;
          if (newDay < 1) {
            prevMonth();
            setActiveDescDay(daysInPrevMonth + newDay); // Calc day in prev month
            break;
          }
          setActiveDescDay(newDay);
          break;
        case 'ArrowDown':
          newDay = activeDescDay + 7;
          if (newDay > daysInCurrentMonth) {
            nextMonth();
            newDay = newDay - daysInCurrentMonth; // Calc day in next month
            setActiveDescDay(newDay === 0 ? 1 : newDay);
            break;
          }
          setActiveDescDay(newDay);
          break;
        case 'Enter':
          setActiveDay(activeDesc);
          onDayClick(setDate(activeDesc, activeDescDay));
          break;
      }
    };

    const handleOnBlur = () => {
      setFocusVisible(false);
    };

    const handleOnFocus = () => {
      setFocusVisible(true);
    };

    return (
      <div
        ref={forwardedRef}
        className={calendarStyles({ className })}
        style={{
          ...remainingProps.style,
        }}
        {...remainingProps}
      >
        <Header
          shownMonth={shownMonth}
          onPrevYearClick={prevYear}
          onPrevMonthClick={prevMonth}
          onNextMonthClick={nextMonth}
          onNextYearClick={nextYear}
        />
        <div
          ref={daysRef}
          className={styles.days}
          tabIndex={0}
          aria-activedescendant={activeDesc}
          onKeyDown={handleOnKeyDown}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
        >
          {/* Days of the week (M, T, W, etc.) */}
          {Array.from(daysOfWeek).map((day, i) => (
            <Text
              key={i}
              size="three-quarter-x"
              style={{ textAlign: 'center' }}
            >
              {day}
            </Text>
          ))}

          {/* Month start empty day padding */}
          {Array.from({ length: monthStartPad }).map((_, i) => (
            <Day key={i} disabled />
          ))}

          {/* Days of the month */}
          {Array.from({ length: daysInCurrentMonth }).map((_, i) => {
            const dayNumber = i + 1;
            const date = setDate(shownMonth, dayNumber);
            const id = format(shownMonth, `yyyy-L-${dayNumber}`);
            const today = isToday(date);
            const active = id === activeDay;
            const isFocused = id === activeDesc;

            return (
              <Day
                key={i}
                id={id}
                aria-label={format(date, 'EEEE, LLLL do, y')}
                tabIndex={-1}
                onClick={(e) => {
                  e.preventDefault();
                  daysRef.current?.focus();
                  onDayClick(date);
                  setActiveDescDay(dayNumber);
                  setActiveDay(id);
                }}
                today={today}
                active={active}
                aria-pressed={active}
                className={
                  focusVisible && isFocused ? styles.focused : undefined
                }
              >
                {dayNumber}
              </Day>
            );
          })}

          {/* Month end empty day padding */}
          {Array.from({ length: monthEndPad }).map((_, i) => (
            <Day key={i} disabled />
          ))}
        </div>
      </div>
    );
  }
);
