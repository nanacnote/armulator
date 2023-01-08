import * as React from 'react';
import { Editor, Schematic, Memory, Tab } from '..';

interface TProps {}

/**
 * Body component
 *
 */
const Body: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = React.useState('memory');

  const content: any = {
    editor: <Editor />,
    schematic: <Schematic />,
    memory: <Memory />
  };

  const selectHandler = (val: string) => {
    setSelectedTab(val);
  };

  return (
    <div ref={thisComponent} className="my-4">
      <Tab onSelect={selectHandler} />
      <div className="min-h-[410px]">{content[selectedTab]}</div>
    </div>
  );
};

export default Body;
