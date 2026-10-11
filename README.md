# Jenny's Bloom ✿

**A no-login, mobile-first personal wellness planning PWA.**  
Working name: *Jenny's Bloom* — renameable.

## What works now

- Skippable, editable goal/interest onboarding (nothing is assigned).
- Today dashboard, hydration quick-add and log history, custom water target, little wins.
- Pantry inventory, original protein-forward meal templates, pantry-missing comparison, consolidated grocery list, flexible meal plan and meal-tried logs.
- Gentle movement/rebounder ideas, optional countdown timer, exercise log.
- User-set weekly/daily goals with progress, edit and delete.
- Optional supplement list and intake records **without dosing advice**.
- Optional wellbeing reflections, weight notes, foreground-only reminders.
- JSON export, JSON restore, and full local-data deletion.
- Offline-friendly, installable PWA assets when hosted over HTTPS.

## Exactly how the no-login design works

No account and no backend are used. Browser `localStorage` stores entries on **the device and browser profile where they were recorded**. The website's source files can be hosted on a public URL while Jenny's entries remain on her device, not inside the GitHub repo or hosting provider's database. Hosting a publicly accessible URL **does not make it a private, restricted-access website**, and someone using the same unlocked browser can read local entries. Use the phone's screen lock and do not treat this as a secure medical records system.

Clearing site data, changing browsers, uninstalling, or changing phones may lose entries. Use **Settings → Export JSON** regularly, keep backups in a secure location, and use **Settings → Import backup** to restore. Backups contain private wellness entries in unencrypted JSON; store them accordingly.

Browser notification reminders in this prototype work **only while the page is open and active**. Background/closed-app push requires a separate backend/subscription service and additional consent.

## Preview locally

This project has **no npm packages and no build step**. With Python available:

```bash
cd jennys-bloom
python -m http.server 8000
```

Visit `http://localhost:8000`. A simple `preview.html` is also included as a one-file visual demo if a local web server isn't available; install/offline features require a hosted HTTPS address.

## Put it on her Android phone (no login)

1. Create a **private** empty GitHub repository named `jennys-bloom` for the source code. This is for the builder, **not** an account Jenny needs.
2. Add the source files from this project to that repository; keep personal data/backup JSON out of Git.
3. Deploy the repository as a **static website** with a provider such as **Cloudflare Pages** or **Netlify**. Both offer plans suitable for modest static projects, subject to current terms. Do not upload private backup exports to the host. Choose HTTPS.
4. Open the resulting `https://...` link on Jenny's Android phone using Chrome. After verifying it works, tap **⋮ → Add to Home screen / Install app**, then tap its icon to open it in its own window. The precise menu label depends on Android/browser version.
5. Jenny completes her own short onboarding; her progress is saved in that phone browser, not through her GitHub account.

**Important distinction:** A private GitHub repo does not automatically mean the deployed web address is private. In this prototype, the *blank app shell* can be publicly visited while Jenny's local entries stay on her phone. If you need to prevent others from even seeing the app, use access controls, which introduce some form of sign-in.

## Scope and medical safety

- This is a lifestyle planning prototype, **not medical advice, treatment, or a medication management system**.
- Do not generate supplement dosing, diagnose fatigue/breathlessness, assume menopause, or assign protein, fluid, weight, or calorie targets based on age alone.
- If new/unusual/persistent/worsening shortness of breath occurs during daily activities, clinical assessment matters before increasing intensity.
- Rebounding is a *choice*, not a claim of zero joint impact, knee therapy, lymph detox, or superior weight loss.
- Ingredient name matching is **approximate**. It does not check quantities, allergens, food safety, or ingredient-specific health restrictions.
- Recipes are original illustrative ideas without fabricated nutritional values; obtaining nutrition totals later needs a reliable, licensed data source and real portions.
- User-entered supplement entries are not checked for interactions or safe doses; a pharmacist/clinician should review.

## Project structure

- `index.html`: entry HTML, PWA metadata.
- `styles.css`: mobile-first theme.
- `app.mjs`: screens, interaction, local persistence, data controls.
- `logic.mjs`: reusable matching, dates, and goal calculations.
- `recipes.mjs`: original meal/activity content.
- `sw.js`: static cache service worker.
- `manifest.webmanifest`, `assets/`: install metadata and icons.
- `preview.html`: dependency-free single-file visual preview.
- `docs/AGENT_HANDOFF.md`: build roadmap and privacy guardrails.

## Future product roadmap (if she likes it)

- Validated nutrition data and portion scaling, real ingredient quantities, grocery categories, pantry expiry alerts.
- Push notifications that function when closed, PWA reminders per Android/browser capabilities.
- Optional recipe APIs (check current terms/costs); workout multimedia via licensed/authorized embeds.
- Optional encrypted sync across devices with a passwordless login/passkey (only when Jenny wants it).
- Custom goals based on consented profile and clinician/dietitian guidance where relevant.
- Greater accessibility, usability testing and complete end-to-end automation.

No real personal health records are bundled in the source.