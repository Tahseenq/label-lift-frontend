# Mini Music Distribution Dashboard - Next.js

## Setup

1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000

## Features implemented
- Login (mock) with session stored in localStorage
- Dashboard with track listing (Title, Artist, Release Date, Status)
- Upload new track (mock, POSTs to /api/tracks)
- Track details page `/track/[id]`
- Bonus: basic search/filter and theme switcher (persisted in localStorage)

Notes: API is mock-backed and in-memory; restarting dev server resets tracks.
