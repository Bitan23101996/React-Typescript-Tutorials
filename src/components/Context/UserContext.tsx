import { createContext, useState } from "react";

export type AuthUser = {
  email: string;
  name: string;
};
type UserContextProps = {
  children: React.ReactNode;
};

type UserContextProviderProps = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
export const UserContext = createContext({} as UserContextProviderProps);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
