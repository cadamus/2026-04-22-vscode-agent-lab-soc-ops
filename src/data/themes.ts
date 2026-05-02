import type { ThemeName } from '../types';

export interface ThemeInfo {
  id: ThemeName;
  name: string;
  description?: string;
}

export const THEME_LIST: ThemeInfo[] = [
  { id: 'default', name: 'Default', description: 'Clean and modern' },
  { id: 'cyberpunk', name: 'Cyberpunk Neon', description: 'Neon futurism' },
  { id: 'pixel-arcade', name: 'Pixel Arcade', description: 'Retro 8-bit style' },
  { id: 'minimalist-mono', name: 'Minimalist Mono', description: 'Pure black and white' },
  { id: 'grotesque-grid', name: 'Grotesque Type Grid', description: 'Bold typography' },
  { id: 'retro-terminal', name: 'Retro Terminal Green', description: 'Classic green screen' },
  { id: 'vaporwave', name: 'Vaporwave Sunset', description: 'Dreamy pastels' },
  { id: 'brutalist', name: 'Brutalist Blocks', description: 'Raw and geometric' },
  { id: 'soft-pastel', name: 'Soft Pastel Clouds', description: 'Gentle and calm' },
  { id: 'skeuomorphic', name: 'Skeuomorphic Stickers', description: 'Playful and tactile' },
  { id: 'noir', name: 'Dark Mode Noir', description: 'Mysterious elegance' },
  { id: 'candy-pop', name: 'Playful Candy Pop', description: 'Bright and fun' },
  { id: 'scandinavian', name: 'Scandinavian Calm', description: 'Minimalist harmony' },
  { id: 'corporate-blue', name: 'Corporate Clean Blue', description: 'Professional polish' },
  { id: 'gradient-glass', name: 'Gradient Glass UI', description: 'Modern glass morphism' },
  { id: 'notebook-sketch', name: 'Notebook Doodle Sketch', description: 'Handwritten feel' },
  { id: 'space-galaxy', name: 'Space Galaxy Glow', description: 'Cosmic vibes' },
  { id: 'paper-cutouts', name: 'Paper Card Cutouts', description: 'Layered paper' },
  { id: 'geometric-memphis', name: 'Geometric Memphis', description: 'Postmodern fun' },
  { id: 'cozy-coffee', name: 'Cozy Coffee Shop', description: 'Warm and inviting' },
  { id: 'metallic-chrome', name: 'Metallic Chrome UI', description: 'Shiny and smooth' },
  { id: 'constructivist', name: 'Bold Constructivist', description: 'Revolutionary art' },
  { id: 'eco-leafy', name: 'Eco Leafy Green', description: 'Nature-inspired' },
  { id: 'anime-bubble', name: 'Anime Bubble Aesthetic', description: 'Anime-inspired' },
  { id: 'newspaper', name: 'Monochrome Newspaper', description: 'Classic print' },
  { id: 'chalkboard', name: 'Chalkboard Classroom', description: 'School vibes' },
  { id: 'yacht-nautical', name: 'Yacht Club Nautical', description: 'Maritime style' },
  { id: 'desert-sand', name: 'Desert Sand Minimal', description: 'Earthy and warm' },
  { id: 'serif-vintage', name: 'Bold Serif Vintage', description: 'Timeless elegance' },
  { id: 'toybox-primary', name: 'Toybox Primary Colors', description: 'Bright and playful' },
];
