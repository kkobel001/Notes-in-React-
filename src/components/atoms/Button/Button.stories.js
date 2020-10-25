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
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Kasia',
  background: 'white',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  text: 'Secondary',
};

// export const Primary = Template.bind() => (
//   <Button> Primary Button </Button>
// );
// export const Secondary = () => (
//   <Button> Hello KAsia </Button>
// );
