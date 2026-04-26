---
name: dogfooding
description: Use this skill to critically test a running app like a real user and produce candid, prioritized feedback on engagement, usability, and reliability. Trigger words: dogfood, playtest, UX reality check, critical testing, product feedback.
argument-hint: What app or feature should be dogfooded?
---

# Dogfooding

Run a critical, user-realistic evaluation of an app and report findings that are useful for immediate product decisions.

## When to Use
- The user asks to dogfood, playtest, or reality-check an app.
- The team wants blunt feedback on engagement, not only correctness.
- You need a prioritized list of improvements with effort vs impact.

## Inputs to Confirm
- Target environment: local URL, build, or deployed URL.
- Primary audience: who this app is for.
- Session type: solo, multiplayer, host-led, or mixed.
- Goal focus: fun, usability, onboarding, retention, or all.

If these are missing, infer from context and state assumptions.

## Procedure

1. Establish the test lens
- Set balanced evaluation dimensions: clarity, usability, pace, payoff, reliability, replay value.
- Define pass criteria for each dimension.
- Decide whether to test as first-time user, returning user, or both.

2. Exercise core flow end-to-end
- Start from landing/onboarding.
- Complete the primary task loop at least once.
- Trigger success path and post-success path.
- Restart and repeat to check freshness across rounds.

3. Probe interaction quality
- Test reversible actions and error recovery.
- Check edge cases: back-navigation, repeated actions, accidental taps/clicks.
- Verify feedback quality: states, transitions, progress, and completion cues.

4. Stress fun and retention factors
- Evaluate whether tension builds over time.
- Check for momentum systems (timers, streaks, escalating goals, challenge ladders).
- Measure replay variety (randomization, modes, content diversity).
- Identify social catalysts (banter triggers, cooperative/competitive hooks).

5. Record findings with severity and evidence
- Prioritize by player impact and likelihood.
- Separate correctness bugs from engagement issues.
- Include concrete moments where energy drops or confusion appears.

6. Recommend changes by impact vs effort
- Provide a ranked backlog with small, medium, and larger bets.
- Include a short implementation sequence (Sprint 1, Sprint 2, Sprint 3).
- Add acceptance criteria for top items to reduce ambiguity.

## Decision Points and Branching
- If the app is mechanically correct but feels flat:
  Focus recommendations on payoff, pacing, and replay loops.
- If users can get lost early:
  Prioritize onboarding clarity and first-win path.
- If the app is social by design:
  Prioritize features that create interaction between participants, not only solo progression.
- If time is limited:
  Run one complete loop plus one replay check, then report highest-leverage fixes only.

## Quality Bar
- Feedback is candid and specific, not generic praise.
- Claims map to observed behavior from testing.
- Recommendations are actionable and ordered.
- Output distinguishes immediate wins from strategic investments.

## Completion Checks
- Core flow tested from start to replay.
- At least one success path and one post-success interaction tested.
- At least one edge case tested.
- Final output defaults to concise format with:
  - overall assessment and context
  - what was tested
  - what works
  - critical gaps
  - top recommended next actions
- If user asks for implementation planning, add ranked backlog, sprint plan, and acceptance criteria.

## Output Template
Use this structure:

1. Overall assessment
- Short verdict with context (audience and test assumptions).

2. What I tested
- Ordered list of flows and edge cases exercised.

3. What feels good
- Specific strengths that should be preserved.

4. Critical fun gaps
- Prioritized weaknesses with user impact.

5. High-impact changes
- Ranked fixes with effort and expected payoff.

6. Optional implementation plan
- Add only when requested: sprint sequencing and acceptance criteria for top items.
