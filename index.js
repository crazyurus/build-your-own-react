import * as React from './react';
import * as ReactDom from './react-dom';

function App(props) {
  return React.createElement('h1', null, 'Hello, ', props.name, '!');
}

function Counter() {
  const [state, setState] = React.useState(1);

  return React.createElement('div', {
    onClick() {
      setState(c => c + 1);
    },
  }, 'count: ', state);
}

const element = React.createElement(
  'div',
  { id: 'foo' },
  React.createElement('div', null, 'bar'),
  React.createElement('input'),
  React.createElement(App, {
    name: 'React',
  }),
  React.createElement(Counter),
)

ReactDom.render(
  element,
  document.getElementById('root'),
);