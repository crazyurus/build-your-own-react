import * as React from './react';
import * as ReactDom from './react-dom';

function App(props) {
  return React.createElement('h1', null, 'Hello, ', props.name, '!');
}

const element = React.createElement(
  'div',
  { id: 'foo' },
  React.createElement('div', null, 'bar'),
  React.createElement('input'),
  React.createElement(App, {
    name: 'React',
  }),
)

ReactDom.render(
  element,
  document.getElementById('root'),
);