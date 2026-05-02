/** Domain types for the Bingo game */

export interface BingoSquareData {
  id: number;
  text: string;
  isMarked: boolean;
  isFreeSpace: boolean;
}

export interface BingoLine {
  type: 'row' | 'column' | 'diagonal' | 'corners';
  index: number;
  squares: number[];
}

export type GameState = 'start' | 'playing' | 'bingo';

/** Theme types */
export type ColorMode = 'light' | 'dark' | 'system';
export type ThemeName =
  | 'default'
  | 'cyberpunk'
  | 'pixel-arcade'
  | 'minimalist-mono'
  | 'grotesque-grid'
  | 'retro-terminal'
  | 'vaporwave'
  | 'brutalist'
  | 'soft-pastel'
  | 'skeuomorphic'
  | 'noir'
  | 'candy-pop'
  | 'scandinavian'
  | 'corporate-blue'
  | 'gradient-glass'
  | 'notebook-sketch'
  | 'space-galaxy'
  | 'paper-cutouts'
  | 'geometric-memphis'
  | 'cozy-coffee'
  | 'metallic-chrome'
  | 'constructivist'
  | 'eco-leafy'
  | 'anime-bubble'
  | 'newspaper'
  | 'chalkboard'
  | 'yacht-nautical'
  | 'desert-sand'
  | 'serif-vintage'
  | 'toybox-primary';
