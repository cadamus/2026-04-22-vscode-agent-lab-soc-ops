import { useTheme } from '../hooks/useTheme';
import type { ColorMode } from '../types';

// ── SVG Icons ────────────────────────────────────────────────────────────

function SunIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="13" cy="13" r="8" />
      <path d="M5.64 5.64a8 8 0 0 0 0 11.31M13 21.01V3M21.01 13H3" />
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────

const MODES: { value: ColorMode; label: string; icon: React.ReactNode }[] = [
  { value: 'light',  label: 'Light mode',  icon: <SunIcon /> },
  { value: 'dark',   label: 'Dark mode',   icon: <MoonIcon /> },
  { value: 'system', label: 'System mode', icon: <MonitorIcon /> },
];

// ── Component ─────────────────────────────────────────────────────────────

interface ThemeControlsProps {
  onOpenThemes?: () => void;
}

export function ThemeControls({ onOpenThemes }: ThemeControlsProps) {
  const { colorMode, setColorMode } = useTheme();

  return (
    <div className="flex items-center gap-2" data-testid="theme-controls">
      {/* Light / Dark / System toggle */}
      <div
        role="group"
        aria-label="Color mode"
        className="flex items-center rounded-full border border-line bg-canvas p-0.5"
      >
        {MODES.map(({ value, label, icon }) => (
          <button
            key={value}
            onClick={() => setColorMode(value)}
            aria-pressed={colorMode === value}
            aria-label={label}
            className={`flex items-center justify-center w-11 h-11 rounded-full transition-colors ${
              colorMode === value
                ? 'bg-accent text-white'
                : 'text-muted hover:text-secondary'
            }`}
          >
            {icon}
          </button>
        ))}
      </div>

      {/* Theme selector button */}
      {onOpenThemes && (
        <button
          onClick={onOpenThemes}
          aria-label="Open theme selector"
          className="flex items-center justify-center w-11 h-11 rounded-full border border-line bg-canvas text-muted hover:text-secondary transition-colors active:bg-surface-hover"
        >
          <PaletteIcon />
        </button>
      )}
    </div>
  );
}
