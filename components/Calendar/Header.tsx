import { ComponentProps, forwardRef, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import styles from './Calendar.module.css';
import { format } from 'date-fns';
// import { CommonSizes, CSSMarginProps, getCssMarginPropsStyle } from '../utils';

import { Button } from '../Button';
import { Text } from '../Text';
import { Stack } from '../Stack';
import { Icon } from '../Icon';

interface HeaderProps extends ComponentProps<'div'> {
  children?: ReactNode;
  onPrevMonthClick: () => void;
  onNextMonthClick: () => void;
  onPrevYearClick: () => void;
  onNextYearClick: () => void;
  shownMonth: Date;
}

const headerStyles = cva(styles.header);

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  (props: HeaderProps, forwardedRef) => {
    const {
      onPrevMonthClick,
      onNextMonthClick,
      onPrevYearClick,
      onNextYearClick,
      shownMonth,
      ...remainingProps
    } = props;

    return (
      <Stack
        ref={forwardedRef}
        className={headerStyles()}
        direction="row"
        space="half-x"
        marginBlockEnd="1-x"
        style={{ alignItems: 'center' }}
        {...remainingProps}
      >
        <Button
          iconOnly
          variant="tertiary"
          onClick={onPrevYearClick}
          aria-label="Previous Year"
        >
          <Icon>keyboard_double_arrow_left</Icon>
        </Button>
        <Button
          iconOnly
          variant="tertiary"
          onClick={onPrevMonthClick}
          aria-label="Previous Month"
        >
          <Icon>keyboard_arrow_left</Icon>
        </Button>
        <Text
          display="inline"
          fontWeight="bold"
          style={{ flexGrow: 1, textAlign: 'center' }}
        >
          {format(shownMonth, 'LLL yyyy')}
        </Text>
        <Button
          iconOnly
          variant="tertiary"
          onClick={onNextMonthClick}
          aria-label="Next Month"
        >
          <Icon>keyboard_arrow_right</Icon>
        </Button>
        <Button
          iconOnly
          variant="tertiary"
          onClick={onNextYearClick}
          aria-label="Next Year"
        >
          <Icon>keyboard_double_arrow_right</Icon>
        </Button>
      </Stack>
    );
  }
);
