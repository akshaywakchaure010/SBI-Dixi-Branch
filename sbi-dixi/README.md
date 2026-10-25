# SBI Dixi Branch — React + Vite

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where things live
- `src/data/services.js` — all 18 services (steps, documents, who to meet, filter categories)
- `src/data/team.js` — the six branch staff
- `src/i18n/strings.js` — English + Marathi UI text (add keys here)
- `src/styles.css` — design tokens at the top (`--navy`, `--blue`, `--cream` …) and fonts (`--f-display` …)
- `public/images/` — **replace `hero-farmer.jpg` and `phone-woman.jpg` with the original photos**
  (the ones included are low-resolution crops taken from the design screenshots)

## Notes
- Open/closed status uses India time: Mon–Sat 10:00–16:00, closed Sundays and 2nd/4th Saturdays
  (`src/hooks/useBranchStatus.js`). Public holidays are not modelled.
- Marathi covers the interface, service names and one-line descriptions. Step/document lists in
  the drawers are English-only until translated (they fall back automatically).
- The map uses Google's keyless embed. Swap `MAP_SRC` in `Visit.jsx` for the Embed API + key if you have one.
- Deploying under a sub-path? Set `base` in `vite.config.js`; image URLs already respect it.
