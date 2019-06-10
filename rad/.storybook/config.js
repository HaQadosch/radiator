import { configure, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const newViewports = {
  desktop: {
    name: 'Desktop 1440x1024',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
};

addParameters({ viewport: { viewports: { ...INITIAL_VIEWPORTS, ...newViewports } } });

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
