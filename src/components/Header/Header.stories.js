import React from 'react';
import { Header } from './Header';

const story = {
  title: 'Header',
  component: Header,
};
export default story;

export const Default = () => (
  <Header>
    <span style={{ color: 'white' }}>I'm a header</span>
  </Header>
);
