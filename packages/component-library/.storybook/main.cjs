module.exports = {
  'stories': [
    '../*/src/component/**/**.stories.mdx',
    '../*/src/component/**/**.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-vite'
  },
  'features': {
    'storyStoreV7': true
  }
};
