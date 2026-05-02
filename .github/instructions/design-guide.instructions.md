---
description: "Use when redesigning or extending the app UI, theme system, interaction styling, or visual presentation in React and CSS files. Covers visual direction, Tailwind v4 theming, responsiveness, and UI quality."
applyTo:
  - "src/**/*.tsx"
  - "src/**/*.css"
---

# Design Guide

- Start each substantial UI change from a clear visual concept. Name the direction in the plan or prompt and make the layout, type, color, and motion choices support that concept.
- Avoid generic app styling. Do not fall back to default SaaS cards, neutral gradients, or interchangeable component-library aesthetics.
- Work within the current multi-theme system. Route shared colors, typography, and semantic states through tokens in `@theme inline`, `:root`, `.dark`, and `[data-theme="..."]` instead of scattering hard-coded values through components. If a future redesign requires a different theming approach, we can discuss that separately.
- Treat themes as full systems, not accent swaps. If you add or revise a theme, define coherent canvas, surface, line, text, accent, marked, winning, and bingo states, and keep both light and dark behavior intentional.
- Prefer Tailwind v4 utilities in component markup and keep reusable visual tokens in CSS. Read the Tailwind v4 workspace instruction before introducing new token patterns.
- Keep the primary game loop visually obvious on small screens first: start game, scan board, mark square, notice bingo, reset or replay.
- Use typography deliberately. Pick type that fits the chosen concept and keep headline, body, and UI text roles clearly separated.
- Use motion sparingly and purposefully. Favor short transitions, staged reveals, or celebratory moments that reinforce game feedback. Avoid constant animation or effects that compete with readability.
- Make interactions feel tactile. Buttons, squares, toggles, and dialogs should communicate hover, press, focus, selected, and completed states clearly.
- Keep controls touch-friendly and keyboard-usable. Interactive targets should remain comfortable on mobile and have visible focus treatment that is not color-only.
- Preserve component boundaries: presentation in `src/components`, state and effects in hooks, pure game logic in utils, and shared types in `src/types`.