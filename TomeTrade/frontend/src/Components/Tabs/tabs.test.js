import React from 'react';
import ReactDOM from 'react-dom';
import TabPanel from './tabs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabPanel/>, div);
});