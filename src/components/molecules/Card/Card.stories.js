/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import Card from 'components/molecules/Card/Card';

export default {
  title: 'Molecules/Card',
  component: Card,
};

export const Primary = () => (
  <Card cardType="note">.</Card>
);

export const Secondary = () => (
  <Card cardType="twitter">.</Card>
);
export const Tertiary = () => (
  <Card cardType="article">.</Card>
);
