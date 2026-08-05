import { createContext } from "react";

export type Theme =
  | "midnight"
  | "light"
  | "ocean"
  | "forest"
  | "crimson";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext =
  createContext<ThemeContextType | undefined>(undefined);