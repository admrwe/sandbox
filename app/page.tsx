import styles from './page.module.css';
import { ThemeProvider } from '../components/ThemeProvider';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { Stack } from '../components/Stack';

export default function Home() {
  return (
    <ThemeProvider theme="dark">
      <div className={styles['content-container']}>
        <Stack>
          <Heading fontWeight="bold">Sandbox ✐✏︎✎</Heading>
          <Text>
            <a href="#">Storybook</a>
          </Text>
        </Stack>
      </div>
    </ThemeProvider>
  );
}
