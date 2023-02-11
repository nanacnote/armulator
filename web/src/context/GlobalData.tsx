import * as React from 'react';
import { LandingLoader } from '../components';

export const GlobalDataContext = React.createContext<any>(undefined);

export const GlobalData: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [store, setStore] = React.useState<any>({ editorLogs: [] });

  const updateStore = (entry: any) => {
    setStore((prev: any) => ({ ...prev, ...entry }));
  };
  const addEditorLog = (...payload: any) => {
    setStore((prev: any) => ({
      ...prev,
      editorLogs: [...prev.editorLogs, ...payload]
    }));
  };

  return (
    <GlobalDataContext.Provider
      value={{
        store,
        updateStore,
        addEditorLog
      }}
    >
      <LandingLoader>{children}</LandingLoader>
    </GlobalDataContext.Provider>
  );
};
