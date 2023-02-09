import * as React from 'react';
import { useSession } from '../../hooks';
import { TAB_NAMES } from '../../lib/helper/def';

interface TProps {}

/**
 * Tab component
 *
 */
const Tab: React.FC<TProps> = (): JSX.Element => {
  const thisComponent = React.useRef<HTMLDivElement>(null);
  const { type, on, off, setSelectedTab } = useSession();

  const tabChangeHandler = (e: CustomEventInit) => {
    const children = thisComponent.current?.getElementsByClassName(
      'anchor-item-for-tab'
    ) as HTMLCollectionOf<HTMLButtonElement>;
    for (const child of children) {
      if (child.dataset.name === e.detail) {
        child.classList.add('tab-active', 'polka-dot-bg');
      } else {
        child.classList.remove('tab-active', 'polka-dot-bg');
      }
    }
  };

  const tabSelectionHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setSelectedTab(e.currentTarget.dataset.name);
  };

  React.useEffect(() => {
    on(type.TAB_CHANGE, tabChangeHandler);
    return () => {
      off(type.TAB_CHANGE, tabChangeHandler);
    };
  }, []);

  return (
    <div ref={thisComponent}>
      <div className="flex">
        <div className="tabs">
          {TAB_NAMES.map((item) => (
            <a
              key={item}
              className="anchor-item-for-tab tab tab-lifted"
              data-name={item}
              onClick={tabSelectionHandler}
            >
              {item}
            </a>
          ))}
          <a className="tab tab-lifted"></a>
        </div>
        <div className="flex-1 border-b border-base-300"></div>
      </div>
    </div>
  );
};

export default Tab;
