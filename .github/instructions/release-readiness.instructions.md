---
description: Load this before demos or releases to run a focused smoke-test checklist across core user flows and quality gates.
---

# Release Readiness Smoke-Test

Use this checklist before sharing, demoing, or shipping.

## Scope
- Validate the most important user journeys first.
- Prefer a short, reliable pass over broad but shallow checks.
- Log failures with reproduction steps and severity.

## Core Flow Checklist
- [ ] App starts with no blocking console/runtime errors.
- [ ] Landing/onboarding path is clear and actionable.
- [ ] Primary task loop completes end-to-end.
- [ ] Success path appears and communicates next action.
- [ ] Post-success behavior works (continue, replay, reset, or navigate back).

## Reliability Checklist
- [ ] Back-navigation does not break state.
- [ ] Repeated actions do not duplicate or corrupt state.
- [ ] Empty/error/loading states are understandable.
- [ ] App remains usable after refresh.

## Accessibility Heuristic Checklist
- [ ] Keyboard reaches core controls.
- [ ] Focus indicators are visible.
- [ ] Primary status cues are not color-only.
- [ ] Interactive elements have meaningful labels.

## UX Quality Checklist
- [ ] Primary call-to-action is visually obvious.
- [ ] Interaction feedback is immediate and consistent.
- [ ] Copy is concise and context-appropriate.
- [ ] Completion moments feel rewarding and clear.

## Exit Criteria
Ship or demo only when:
- No unresolved P0 issues.
- Known P1 issues have explicit trade-off approval.
- Reproduction notes exist for any deferred issues.

## Reporting Format
Use this compact summary:
1. Overall status: Ready / Risky / Not Ready
2. Passed checks
3. Failed checks with severity (P0/P1/P2)
4. Go/No-go recommendation and immediate next actions
