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

## Explanation of Approach
I started the project by setting up a new Next.js application.  
- Created mock API routes under `/api/tracks` to simulate backend data.  
- Built a **Login page** with mock authentication (localStorage session).  
- Added a **Dashboard** page to fetch and display tracks in a table.  
- Implemented a **Track Upload** page with a form that adds new tracks via POST request.  
- Added a **Dynamic Track Details** page using Next.js routing (`/track/[id]`).  
- Used **React hooks (useState, useEffect)** for state management.  
- Designed the UI to be **responsive** for mobile and desktop.  
- Bonus features: search/filter on dashboard and theme switcher (dark/light mode) stored in localStorage.  


Notes: API is mock-backed and in-memory; restarting dev server resets tracks.
