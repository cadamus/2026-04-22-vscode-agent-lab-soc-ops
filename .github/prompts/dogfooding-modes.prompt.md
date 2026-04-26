---
agent: agent
description: Run app dogfooding in quick, standard, or thorough mode using a consistent output format.
argument-hint: Mode + target + optional focus, for example: quick http://localhost:5173 focus onboarding
tools: ['browser', 'read', 'search', 'todo']
---

Your goal is to run a critical dogfooding pass against a running app with a predictable output shape.

## Inputs
- `mode`: `quick`, `standard`, or `thorough` (default: `standard`)
- `target`: URL, route, or app area to test
- `focus` (optional): onboarding, fun, usability, reliability, accessibility, replayability

If any input is missing, infer from context and clearly state assumptions.

## Always Use This Workflow
Follow the process in [dogfooding skill](../skills/dogfooding/SKILL.md) and apply the mode budget below.

## Mode Budgets

### Quick
- Run one end-to-end core flow
- Trigger one success path
- Test one edge case
- Keep report concise (top 3 findings)

### Standard
- Run two complete loops (first-time + replay)
- Trigger success and post-success paths
- Test at least two edge cases
- Provide prioritized findings with short recommendations

### Thorough
- Run three loops across varying paths
- Include navigation stress checks and state recovery checks
- Evaluate engagement, usability, reliability, and accessibility heuristics
- Provide a ranked backlog and sprintable next steps

## Output Format (Use This Every Time)
1. Verdict
- One short paragraph with overall assessment and test assumptions.

2. Scores
- Engagement: X/10
- Usability: X/10
- Reliability: X/10

3. Tested
- Flat list of flows and edge cases executed.

4. Findings
- P0: Critical blockers
- P1: High-impact issues
- P2: Nice-to-have improvements

5. Recommended Next Actions
- Top 3 actions ordered by impact vs effort.

6. Optional Plan
- Include backlog table and sprint plan only if mode is `thorough` or user asks.
