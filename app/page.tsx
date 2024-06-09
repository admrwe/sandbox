import Image from 'next/image';
import styles from './page.module.css';
import { ThemeProvider } from './components/ThemeProvider';
import { Heading } from './components/Heading';

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <Heading size="5-x" marginBlockEnd="3-x">
          Size 5 x
        </Heading>
        <Heading size="3-x" marginBlockEnd="3-x">
          Size 3 x
        </Heading>
        <Heading size="2-x" marginBlockEnd="3-x">
          Size 2 x
        </Heading>
        <Heading size="1-and-half-x" marginBlockEnd="3-x">
          Size 1 and half x
        </Heading>
        <Heading size="1-and-eigth-x" marginBlockEnd="3-x">
          Size 1 and eigth x
        </Heading>
        <Heading size="1-x" marginBlockEnd="3-x">
          Size 1 x
        </Heading>
        <Heading size="three-quarter-x">Size three quarter x</Heading>
      </ThemeProvider>
    </div>
  );
}
