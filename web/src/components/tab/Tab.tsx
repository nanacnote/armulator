import * as React from 'react';
import { useSession } from '../../hooks';

interface TProps {
  onSelect(val: string): void;
}

/**
 * Tab component
 *
 */
const Tab: React.FC<TProps> = ({ onSelect }): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const { type, on, off, getSelectedTab, setSelectedTab } = useSession();

  const tabSelectionHandler = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLButtonElement;
    const parent = el.parentNode!;
    const children = parent.children as HTMLCollectionOf<HTMLButtonElement>;
    for (const child of children) {
      if (child.dataset.name == el.dataset.name) {
        child.classList.add('tab-active');
        setSelectedTab(child.dataset.name);
      } else {
        child.classList.remove('tab-active');
      }
    }
  };

  const visibleContentHandler = (e: CustomEventInit) => {
    onSelect(e.detail);
  };

  React.useEffect(() => {
    on(type.TAB_CHANGE, visibleContentHandler);
    return () => {
      off(type.TAB_CHANGE, visibleContentHandler);
    };
  }, []);

  return (
    <div ref={thisComponent} className="tabs">
      <a
        className={`tab tab-lifted ${
          getSelectedTab() === 'editor' ? 'tab-active' : ''
        }`}
        data-name="editor"
        onClick={tabSelectionHandler}
      >
        Editor
      </a>
      <a
        className={`tab tab-lifted ${
          getSelectedTab() === 'memory' ? 'tab-active' : ''
        }`}
        data-name="memory"
        onClick={tabSelectionHandler}
      >
        Memory
      </a>
      <a
        className={`tab tab-lifted ${
          getSelectedTab() === 'debugger' ? 'tab-active' : ''
        }`}
        data-name="debugger"
        onClick={tabSelectionHandler}
      >
        Debugger
      </a>
      <a
        className={`tab tab-lifted ${
          getSelectedTab() === 'schematic' ? 'tab-active' : ''
        }`}
        data-name="schematic"
        onClick={tabSelectionHandler}
      >
        Schematic
      </a>
    </div>
  );
};

export default Tab;
