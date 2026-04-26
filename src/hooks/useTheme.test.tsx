import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from './useTheme';
import type { ReactNode } from 'react';

// ── matchMedia mock ───────────────────────────────────────────────────────

function mockMatchMedia(prefersDark: boolean) {
  const listeners: Array<(e: { matches: boolean }) => void> = [];
  const mq = {
    matches: prefersDark,
    addEventListener: vi.fn((_: string, cb: (e: { matches: boolean }) => void) => {
      listeners.push(cb);
    }),
    removeEventListener: vi.fn(),
    dispatchChange: (matches: boolean) => {
      mq.matches = matches;
      listeners.forEach((cb) => cb({ matches }));
    },
  };
  vi.stubGlobal('matchMedia', vi.fn(() => mq));
  return mq;
}

function wrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear();
    // Reset html element classes/attributes
    document.documentElement.classList.remove('dark');
    document.documentElement.removeAttribute('data-theme');
    mockMatchMedia(false);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('defaults to system color mode and default theme', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.colorMode).toBe('system');
    expect(result.current.theme).toBe('default');
  });

  it('restores colorMode from localStorage', () => {
    localStorage.setItem('bingo-color-mode', 'dark');
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.colorMode).toBe('dark');
  });

  it('restores theme from localStorage', () => {
    localStorage.setItem('bingo-theme', 'cyberpunk');
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.theme).toBe('cyberpunk');
  });

  it('setColorMode persists to localStorage and updates state', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    act(() => result.current.setColorMode('dark'));
    expect(result.current.colorMode).toBe('dark');
    expect(localStorage.getItem('bingo-color-mode')).toBe('dark');
  });

  it('setTheme persists to localStorage and updates state', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    act(() => result.current.setTheme('pixel-arcade'));
    expect(result.current.theme).toBe('pixel-arcade');
    expect(localStorage.getItem('bingo-theme')).toBe('pixel-arcade');
  });

  it('adds .dark class when colorMode is dark', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    act(() => result.current.setColorMode('dark'));
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('removes .dark class when colorMode is light', () => {
    document.documentElement.classList.add('dark');
    const { result } = renderHook(() => useTheme(), { wrapper });
    act(() => result.current.setColorMode('light'));
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('sets data-theme attribute for non-default themes', () => {
    const { result } = renderHook(() => useTheme(), { wrapper });
    act(() => result.current.setTheme('cyberpunk'));
    expect(document.documentElement.getAttribute('data-theme')).toBe('cyberpunk');
  });

  it('removes data-theme attribute when theme is default', () => {
    document.documentElement.setAttribute('data-theme', 'cyberpunk');
    const { result } = renderHook(() => useTheme(), { wrapper });
    act(() => result.current.setTheme('default'));
    expect(document.documentElement.getAttribute('data-theme')).toBeNull();
  });

  it('respects OS dark preference in system mode', () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useTheme(), { wrapper });
    // system mode + OS prefers dark → .dark should be added
    act(() => result.current.setColorMode('system'));
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('throws when used outside ThemeProvider', () => {
    // Suppress the React error boundary console output
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => renderHook(() => useTheme())).toThrow(
      'useTheme must be used within ThemeProvider',
    );
    spy.mockRestore();
  });
});
