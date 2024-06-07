import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../app/components/ThemeProvider";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
  },
  globalTypes: {
    theme: {
      description: "Choose theme.",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme;
      return (
        <ThemeProvider theme={theme}>
          <div
            style={{
              background: "rgb(var(--bg-primary))",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
              height: "100vh",
              overflow: "hidden",
              transition: "var(--animation-default)",
            }}>
            <Story />
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
