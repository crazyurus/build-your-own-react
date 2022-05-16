import * as React from './react';
import * as ReactDom from './react-dom';

const element = React.createElement(
  'div',
  { id: 'foo' },
  React.createElement('div', null, 'bar'),
  React.createElement('input')
)

ReactDom.render(
  element,
  document.getElementById('root'),
);