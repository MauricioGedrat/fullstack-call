import React, { createContext, ReactNode, useState } from "react";
import { HeaderContextProvider } from "./HeaderContext";
import { LoginContextProvider, RegisterFormData } from "./LoginContext";
import { useRouter } from "next/router";

interface ContextProps {
  children: ReactNode;
}

interface ContextType {
  handleRegisterData(data: RegisterFormData): Promise<void>;
}

export const GlobalContext = createContext({} as ContextType);

export const GlobalContextProvider = ({ children }: ContextProps) => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");

  async function handleRegisterData(data: RegisterFormData) {
    await setUsername(data.username);
    await router.push(`/register?username=${data.username}`);
  }
  return (
    <GlobalContext.Provider value={{ handleRegisterData }}>
      <LoginContextProvider>
        <HeaderContextProvider>{children}</HeaderContextProvider>
      </LoginContextProvider>
    </GlobalContext.Provider>
  );
};
