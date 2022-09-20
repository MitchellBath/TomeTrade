import React from 'react';
import ReactDOM from 'react-dom';
import CustomInput from './input';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomInput/>, div);
});