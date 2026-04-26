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
export type ThemeName = 'default' | 'cyberpunk' | 'pixel-arcade';
