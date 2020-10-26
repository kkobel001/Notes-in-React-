import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Story = (args) => <Input {...args} />;

export const Normal = Story.bind({});
Normal.args = {
  placeholder: 'login',
};

export const Search = Story.bind({});
Search.args = {
  placeholder: 'Search',
};
