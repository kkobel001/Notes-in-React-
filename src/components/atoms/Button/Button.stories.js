import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Story = (args) => <Button {...args} />;

export const Primary = Story.bind({});
Primary.args = {
  primary: true,
  label: 'Kasia',
  background: '#ff0',
};

export const Secondary = Story.bind({});
Secondary.args = {
  label: 'Button',
  text: 'Secondary',
  primary: false,
};
