import { registerFormShema } from "@/components/Login/LoginForm";
import { useRouter } from "next/router";

import React, { ReactNode, createContext, useState } from "react";
import { z } from "zod";

interface LoginContextTypes {}

interface LoginContextProps {
  children: ReactNode;
}

export type RegisterFormData = z.infer<typeof registerFormShema>;

export const LoginContext = createContext({} as LoginContextTypes);

export const LoginContextProvider = ({ children }: LoginContextProps) => {
  return <LoginContext.Provider value={{}}>{children}</LoginContext.Provider>;
};
