// src/shared/providers/ThemeProvider.tsx
import { createContext, useContext } from "react";
import { useThemeState } from "../hooks/useThemeState";

const ThemeContext = createContext<
  ReturnType<typeof useThemeState> | undefined
>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useThemeState();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe usarse dentro de un ThemeProvider");
  }
  return context;
};
