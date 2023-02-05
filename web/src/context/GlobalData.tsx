import * as React from 'react';
import cn from 'classnames';

export const GlobalDataContext = React.createContext<any>(undefined);

export const GlobalData: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadPercentage, setLoadPercentage] = React.useState(0);
  const [store, setStore] = React.useState<any>({});

  const updateStore = (entry: any) => {
    setStore((prev: any) => ({ ...prev, ...entry }));
  };

  const loadProgressHandler = () => {
    let curPercentage = 0;
    setLoadPercentage((prev) => {
      if (prev < 100) {
        curPercentage = prev + 1;
      } else {
        curPercentage = 100;
      }
      return curPercentage;
    });
    if (curPercentage < 100) {
      requestAnimationFrame(loadProgressHandler);
    } else {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    requestAnimationFrame(loadProgressHandler);
    return () => {};
  }, []);

  return (
    <GlobalDataContext.Provider
      value={{
        store,
        updateStore
      }}
    >
      <div
        className={cn('h-screen flex justify-center items-center', {
          hidden: !isLoading
        })}
      >
        <div
          className="radial-progress"
          style={{
            // @ts-ignore:
            '--value': loadPercentage,
            '--size': '12rem',
            '--thickness': '2rem'
          }}
        >
          <span className="text-2xl font-black">{`${loadPercentage}%`}</span>
        </div>
      </div>
      <div className={cn({ hidden: isLoading })}>{children}</div>
    </GlobalDataContext.Provider>
  );
};
