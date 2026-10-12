# Chennai Central → Urappakkam travel guide

A lightweight, mobile-first static website with a service-worker offline cache. No frameworks, external fonts, trackers, or API keys.

## Before sharing
1. Replace the photo placeholders only with photos you have verified in person. Add descriptive alt text if using `<img>`.
2. Confirm the route from Chennai Central to Chennai Park suburban station, station access, and train advice with current railway information. Do not publish a fixed platform number or unverified timetable.
3. Update the “Last reviewed” date in `index.html`.
4. Test the walking link on Android and iPhone, including whether the browser opens the correct route. If a route destination is ambiguous, revise it to a verified Google Maps place URL.
5. Test the site on at least one Android phone and one iPhone, and test offline after first loading it fully.

## Publish free with GitHub Pages
1. Sign in or create a GitHub account.
2. Create a **public** repository, for example `urappakkam-travel-guide`.
3. Upload all files in this folder to the repository root (not the ZIP itself).
4. In repository **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, then Save.
5. Wait for GitHub Pages to publish. The URL will look like `https://YOUR-USERNAME.github.io/urappakkam-travel-guide/`.
6. Open that HTTPS URL on a phone. Keep it open online for a moment, then use the “Check offline setup” button. Turn on airplane mode and reload the same URL to test.
7. Create the QR code only after the final URL works. Point the QR code at the website URL, not the ZIP or PDF.

## Offline limitations
- The service worker caches the guide's own files after the first successful online visit; first-time visitors need internet to load the site initially.
- Google Maps, search, and live train information require internet and may not work offline.
- Browser storage can be cleared or evicted. Always offer a printed copy or saved screenshots as a backup.
- For reliable offline use, use a modern browser and load the site online at least once before travel.

## Local testing
Service workers need HTTPS or localhost. Opening `index.html` directly from a file manager will not properly test offline caching. If Python is installed, run `python3 -m http.server 8000` from this folder and open `http://localhost:8000` for a basic page preview (service workers are allowed on localhost).
