# Project Proposal: Cent Graphics — Color Palette Web App
**Version:** Final  
**Type:** Fullstack Web App  
**Status:** ✅ COMPLETE  
**Started:** Juli 2026  
**Completed:** 22 Juli 2026  
**Developer:** Vincent  

---

## Overview

Cent Graphics adalah web app untuk designer dan creative yang butuh referensi color palette yang mudah diakses, disimpan, dan dikontribusikan. Ide ini lahir dari pengalaman pribadi sebagai designer — dulu harus simpan palette favorit manual di Illustrator atau folder, tidak ada satu tempat yang centralized dan personal.

Web ini menjawab tiga kebutuhan nyata: browse palette yang curated, copy hex code langsung dengan satu klik, dan save koleksi sendiri. Sifatnya bukan read-only — ada interaksi, ada ownership, ada use case yang genuine.

Reference visual: Miyama Graphics design system (clean, pastel, typography-driven). Reference fungsional: ColorHunt.co — tapi dengan auth, personal collection, dan fullstack implementation sendiri.

---

## Live URLs

| | URL |
|--|--|
| Frontend | https://cent-graphics.vercel.app |
| Backend API | https://cent-graphics-production.up.railway.app/api |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React (Vite) |
| Routing | React Router |
| Styling | CSS (per component) |
| Backend | Node.js + Express |
| Database | MongoDB Atlas + Mongoose |
| Auth | JWT + bcrypt |
| Deploy Frontend | Vercel |
| Deploy Backend | Railway |

---

## Features Completed

- ✅ Browse 6 color editions dengan 18 palettes
- ✅ Copy hex code dengan satu klik + visual feedback "Copied!"
- ✅ Save palette ke personal collection (dengan duplicate check)
- ✅ Alert login ketika user belum login dan coba save
- ✅ Collection page — empty state + grid view
- ✅ Remove palette dari collection
- ✅ Register dan login dengan JWT auth
- ✅ Password hashing dengan bcrypt
- ✅ Logout — Navbar berubah LOGIN/LOGOUT berdasarkan auth state
- ✅ Hamburger menu mobile responsive
- ✅ Anchor scroll dari Navbar ke section
- ✅ Data persist di localStorage setelah refresh
- ✅ Clean minimal UI — palette cards yang jadi focal point visual

---

## Project Structure

```
cent-graphics/
├── client/                    # React frontend
│   ├── src/
│   │   ├── api/
│   │   │   └── index.js       # Centralized API calls
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── Auth.jsx
│   │   │   │   └── Auth.css
│   │   │   ├── collection/
│   │   │   │   ├── Collection.jsx
│   │   │   │   └── Collection.css
│   │   │   ├── data/
│   │   │   │   └── palettes.js
│   │   │   ├── home/
│   │   │   │   ├── Home.jsx
│   │   │   │   └── Home.css
│   │   │   └── navbar/
│   │   │       ├── Navbar.jsx
│   │   │       └── Navbar.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── index.html
│
└── server/                    # Express backend
    ├── controllers/
    │   ├── authController.js
    │   └── paletteController.js
    ├── middlewares/
    │   └── auth.js
    ├── models/
    │   ├── User.js
    │   └── Palette.js
    ├── routes/
    │   ├── authRoutes.js
    │   └── paletteRoutes.js
    ├── .env                   # tidak di-push ke GitHub
    ├── .gitignore
    └── app.js
```

---

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/auth/register | No | Register user baru |
| POST | /api/auth/login | No | Login, return JWT |
| GET | /api/palettes | No | Get all palettes |
| POST | /api/palettes | Yes | Submit palette baru |
| POST | /api/palettes/:id/save | Yes | Save palette ke favorit |
| DELETE | /api/palettes/:id/save | Yes | Unsave palette |

---

## Definition of Done ✅

- [x] App live dan bisa diakses dari URL publik
- [x] User bisa register dan login
- [x] User bisa save palette ke collection
- [x] Copy hex code dengan satu klik
- [x] Alert login ketika belum authenticated
- [x] UI clean, minimal, responsive
- [x] GitHub repo dengan README
- [x] Backend live di Railway
- [x] Frontend live di Vercel

---

## Progress Log

**9 Juli 2026** — Navbar dan Hero selesai dari blank canvas tanpa tutorial
- Vite pakai `../../` untuk path assets karena folder nesting
- Import image harus lewat import statement, bukan string path
- `list-style: none` untuk hilangkan bullet default dari ul
- react-icons install sekali, import per icon sesuai prefix library

**10 Juli 2026** — Features, Palettes, Typography, Footer selesai
- CSS Flexbox untuk layout multi-column
- `flex: 0 0 calc(50% - 0.5rem)` untuk grid 2x2 yang fixed — `flex: 1 1` akan stretch, `flex: 0 0` tidak
- `calc(50% - 0.5rem)` bukan `calc(50% - 1rem)` karena gap 1rem dibagi dua per card
- Hardcoded JSX tidak scalable — refactor ke data-driven `.map()` jauh lebih clean

**14 Juli 2026** — JS + React Hooks selesai
- State harus spesifik ke item bukan boolean global untuk individual feedback
- Selalu wrap state update dalam kondisi kalau ada guard clause
- `flatMap` untuk flatten nested array, `filter` + `includes` untuk lookup by ID
- localStorage perlu `JSON.stringify` saat simpan dan `JSON.parse` saat ambil

**20-21 Juli 2026** — Backend fullstack selesai dan live di Railway
- Express + MongoDB + JWT auth flow dari nol
- bcrypt untuk hash password — jangan pernah simpan plain text
- JWT middleware pattern: `req.headers.authorization?.split(' ')[1]`
- Railway deploy: jangan set PORT di Variables, biarkan Railway inject sendiri
- MongoDB Atlas Network Access: whitelist `0.0.0.0/0` untuk production
- `.env` harus di `.gitignore` — jangan pernah push credentials ke GitHub
- ES Module di Node.js: setiap import file lokal harus include `.js` extension

**22 Juli 2026** — Styling polish dan deploy final
- `flex: 0 0` vs `flex: 1 1` — kunci untuk card sizing yang tidak stretch
- Dark footer dengan `filter: brightness(0) invert(1)` untuk invert logo ke putih
- `drop-shadow` di `filter` lebih proper dari `box-shadow` untuk PNG dengan transparency
- Empty state sebagai invitation to act, bukan placeholder

---

## Notes

- React Router: `<Link to="/page">` untuk halaman, `<a href="#section">` untuk anchor scroll
- JWT disimpan di localStorage, dikirim via `Authorization: Bearer {token}` header
- Railway PORT: jangan di-set manual di Variables — biarkan Railway inject via `process.env.PORT`
- `localStorage.clear()` di DevTools Console untuk reset data saat development
- Password di-hash dengan bcrypt sebelum simpan ke DB — tidak pernah plain text
