module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  // addons: ['@storybook/addon-knobs'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs',
  ],
};
