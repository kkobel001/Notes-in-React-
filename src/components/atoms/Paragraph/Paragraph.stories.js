import React from 'react';
import Paragraph from './Paragraph';

export default {
  title: 'Components/Paragraph',
  component: Paragraph,
};

const Story = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Paragraph {...args} />
);

export const Normal = Story.bind({});
