import { useEffect } from 'react';
import { THEME_LIST } from '../data/themes';
import type { ThemeName } from '../types';
import './ThemePanel.css';

interface ThemePanelProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeName;
  onSelectTheme: (theme: ThemeName) => void;
}

export function ThemePanel({
  isOpen,
  onClose,
  currentTheme,
  onSelectTheme,
}: ThemePanelProps) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleThemeClick = (themeId: ThemeName) => {
    onSelectTheme(themeId);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Panel */}
      <div
        className={`fixed right-0 top-0 bottom-0 bg-canvas border-l border-line z-50 transform transition-transform duration-300 ease-out w-full lg:w-96 overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Theme selector"
        aria-modal="true"
      >
        {/* Header */}
        <div className="sticky top-0 bg-surface border-b border-line p-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-primary">Themes</h2>
          <button
            onClick={onClose}
            className="text-muted hover:text-primary text-xl font-bold w-8 h-8 flex items-center justify-center rounded active:bg-surface-hover"
            aria-label="Close theme panel"
          >
            ✕
          </button>
        </div>

        {/* Theme Grid */}
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {THEME_LIST.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeClick(theme.id)}
              data-theme={theme.id}
              className={`text-left rounded-lg border-2 transition-all overflow-hidden ${
                currentTheme === theme.id
                  ? 'border-accent ring-2 ring-accent'
                  : 'border-line hover:border-accent'
              }`}
            >
              {/* Mini Bingo Preview */}
              <div className="bg-surface p-3 h-32 flex flex-col">
                {/* Mini 3x3 grid */}
                <div className="flex-1 flex flex-col gap-1 mb-2">
                  {[0, 1, 2].map((row) => (
                    <div key={row} className="flex gap-1 flex-1">
                      {[0, 1, 2].map((col) => {
                        const isFree = row === 1 && col === 1;
                        const isMarked = Math.random() > 0.5;
                        return (
                          <div
                            key={`${row}-${col}`}
                            className={`flex-1 rounded text-xs flex items-center justify-center font-bold ${
                              isFree
                                ? 'bg-surface-hover text-muted text-[8px]'
                                : isMarked
                                  ? 'bg-marked text-marked-fg border border-marked-border'
                                  : 'bg-surface text-primary border border-line'
                            }`}
                          >
                            {isFree ? '★' : ''}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Theme name */}
                <div className="text-xs font-semibold text-primary truncate">
                  {theme.name}
                </div>
                {theme.description && (
                  <div className="text-[10px] text-muted truncate">
                    {theme.description}
                  </div>
                )}
              </div>

              {/* Selection indicator */}
              {currentTheme === theme.id && (
                <div className="h-1 bg-accent" />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
