import React, { createContext, ReactNode, useState } from "react";
import { HeaderContextProvider } from "./HeaderContext";

interface ContextProps {
  children: ReactNode;
}

interface ContextType {}

export const GlobalContext = createContext({} as ContextType);

export const GlobalContextProvider = ({ children }: ContextProps) => {
  return (
    <GlobalContext.Provider value={{}}>
      <HeaderContextProvider>{children}</HeaderContextProvider>
    </GlobalContext.Provider>
  );
};
