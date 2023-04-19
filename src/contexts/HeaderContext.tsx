import React, { createContext, ReactNode, useState } from "react";

interface HeaderContextProps {
  children: ReactNode;
}

interface HeaderContextType {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderContext = createContext({} as HeaderContextType);

export const HeaderContextProvider = ({ children }: HeaderContextProps) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <HeaderContext.Provider value={{ setShowMenu, showMenu }}>
      {children}
    </HeaderContext.Provider>
  );
};
