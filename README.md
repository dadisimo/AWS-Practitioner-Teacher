# Any Practitioner Teacher 🎓

A universal, interactive mobile-first web application for learning and exam preparation on **any subject**. Drop your study materials into the `unformatted/` folder and Copilot Coding Agent automatically builds quiz sections for you.

## Features

- **Universal Subject Support** — Works for AWS, Kubernetes, Networking, History, Medicine, Law, or anything else
- **Auto-generated Sections** — Add any `.json`, `.txt`, or `.md` file to `unformatted/` and the agent creates structured quiz sections
- **Interactive Learning Flow**:
  - Take a quiz for each section
  - Incorrect answers open detailed documentation
  - Follow-up quiz with 3 questions to reinforce learning
  - Must answer all 3 correctly to proceed (one wrong answer returns you to documentation)
- **📊 Usage Statistics**:
  - Monthly session chart (per-device, stored locally)
  - 🗺️ Live world map showing where learners are connected (real-time with optional Firebase, demo mode without)
- **Progress Tracking** — Saved automatically in browser localStorage
- **Mobile-Responsive Design** — Study anywhere on any device
- **Certificate of Completion** — Celebrate finishing all sections

## Quick Start

```bash
git clone <repository-url>
cd Any-Practitioner-Teacher
# Open index.html in your browser, or run a local server:
python3 -m http.server 8000
# Visit http://localhost:8000
```

> **Note:** The app loads quiz files via `fetch()`. You must open it via a local server (not `file://`) for it to work correctly.

## Adding Your Own Content

1. Put any study material (questions, notes, exam dumps) in the `unformatted/` folder.
2. Push to your repo — Copilot Coding Agent will automatically process the file, create/update sections, regenerate the manifest, and open a PR.

Or run the agent manually on a specific file.

## Project Structure

```
Any-Practitioner-Teacher/
├── index.html              # Main HTML structure
├── styles.css              # Responsive CSS styles
├── app.js                  # Core quiz application logic
├── stats.js                # Stats screen, visit chart, live map
├── firebase-config.js      # Optional Firebase config for real-time map
├── generate-manifest.js    # CLI: regenerate questions/manifest.json
├── questions/
│   ├── manifest.json       # Auto-generated list of active sections
│   └── *.json              # One JSON file per quiz section
├── unformatted/            # Drop new content here for auto-processing
└── README.md               # This file
```

## Enabling the Live Connected-Users Map

The stats map works out of the box in **demo mode** (shows your own location + example markers). To show real connected users:

1. Create a free Firebase project at https://console.firebase.google.com
2. Add a **Realtime Database** (start in test mode)
3. Open `firebase-config.js` and fill in your project's config values
4. Set `FIREBASE_ENABLED = true`

Firebase web config values are **not secrets** and are safe to commit.

## Technologies Used

- HTML5, CSS3, Vanilla JavaScript (no framework)
- [Leaflet.js](https://leafletjs.com/) — interactive map
- [Chart.js](https://www.chartjs.org/) — visit history chart
- [ipapi.co](https://ipapi.co/) — IP-based geolocation (free tier)
- [OpenStreetMap](https://www.openstreetmap.org/) — map tiles
- Firebase Realtime Database (optional) — live presence

## Publishing

### GitHub Pages
1. Push to GitHub
2. Go to **Settings → Pages**, select the `main` branch
3. Your site is live at `https://YOUR-USERNAME.github.io/Any-Practitioner-Teacher/`

### Netlify / Vercel
Drag-and-drop the folder on Netlify, or import the repo on Vercel — both deploy instantly for free.

## License

Educational use. All trademarks belong to their respective owners.
