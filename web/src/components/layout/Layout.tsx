import * as React from 'react';

interface TProps {
  header: JSX.Element;
  body: JSX.Element | string;
  footer: JSX.Element | string;
}

/**
 * Layout component
 *
 * @property JSX.Element
 * @property JSX.Element
 * @property JSX.Element
 */
const Layout: React.FC<TProps> = ({ header, body, footer }): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={thisComponent}>
      {header}
      {body}
      {footer}
    </div>
  );
};

export default Layout;
