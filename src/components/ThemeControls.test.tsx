import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeControls } from './ThemeControls';
import { ThemeProvider } from '../hooks/useTheme';
import type { ReactNode } from 'react';

function Wrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

function renderControls() {
  return render(
    <Wrapper>
      <ThemeControls />
    </Wrapper>,
  );
}

describe('ThemeControls', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
    document.documentElement.removeAttribute('data-theme');
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({
        matches: false,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders the theme controls container', () => {
    renderControls();
    expect(screen.getByTestId('theme-controls')).toBeInTheDocument();
  });

  it('renders all three mode buttons', () => {
    renderControls();
    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /system mode/i })).toBeInTheDocument();
  });

  it('renders all three theme buttons', () => {
    renderControls();
    expect(screen.getByRole('button', { name: /default theme/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cyberpunk neon theme/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /pixel arcade theme/i })).toBeInTheDocument();
  });

  it('system mode button is initially pressed', () => {
    renderControls();
    const systemBtn = screen.getByRole('button', { name: /system mode/i });
    expect(systemBtn).toHaveAttribute('aria-pressed', 'true');
  });

  it('default theme button is initially pressed', () => {
    renderControls();
    const defaultBtn = screen.getByRole('button', { name: /default theme/i });
    expect(defaultBtn).toHaveAttribute('aria-pressed', 'true');
  });

  it('clicking dark mode button sets it as pressed', async () => {
    renderControls();
    const user = userEvent.setup();
    const darkBtn = screen.getByRole('button', { name: /dark mode/i });
    await user.click(darkBtn);
    expect(darkBtn).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /system mode/i })).toHaveAttribute('aria-pressed', 'false');
  });

  it('clicking light mode button sets it as pressed', async () => {
    renderControls();
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /light mode/i }));
    expect(screen.getByRole('button', { name: /light mode/i })).toHaveAttribute('aria-pressed', 'true');
  });

  it('clicking cyberpunk theme sets it as pressed', async () => {
    renderControls();
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /cyberpunk neon theme/i }));
    expect(screen.getByRole('button', { name: /cyberpunk neon theme/i })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: /default theme/i })).toHaveAttribute('aria-pressed', 'false');
  });

  it('clicking pixel arcade theme applies data-theme attribute', async () => {
    renderControls();
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /pixel arcade theme/i }));
    expect(document.documentElement.getAttribute('data-theme')).toBe('pixel-arcade');
  });

  it('mode buttons belong to a labelled group', () => {
    renderControls();
    expect(screen.getByRole('group', { name: /color mode/i })).toBeInTheDocument();
  });

  it('theme buttons belong to a labelled group', () => {
    renderControls();
    expect(screen.getByRole('group', { name: /^theme$/i })).toBeInTheDocument();
  });
});
