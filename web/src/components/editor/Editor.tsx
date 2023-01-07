import * as React from 'react';

interface TProps {}

/**
 * Editor component
 */
const Editor: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);

  return <div ref={thisComponent}>.</div>;
};

export default Editor;
