import * as React from 'react';

interface TProps {}

/**
 * Layout component
 */
const Layout: React.FC<React.PropsWithChildren<TProps>> = ({
  children
}): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);

  return <div ref={thisComponent}>{children}</div>;
};

export default Layout;
