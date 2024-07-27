'use client';

import { useState } from 'react';
import { ThemeProvider } from '../../components/ThemeProvider';
import { Calendar } from '../../components/Calendar';

export default function Home() {
  const [value, setValue] = useState<Date>();
  const handleOnDayClick = (date: Date) => {
    setValue(date);
    console.log(date);
  };

  return (
    <ThemeProvider>
      <Calendar value={value} onDayClick={handleOnDayClick} />
    </ThemeProvider>
  );
}
