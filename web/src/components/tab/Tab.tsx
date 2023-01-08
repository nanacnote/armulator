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
  const { on, off, type } = useSession();

  const editorTabIndicatorHandler = (e: Event) => {
    const children = thisComponent.current?.getElementsByClassName(
      'indicator-item-for-editor'
    ) as HTMLCollectionOf<HTMLSpanElement>;
    for (const child of children) {
      if (child.dataset.type == e.type) {
        child.classList.remove('hidden');
      } else {
        child.classList.add('hidden');
      }
    }
  };

  const tabGroupHandler = (e: React.MouseEvent) => {
    const el = e.currentTarget as HTMLButtonElement;
    const parent = el.parentNode!;
    const children = parent.children as HTMLCollectionOf<HTMLButtonElement>;
    for (const child of children) {
      if (child.dataset.name == el.dataset.name) {
        child.classList.add('tab-active');
        onSelect(child.dataset.name!);
      } else {
        child.classList.remove('tab-active');
      }
    }
  };

  const editorTabHandler = (e: React.MouseEvent) => {
    tabGroupHandler(e);
  };

  const schematicTabHandler = (e: React.MouseEvent) => {
    tabGroupHandler(e);
  };

  const memoryTabHandler = (e: React.MouseEvent) => {
    tabGroupHandler(e);
  };

  React.useEffect(() => {
    on(type.UPLOAD, editorTabIndicatorHandler);
    return () => {
      off(type.UPLOAD, editorTabIndicatorHandler);
    };
  }, []);

  return (
    <div ref={thisComponent} className="tabs">
      <a
        className="tab tab-lifted"
        data-name="editor"
        onClick={editorTabHandler}
      >
        Editor &nbsp;
        <span
          className="indicator-item-for-editor indicator-item badge hidden"
          data-type={type.UPLOAD}
        >
          <svg
            className="fill-current w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM13 12v4h-2v-4H8l4-4 4 4h-3z" />
          </svg>
        </span>
      </a>
      <a
        className="tab tab-lifted"
        data-name="schematic"
        onClick={schematicTabHandler}
      >
        Schematic
      </a>
      <a
        className="tab tab-lifted tab-active"
        data-name="memory"
        onClick={memoryTabHandler}
      >
        Memory
      </a>
    </div>
  );
};

export default Tab;
