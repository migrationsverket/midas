// + import '../src/index.css';

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subtitle,
  Title,
} from '@storybook/blocks';
import React from 'react';
import { customViewports } from './custom-viewports';

export const autoDocsTemplate = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <Controls />
    <Stories />
  </>
);
/** @type { import('@storybook/react').Preview } */
const backup_preview = {
  parameters: {
    // a11y: {},
    // actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'Light',
      values: [
        { name: 'Light', value: 'white' },
        { name: 'Dark', value: 'darkgrey' },
        { name: 'Pink', value: 'pink' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: autoDocsTemplate(),
    viewport: {
      viewports: customViewports,
    },
  },
};

export default backup_preview;
