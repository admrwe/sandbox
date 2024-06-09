import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../app/components/ThemeProvider';

import './styles.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
  },
  globalTypes: {
    theme: {
      description: 'Choose theme.',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'light-sepia', 'dark'],
      },
    },
    density: {
      description: 'Display density.',
      defaultValue: 'default',
      toolbar: {
        title: 'Density',
        icon: 'circlehollow',
        items: ['default', 'dense'],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      const dense = context.globals.density === 'dense';

      return (
        <ThemeProvider theme={theme} dense={dense}>
          <div className="sb-preview">
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
