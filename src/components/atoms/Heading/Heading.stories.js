import React from 'react';
import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
};

/* eslint-disable react/jsx-props-no-spreading */
const Template = (args) => <Heading {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: 'Hello Roman ',
};

export const Big = Template.bind({});
Big.args = {
  label: 'Hello Roman ',
};
