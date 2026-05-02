import { useState } from 'react';
import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';
import { ThemeControls } from './ThemeControls';
import { ThemePanel } from './ThemePanel';
import { useTheme } from '../hooks/useTheme';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  const [themePanelOpen, setThemePanelOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-full bg-canvas">
      {/* Header */}
      <header className="flex items-center justify-between p-3 bg-surface border-b border-line">
        <button
          onClick={onReset}
          className="text-muted text-sm px-3 min-h-11 rounded active:bg-surface-hover"
        >
          ← Back
        </button>
        <h1 className="font-bold text-primary">Bingo Mixer</h1>
        <ThemeControls onOpenThemes={() => setThemePanelOpen(true)} />
      </header>

      {/* Instructions */}
      <p className="text-center text-muted text-sm py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="bg-bingo text-bingo-fg text-center py-2 font-semibold text-sm">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
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
