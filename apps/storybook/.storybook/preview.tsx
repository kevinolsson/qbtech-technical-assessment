import React from 'react';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import 'ui/globals.css';
import "ui/style.css";


const ThemeWrapper = (props: { children: React.ReactNode }) => {
  return (
    <>
      {props.children}
    </>
  );
};

const preview: Preview = {
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'reset',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      stylePreview: true,
      classTarget: "div#storybook-root",
      darkClass: "dark",
      lightClass: "light",
      dark: { ...themes.dark },
      light: { ...themes.light }
    }
  },
  decorators: [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>],
};

export default preview;
