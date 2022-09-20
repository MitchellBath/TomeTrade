import React from 'react';
import ReactDOM from 'react-dom';
import AddBook from './addbook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddBook/>, div);
});