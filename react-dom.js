const excludeProps = ['children'];

export function render(element, container) {
  const { type, props } = element;
  const dom = type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(type);

  if (props.children) {
    props.children.forEach(child => {
      render(child, dom);
    });
  }

  Object.keys(props).filter(key => !key.includes(excludeProps)).forEach(name => {
    dom[name] = props[name];
  });

  container.appendChild(dom);
}