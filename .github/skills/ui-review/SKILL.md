---
name: ui-review
description: Use this skill for critical interface critique focused on visual hierarchy, animation payoff, and accessibility heuristics. Trigger words: UI review, interface critique, design review, accessibility pass.
argument-hint: What screen, flow, or URL should be reviewed?
---

# UI Review

Run a practical visual and interaction review that prioritizes issues users actually feel.

## When to Use
- You need candid UI feedback before implementation or release.
- You want to evaluate hierarchy, readability, and interaction clarity.
- You need accessibility heuristics without a full formal audit.

## Review Dimensions
- Visual hierarchy: can users spot primary action and key information quickly?
- Layout and spacing: rhythm, grouping, alignment, and scannability.
- Typography and contrast: readability at typical and small sizes.
- Motion payoff: does animation clarify intent, or just decorate?
- Interaction feedback: hover, active, selected, loading, disabled, error states.
- Accessibility heuristics: keyboard reachability, focus visibility, semantic labels, color dependence.

## Procedure

1. Capture context
- Identify audience and device assumptions.
- Choose one primary flow and one secondary flow.

2. Evaluate first impression (10-second scan)
- Record what appears primary, secondary, and ambiguous.
- Note immediate confusion points.

3. Evaluate interaction path
- Execute the primary flow end-to-end.
- Check state transitions and feedback quality.

4. Evaluate motion and clarity
- Identify each animation and its purpose.
- Flag motion that distracts or delays without improving understanding.

5. Run accessibility heuristics pass
- Confirm tab order reaches core controls.
- Confirm focus indicator remains visible.
- Check color contrast risks and non-color status cues.
- Confirm controls have meaningful labels.

6. Prioritize findings
- P0: blocks task completion or creates severe confusion
- P1: major UX friction likely affecting many users
- P2: polish and consistency improvements

## Completion Checks
- At least one full user flow tested.
- At least one edge state inspected (error, empty, loading, disabled).
- Accessibility heuristics covered with concrete notes.
- Final output includes strengths, issues, and prioritized recommendations.

## Output Template
1. Summary verdict
2. What works well
3. Priority findings (P0/P1/P2)
4. Accessibility heuristics results
5. Top 3 fixes by impact vs effort
