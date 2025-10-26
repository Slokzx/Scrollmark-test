# Scrollmark Test

Scrollable social insights concept built with React, TypeScript, and Vite. The app renders a creator post card and a profile intelligence card that share a synchronized light/dark theme toggle, interactive stats, and a lightweight carousel for top-performing content.

## Features
- Two high-fidelity cards highlighting post engagement and creator performance fed by `src/data/post.json`.
- Global light/dark theme switch with persistent body-level variables to restyle every surface.
- Accessible UI primitives (`IconButton`, `PillButton`, `ExpandableText`, `Stat`, `TrendStat`) with keyboard-friendly controls and descriptive `aria` labels.
- Scrollable media carousel with smooth paging buttons and call-to-action slot.
- Pure CSS styling with gradient surfaces, shadows, and responsive layout tuned for desktop and tablet breakpoints.

## Tech Stack
- React 19 with functional components and hooks.
- TypeScript data contracts in `src/types.ts`.
- Vite 7 build tooling and dev server.
- PostCSS-compatible global CSS modules for theming.

## Getting Started
1. Install dependencies: `npm install`
2. Start the local dev server: `npm run dev`
3. Build for production: `npm run build`
4. Preview the production build locally: `npm run preview`
5. Lint the codebase: `npm run lint`

## Project Structure
```text
src/
  components/      Reusable UI blocks (cards, buttons, stats, carousel)
  data/post.json   Mock social analytics payload powering the UI
  App.tsx          Entry composition of the post and profile cards
  types.ts         Typed contracts for all data consumed in the app
public/            Static assets served as-is by Vite
```

## Customizing the Demo
- Update `src/data/post.json` to experiment with alternative creators, metrics, and imagery.
- Extend component variants in `src/components` to add new stats or buttons.
- Adjust global theming tokens in `src/App.css` to explore different palettes or spacing scales.

## Deployment
- The project ships with a `deploy` script targeting GitHub Pages (`npm run deploy`) after a production build. Update the `homepage` field in `package.json` if you host it elsewhere.
