import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  createElement,
} from 'react';
import type { ColorMode, ThemeName } from '../types';

export interface ThemeContextValue {
  colorMode: ColorMode;
  theme: ThemeName;
  setColorMode: (mode: ColorMode) => void;
  setTheme: (theme: ThemeName) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_MODE_KEY = 'bingo-color-mode';
const STORAGE_THEME_KEY = 'bingo-theme';

function resolveIsDark(colorMode: ColorMode): boolean {
  if (colorMode === 'dark') return true;
  if (colorMode === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyToDOM(colorMode: ColorMode, theme: ThemeName): void {
  const root = document.documentElement;
  root.classList.toggle('dark', resolveIsDark(colorMode));
  if (theme === 'default') {
    root.removeAttribute('data-theme');
  } else {
    root.setAttribute('data-theme', theme);
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorMode, setColorModeState] = useState<ColorMode>(() => {
    const stored = localStorage.getItem(STORAGE_MODE_KEY);
    return (stored as ColorMode | null) ?? 'system';
  });

  const [theme, setThemeState] = useState<ThemeName>(() => {
    const stored = localStorage.getItem(STORAGE_THEME_KEY);
    return (stored as ThemeName | null) ?? 'default';
  });

  // Apply theme/mode to DOM whenever either changes
  useEffect(() => {
    applyToDOM(colorMode, theme);
  }, [colorMode, theme]);

  // Listen for OS dark mode changes when in system mode
  useEffect(() => {
    if (colorMode !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => applyToDOM('system', theme);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [colorMode, theme]);

  function setColorMode(mode: ColorMode) {
    localStorage.setItem(STORAGE_MODE_KEY, mode);
    setColorModeState(mode);
  }

  function setTheme(t: ThemeName) {
    localStorage.setItem(STORAGE_THEME_KEY, t);
    setThemeState(t);
  }

  return createElement(
    ThemeContext.Provider,
    { value: { colorMode, theme, setColorMode, setTheme } },
    children,
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
