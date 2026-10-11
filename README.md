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

## View and publish the ACTUAL website with GitHub Pages

This project **already contains the complete visual and interactive website** at the repository root, including `index.html`, `styles.css`, `app.mjs`, images/icons, and a PWA manifest. The code repository viewer shows source files; **GitHub Pages displays the running website**. No third-party host, new framework, build command, or copy/paste is needed.

Repository: [keithalanwitter-design/Jennys-bloom](https://github.com/keithalanwitter-design/Jennys-bloom).

### One-time GitHub Pages activation

1. Open [Settings → Pages](https://github.com/keithalanwitter-design/Jennys-bloom/settings/pages).
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main**, folder **/(root)**, then **Save**.
4. GitHub publishes the HTML/CSS/JS and automatically updates the site with future pushes.

Once GitHub reports **Visit site** and shows a successful deployment, open that provided URL on Jenny's Android Chrome browser; use **⋮ → Add to Home screen / Install app**. The expected *address pattern*, not an already-live confirmation, is `https://keithalanwitter-design.github.io/Jennys-bloom/`.

**Important plan/visibility limitation:** GitHub Free includes Pages for **public** repositories; private-repository Pages publishing requires an eligible paid GitHub plan. This repository is **private** right now. If GitHub's Pages setting is unavailable, you must decide whether to change the repository's visibility to public or use an eligible GitHub plan. Do not change visibility without the owner's approval. **Pages sites are publicly reachable even when the source repository is private** on a qualifying plan. This is safe only for a public-facing blank app shell, not a secure/private medical records website.

### No-login privacy model

Jenny does **not** need a GitHub account or login to view the published site. Entries stay in the local storage of the specific device/browser, not in repository source code or a server database. This is convenient, but **not secure medical-record storage**. Export backups to a private location; never commit her wellness entries or backup JSON to a GitHub repository. Local entries can be lost on browser reset, phone change, or site-origin change. Closed-app background reminders are not yet implemented.

For troubleshooting and release checks, see [the GitHub Pages setup checklist](docs/GITHUB_PAGES.md).

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