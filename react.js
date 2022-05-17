export function createElement(type, config, ...children) {
  const props = {
    ...config,
  };

  props.children = children.map(child => typeof child === 'object' ? child : createTextElement(child));

  return {
    type,
    props,
  };
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  }
}
