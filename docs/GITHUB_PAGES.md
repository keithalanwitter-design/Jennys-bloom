# Deploy Jenny's Bloom with GitHub Pages

GitHub Pages is the **only** planned host for this starter.

**Repository:** https://github.com/keithalanwitter-design/Jennys-bloom  
**Pages settings:** https://github.com/keithalanwitter-design/Jennys-bloom/settings/pages  
**Source:** `main` → `/(root)`  
**Build step:** None. The published entry is `/index.html`.

## One-time settings action

1. In the repository, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Select **main**, then **/(root)**, then click **Save**.
4. Wait until GitHub shows a successful Pages deployment. Use **Visit site** (do not guess that the site is live).
5. In Jenny's Android Chrome, open the site, select the browser's **Add to Home screen / Install app** option, then use the installed icon.

## Eligibility and privacy

The repository is private. GitHub Free Pages is for public repositories; GitHub Pro/eligible paid GitHub plans allow private-repository source publishing. **Published Pages content is public on the internet even if its source repository is private.** Do not publish any private logs, exports, medical notes, or user data as static files.

If Pages is disabled due to private repository plan eligibility, ask the repository owner whether to make the **source repository** public. Do not switch visibility automatically or make any personal data public. The site never needs a login for Jenny, but anyone with the public URL can open the empty application shell.

Local storage is scoped to the deployed origin. Changing `github.io` paths, browsers, or devices does not transfer entries. Jenny can export/import a JSON backup from Settings; backups are unencrypted and must be kept private.

## Automatic future updates

Every new commit to `main` is automatically republished through branch-source Pages. There is no separate manual build, upload, or new-host workflow.

## Smoke test after Pages is live

- Homepage loads on Android with styled cards (not plain text/code).
- Navigation Today / Kitchen / Move / Goals / Wellness works.
- Jenny chooses her own goals and can later edit them.
- Entries save after page refresh.
- Export and import restore entries.
- No private personal records appear in GitHub.
- The manifest/icon can be installed on Android if Chrome permits.
- All external resources are marked and safety caveats remain visible.
- Reminders while app closed are explicitly described as unavailable.

If the page is blank, open the browser developer console for module, path, or MIME errors. GitHub Pages typically serves this project directly with no build step; `.nojekyll` is included to prevent unnecessary Jekyll processing.
