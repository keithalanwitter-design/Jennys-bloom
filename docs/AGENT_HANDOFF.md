# Jenny's Bloom — AI agent handoff

## Product
A responsive, private-by-design, single-person wellness PWA intended primarily for Jenny. No app login or backend in V1: browser-local storage, voluntary data entry, JSON export/restore, and local deletion. The user opens an HTTPS web address on Android and can add it to the home screen. GitHub is for developer source control only.

## What is currently implemented
- Editable onboarding and self-chosen wellness goals
- Today dashboard and one-tap hydration logging
- Pantry inventory, protein-forward sample meal ideas, missing-ingredient comparison, shopping list
- Beginner movement/rebounder ideas and session logs
- Supplement *records* and tracking, not dose or interaction recommendations
- Optional weight/wellness reflections and user-owned entries
- Export/import backup and local deletion

## Limitations
- No live data synchronization or login, no background notifications when app is closed
- Recipe ingredient matching is approximate and not a verified nutrition database
- Rebounding is not inherently knee-safe or a medical treatment
- No default personalized supplement doses, protein or water quotas, medical advice or diagnosis
- JSON backups are unencrypted and should be kept private

## Next milestones
1. Deploy static site to an HTTPS provider; test Android Chrome home-screen install
2. Conduct Jenny-led onboarding and accessibility reviews
3. Refine grocery planner with quantities, unit conversion and pantry sufficiency
4. Add clinically reviewed resource links and evidence-based activity options
5. Add opt-in, secure cloud sync and permission-based push only if desired later
6. Expand end-to-end testing, data protection and accessibility
7. Avoid placing real names, body metrics, medical details or private backups in Git.

The project was informed by four private planning/research references provided in the conversation. Those research files are intentionally excluded from source control.
