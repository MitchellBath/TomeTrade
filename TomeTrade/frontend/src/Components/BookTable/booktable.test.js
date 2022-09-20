import React from 'react';
import ReactDOM from 'react-dom';
import TempTable from './temptable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TempTable/>, div);
});