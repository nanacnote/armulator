import * as React from 'react';
import { Editor, Schematic, Memory, Tab, Debugger } from '..';
import { useSession } from '../../hooks';
import { TAB_NAMES } from '../../utils/def';

interface TProps {}

/**
 * Body component
 *
 */
const Body: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const { type, on, off, getSelectedTab } = useSession();
  const [selectedTab, setSelectedTab] = React.useState(getSelectedTab());

  const generateComponent = () => {
    const Component: any = {
      [TAB_NAMES[0]]: Editor,
      [TAB_NAMES[1]]: Debugger,
      [TAB_NAMES[2]]: Memory,
      [TAB_NAMES[3]]: Schematic
    };
    return React.createElement(Component[selectedTab!]);
  };

  const tabChangeHandler = (e: CustomEventInit) => {
    setSelectedTab(e.detail);
  };

  React.useEffect(() => {
    on(type.TAB_CHANGE, tabChangeHandler);
    return () => {
      off(type.TAB_CHANGE, tabChangeHandler);
    };
  }, []);

  return (
    <div ref={thisComponent} className="my-4">
      <Tab />
      <div className="min-h-[410px] border-l border-b border-r border-base-300 rounded-b polka-dot-bg">
        {generateComponent()}
      </div>
    </div>
  );
};

export default Body;
