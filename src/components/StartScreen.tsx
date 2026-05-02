import { useState } from 'react';
import { ThemeControls } from "./ThemeControls";
import { ThemePanel } from "./ThemePanel";
import { useTheme } from '../hooks/useTheme';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  const [themePanelOpen, setThemePanelOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 bg-canvas">
      {/* Theme controls top-right */}
      <div className="absolute top-0 right-0 p-3">
        <ThemeControls onOpenThemes={() => setThemePanelOpen(true)} />
      </div>

      <div className="text-center max-w-sm">
        <h1 className="text-4xl font-bold text-primary mb-2">Bingo Mixer</h1>

        <div className="bg-surface rounded-lg p-6 shadow-sm border border-line mb-8">
          <h2 className="font-semibold text-primary mb-3">How to play</h2>
          <ul className="text-left text-secondary text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-semibold py-4 px-8 rounded-lg text-lg active:bg-accent-light transition-colors cursor-pointer"
        >
          Start Game
        </button>
      </div>

      {/* Theme Panel */}
      <ThemePanel
        isOpen={themePanelOpen}
        onClose={() => setThemePanelOpen(false)}
        currentTheme={theme}
        onSelectTheme={setTheme}
      />
    </div>
  );
}
