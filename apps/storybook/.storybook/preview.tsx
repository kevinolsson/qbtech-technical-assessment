import React from 'react';
import type { Preview } from '@storybook/react';
import 'ui/globals.css';


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
  },
  decorators: [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>],
};

export default preview;
