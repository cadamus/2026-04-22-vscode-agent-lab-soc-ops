# Follow-On Implementation Backlog

This backlog captures post-dogfooding improvements to increase fun, replayability, and social momentum.

## Prioritized Features (Impact vs Effort)

| Rank | Feature                                                            | Fun Impact (1-5) | Effort (S/M/L) | Why it matters                          |
|------|--------------------------------------------------------------------|-----------------:|----------------|-----------------------------------------|
| 1    | Round timer (3-5 min) + visible countdown                          | 5                | S              | Adds urgency and energy immediately.    |
| 2    | Near-win callouts (4 in a row alerts)                              | 5                | S              | Creates hype moments before bingo.      |
| 3    | Stronger win celebration (confetti, punchier copy, optional sound) | 4                | S              | Makes wins feel rewarding, not flat.    |
| 4    | Next challenge after bingo (double-bingo objective)                | 4                | S              | Prevents energy drop after first win.   |
| 5    | Host controls (start/pause/reset round)                            | 4                | M              | Improves facilitation for real events.  |
| 6    | Mode selector: Classic / Speed / Blackout                          | 5                | M              | Increases replayability and variety.    |
| 7    | Team mode (2-4 teams, shared progress)                             | 5                | M              | Adds social banter and collaboration.   |
| 8    | Prompt packs by audience vibe                                      | 4                | M              | Better fit by context, less stale play. |
| 9    | Streak/combo scoring                                               | 3                | M              | Adds momentum and one-more-turn feel.   |
| 10   | Post-round recap screen                                            | 3                | M              | Improves closure and replay motivation. |
| 11   | Follow-up conversation micro-prompts                               | 4                | L              | Deepens social interaction quality.     |
| 12   | Lightweight verification/anti-cheat                                | 2                | L              | Helps fairness, lower direct fun gain.  |

## Suggested Delivery Plan

### Sprint 1 (Highest ROI)
- Timer + countdown UI
- Near-win alerts
- Improved bingo celebration
- Post-bingo next objective

### Sprint 2 (Replayability)
- Mode selector
- Host controls
- Prompt packs

### Sprint 3 (Social Depth)
- Team mode
- Recap screen
- Follow-up conversation prompts

## Acceptance Criteria (Top 4)

### 1) Timer
- User can choose 3, 4, or 5-minute rounds.
- Countdown remains visible during gameplay.
- At 0:00, board interaction locks and round-end state appears.

### 2) Near-win alert
- When player reaches 4/5 in any line, show clear visual alert.
- Alert fires once per line (avoid spam).

### 3) Win celebration
- Bingo triggers confetti animation and stronger modal copy.
- Sound effect is optional with a user toggle.

### 4) Next challenge
- After first bingo, modal offers Continue for Double Bingo.
- UI tracks at least two bingo completions in one round.

## Notes
- Keep these additions optional/toggleable for low-stakes events.
- Prefer incremental rollout behind small flags to reduce regression risk.
