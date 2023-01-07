import * as React from 'react';

interface TProps {}

/**
 * Schematic component
 */
const Schematic: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);

  return <div ref={thisComponent}>..</div>;
};

export default Schematic;
