# ArchDeck website

This folder is a ready-to-publish **GitHub Pages** landing site for ArchDeck.

## What is included

- `index.html` — landing page
- `style.css` — responsive cyberdeck theme
- `app.js` — release/repository links + screenshot lightbox
- `privacy.html` — starter privacy page
- `assets/screenshots/` — real ArchDeck screenshots, including Home Assistant control, system telemetry and the app drawer
- `.nojekyll` — tells GitHub Pages to serve the static files directly

## Fastest way to publish

1. Create a GitHub repository named **ArchDeck**.
2. Upload everything in this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch **main**, folder **/(root)**, then Save.
6. After GitHub publishes it, the site will normally be:
   `https://YOUR_USERNAME.github.io/ArchDeck/`

The page automatically detects the GitHub Pages username and repository name and points the **Download Latest** button to:

`https://github.com/YOUR_USERNAME/ArchDeck/releases/latest`

## Add the APK

Create a GitHub Release and attach your signed APK to the release. The site's download buttons will then point users to the newest release page.

Suggested release title:

`ArchDeck 0.6.17 — Psychedelic Feedback Visualizers`

Suggested APK filename:

`ArchDeck-0.6.17.apk`

## Important if you plan to sell ArchDeck

This website repository does **not** include the ArchDeck application source code. A public GitHub repository does not have to be open source.

Do not add an MIT/GPL/Apache license unless you intentionally want to grant those rights. If ArchDeck will remain proprietary, keep the application source private and use this repository for the website, screenshots and downloadable releases.

## Before a public launch

Replace/update:
- current version number when you release a new build
- privacy text if data handling changes
- screenshots as ArchDeck evolves
- support/contact information
- pricing/license terms if you start selling licenses

## Screenshot note

The included images are real ArchDeck captures from development, not generated promotional mockups.


## Current showcase additions

The site now includes dedicated sections for the launcher-native Home Assistant control deck and the searchable/category-filtered ArchDeck app drawer.
