'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { User, UserRole } from "@/types";
import { getLocalItem, initMockData } from "@/lib/mockData";

type AuthContextType = {
  currentUser: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 第一次載入初始化mock資料
    if (!localStorage.getItem("users")) {
      initMockData();
    }
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) setCurrentUser(JSON.parse(savedUser));
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string): boolean => {
    const users: User[] = getLocalItem("users");
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      setCurrentUser(foundUser);
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must use within AuthProvider");
  return ctx;
};
