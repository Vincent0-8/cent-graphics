# Project Proposal: Cent Graphics — Color Palette Web App
**Version:** Rev 2  
**Type:** Fullstack Web App  
**Status:** In Progress  
**Started:** Juli 2026  
**Target Completion:** 31 Juli 2026  
**Developer:** Vincent  

---

## Overview

Cent Graphics adalah web app untuk designer dan creative yang butuh referensi color palette yang mudah diakses, disimpan, dan dikontribusikan. Ide ini lahir dari pengalaman pribadi sebagai designer — dulu harus simpan palette favorit manual di Illustrator atau folder, tidak ada satu tempat yang centralized dan personal.

Web ini menjawab tiga kebutuhan nyata: browse palette yang curated, copy hex code langsung dengan satu klik, dan save koleksi sendiri. User juga bisa submit palette mereka sendiri ke komunitas. Sifatnya bukan read-only — ada interaksi, ada ownership, ada use case yang genuine.

Reference visual: Miyama Graphics design system (clean, pastel, typography-driven). Reference fungsional: ColorHunt.co — tapi dengan auth, personal collection, dan user submission.

---

## User Needs

- Browse color palettes yang curated dan aesthetic
- Copy hex code dengan satu klik tanpa friction
- Save palette favorit ke koleksi pribadi
- Submit palette sendiri untuk dikontribusikan
- Register dan login untuk akses personal collection

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React (Vite) |
| Routing | React Router |
| Styling | CSS (per component) |
| Backend | Node.js + Express |
| Database | MongoDB + Mongoose |
| Auth | JWT |
| Deploy Frontend | Vercel |
| Deploy Backend | Render |

---

## Scope

### Phase 1 — Frontend HTML/CSS ✅ SELESAI
- Navbar (logo, links, hamburger button)
- Hero (tagline, subtext, CTA button)
- Features/About (3 value proposition cards)
- Palettes (6 editions, data-driven dengan .map())
- Typography showcase (Noto Sans JP + Playfair Display)
- Contact / Footer

### Phase 2 — JS + React Hooks ⬅️ SEDANG BERJALAN
**Selesai:**
- ✅ Copy hex code onClick → clipboard (dengan visual feedback "Copied!")
- ✅ Save palette ke localStorage (dengan duplicate check)
- ✅ Data persist setelah refresh

**Perlu diselesaikan:**
- [ ] Halaman `/collection` — tampilkan saved palettes dengan tombol remove
- [ ] React Router setup (Link, Routes, halaman baru)
- [ ] Lookup palette data by ID dari palettes.js menggunakan `.find()`
- [ ] handleRemove — hapus dari savedPalettes dan localStorage
- [ ] Hamburger menu toggle (useState + CSS transition)
- [ ] Visual feedback di tombol "Add to Collection" — berubah kalau sudah disave

### Phase 3 — Backend + Auth
- `POST /api/auth/register` — register user baru
- `POST /api/auth/login` — login, return JWT
- `GET /api/palettes` — ambil semua palette dari DB
- `POST /api/palettes` — submit palette baru (auth required)
- `POST /api/palettes/:id/save` — save ke favorit (auth required)
- `DELETE /api/palettes/:id/save` — unsave palette

**Mongoose Schemas:**
```js
// User
{
  username: String,
  email: String,
  password: String, // hashed dengan bcrypt
  savedPalettes: [ObjectId]
}

// Palette
{
  name: String,
  colors: [String],
  edition: String,
  tags: [String],
  submittedBy: ObjectId,
  createdAt: Date
}
```

### Phase 4 — Deploy + Polish
- Deploy backend ke Render
- Deploy frontend ke Vercel
- Fix production bugs
- Tulis README + case study notes

---

## Weekly Timeline

### Week 1 — HTML/CSS Frontend ✅ SELESAI
Semua sections selesai, layout clean, 6 color editions dengan data real.

### Week 2 — JS + React Hooks (Sedang berjalan)
| Hari | Target | Status |
|------|--------|--------|
| Hari 8 | Copy hex onClick | ✅ Selesai |
| Hari 9 | Save palette + localStorage | ✅ Selesai |
| Hari 10 | Halaman Collection + React Router | 🔄 Next |
| Hari 11 | Hamburger menu toggle | ⬜ Pending |
| Hari 12 | Visual feedback tombol save | ⬜ Pending |
| Hari 13–14 | Polish + bug fix | ⬜ Pending |

### Week 3 — Backend + Auth
| Hari | Target | Deliverable |
|------|--------|-------------|
| Hari 15 | Init Express + server.js | Backend jalan di localhost |
| Hari 16 | MongoDB connect + schemas | User dan Palette model ada |
| Hari 17–18 | Auth routes (register/login + JWT) | Token return saat login |
| Hari 19–20 | Palette CRUD routes | GET, POST jalan di Postman |
| Hari 21 | Save/unsave endpoint | Favorit tersimpan per user |

### Week 4 — Connect + Deploy
| Hari | Target | Deliverable |
|------|--------|-------------|
| Hari 22 | Frontend fetch dari backend | Data real dari MongoDB di UI |
| Hari 23 | Auth flow di frontend | Register, login, protected route |
| Hari 24 | Deploy Render + Vercel | App live di internet |
| Hari 25 | Fix production bugs + README | Repo siap ditunjukkan |

---

## Daily Rules

1. Stuck lebih dari 45 menit → tulis hypothesis dulu, baru Google atau tanya AI
2. Tidak ada tutorial — kalau butuh referensi, buka docs resmi
3. Satu deliverable per hari minimum
4. Dokumentasikan setiap stuck di Progress Log

---

## Definition of Done

Sebelum 1 Agustus 2026:

- [ ] App live dan bisa diakses dari URL publik
- [ ] User bisa register, login, save palette
- [ ] User bisa submit palette baru
- [x] Copy hex code dengan satu klik
- [ ] UI responsive dan keliatan bagus
- [ ] GitHub repo dengan README yang jelas
- [ ] Bisa explain setiap bagian kode ke orang lain

---

## Progress Log

**Tanggal:** 9 Juli 2026
**Milestone:** Navbar dan Hero selesai dari blank canvas tanpa tutorial
**Yang dipelajari:**
- Vite pakai `../../` untuk path assets karena folder nesting
- Import image di Vite harus lewat import statement, bukan string path langsung
- `list-style: none` untuk hilangkan bullet default dari ul
- react-icons install sekali, import per icon sesuai prefix library

---

**Tanggal:** 10 Juli 2026
**Milestone:** Features, Palettes, Typography, Footer selesai
**Yang dipelajari:**
- CSS Flexbox untuk layout multi-column
- `flex: 1 1 calc(50% - 1rem)` + `max-width` untuk grid 2x2 yang responsive
- Hardcoded JSX tidak scalable — refactor ke data-driven `.map()` jauh lebih clean

---

**Tanggal:** 14 Juli 2026
**Stuck di mana:** Hex code semua berubah jadi "Copied" sekaligus saat diklik
**Hypothesis awal:** State `isCopied` berlaku global untuk semua hex
**Solusi:** Ganti `useState(false)` ke `useState(null)`, simpan nilai hex yang diklik bukan boolean. Kondisi render jadi `copiedColor === color` per item
**Yang dipelajari:** State harus spesifik ke item, bukan boolean global, kalau mau feedback individual

---

**Tanggal:** 14 Juli 2026
**Stuck di mana:** Save palette duplikat masuk terus
**Hypothesis awal:** Logic update state dipanggil dua kali
**Solusi:** Pindahkan semua logic ke dalam `if (!savedPalettes.includes(paletteId))` — jangan update state di luar kondisi
**Yang dipelajari:** Selalu wrap state update dalam kondisi kalau ada guard clause

---

## Notes

- Mobile menu = bagian Navbar, bukan halaman terpisah
- Hover states = CSS `:hover`, bukan JavaScript
- React Router = `<Link to="/page">`, bukan `<a href>`
- Frontend ke backend = lewat `fetch()`, bukan import langsung
- JWT = simpan di localStorage, kirim via Authorization header setiap request ke protected route
- Password harus di-hash di backend (bcrypt) — jangan pernah simpan plain text
- `localStorage.clear()` di console DevTools untuk reset saved data saat development
- savedPalettes di state hanya simpan ID — perlu `.find()` dari palettes.js untuk dapat data lengkap di halaman Collection

