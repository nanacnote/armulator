import * as React from 'react';

interface TProps {}

/**
 * Debugger component
 */
const Debugger: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={thisComponent} className="m-4">
      <pre id="ace-ebugger-container" className="h-[473px] border"></pre>
    </div>
  );
};

export default Debugger;
