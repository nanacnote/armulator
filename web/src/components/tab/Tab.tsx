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

  const editorActivityHandler = (e: CustomEventInit) => {
    const children = thisComponent.current?.getElementsByClassName(
      'activity-icon-for-editor'
    ) as HTMLCollectionOf<HTMLSpanElement>;
    for (const child of children) {
      if (child.dataset.type == (e as any).type) {
        child.classList.remove('hidden');
      } else {
        child.classList.add('hidden');
      }
    }
  };

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
    on(type.TAB, visibleContentHandler);
    on(type.CODE, editorActivityHandler, {}, false);
    return () => {
      off(type.TAB, visibleContentHandler);
      off(type.CODE, editorActivityHandler);
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
        Editor &nbsp;
        <span
          className="activity-icon-for-editor indicator-item badge hidden"
          data-type={type.CODE}
        >
          <svg
            className="fill-current w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
          </svg>
        </span>
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
