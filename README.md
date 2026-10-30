# Karunya Jothika Selvarajan: Portfolio

React + Vite portfolio. No paid services needed.

## Run locally
```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Before publishing
1. **Add your photo:** save it as `public/assets/profile.jpg` (square-ish, ~800px). Until then, a "KJ" placeholder shows.
2. **Edit content:** everything (text, links, phone on/off) is in `src/data.js`. Set `showPhone: false` to hide your number.
3. **Resume/certificates:** originals are in `public/assets/` and `public/certificates/` (thumbnails in `thumbs/`). To replace a file, keep the same name.

## Deploy on Vercel (recommended)
Push to GitHub, then on vercel.com choose **Add New → Project**, import the repo. Framework: Vite (auto-detected). Build: `npm run build`, output: `dist`.

## Deploy on GitHub Pages
`npm run build`, then publish the `dist/` folder (e.g. with the `gh-pages` branch or a GitHub Actions Pages workflow). `base: './'` is already set so sub-paths work.
