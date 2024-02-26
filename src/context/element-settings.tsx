'use client';

import { createContext, ReactNode, useContext, useMemo } from 'react';

interface ElementSettingsProps {
  children: ReactNode;
}

interface ElementSettingsContextProps {}

export type ElementSettingsMethods = {};

const ElementSettingsContext = createContext<ElementSettingsContextProps>({});

export const ElementSettingsProvider = ({ children }: ElementSettingsProps) => {
  const values: ElementSettingsContextProps = {};

  const methods = useMemo<ElementSettingsMethods>(() => ({}), []);

  return (
    <ElementSettingsContext.Provider value={values}>
      {children}
    </ElementSettingsContext.Provider>
  );
};

export const useElementSettings = () => useContext(ElementSettingsContext);
