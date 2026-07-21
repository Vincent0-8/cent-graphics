# Project Proposal: Cent Graphics — Color Palette Web App
**Version:** Rev 1  
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

### Phase 1 — Frontend HTML/CSS (Week ini)
Build semua section landing page sampai keliatan bagus di desktop. Fokus struktur dan styling dulu, JS belakangan.

**Sections:**
- Navbar (logo, links, hamburger — hamburger logic di Phase 2)
- Hero (tagline, subtext, CTA button) ✅
- Features/About (tiga value proposition cards)
- Palettes (grid palette cards dengan warna + nama)
- Typography showcase (font pairing recommendations)
- Contact / Footer

**Target:** Semua section render dengan baik, layout clean, palette Miyama applied, font Noto Sans JP loaded.

### Phase 2 — JS + React Hooks (Minggu depan)
Tambah interactivity ke struktur yang sudah ada.

**Fitur:**
- Copy hex code onClick → clipboard
- Save palette ke favorit (useState + localStorage dulu)
- Hamburger menu toggle (useState + CSS transition)
- Newsletter email input (onSubmit handler)
- Filter palette by mood/tag

### Phase 3 — Backend + Auth
Build API dan connect ke frontend.

**API Endpoints:**
- `POST /api/auth/register` — register user baru
- `POST /api/auth/login` — login, return JWT
- `GET /api/palettes` — ambil semua palette
- `POST /api/palettes` — submit palette baru (auth required)
- `POST /api/palettes/:id/save` — save ke favorit (auth required)
- `DELETE /api/palettes/:id/save` — unsave palette

**Mongoose Schemas:**

```js
// User
{
  username: String,
  email: String,
  password: String (hashed),
  savedPalettes: [ObjectId]
}

// Palette
{
  name: String,
  colors: [String],    // array hex codes, e.g. ["#FFE59A", "#FFB5C1"]
  tags: [String],      // ["pastel", "warm", "minimal"]
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

### Week ini — HTML/CSS Frontend
| Hari | Target | Deliverable |
|------|--------|-------------|
| Hari 1 | Navbar + Hero | ✅ Selesai |
| Hari 2 | Features/About section | 3 cards render di browser |
| Hari 3 | Palettes section | Grid palette cards dengan warna |
| Hari 4 | Typography section | Font pairing showcase |
| Hari 5 | Contact + Footer | Semua section lengkap |
| Hari 6–7 | Styling polish desktop | Layout clean, spacing konsisten |

### Minggu depan — JS + React Hooks
| Hari | Target | Deliverable |
|------|--------|-------------|
| Hari 8 | Copy hex onClick | Klik warna → hex ter-copy |
| Hari 9 | Save palette useState | Tombol save toggle |
| Hari 10 | Hamburger menu | Mobile menu buka/tutup |
| Hari 11 | Filter palette by tag | Klik tag → palette filter |
| Hari 12–14 | Polish + bug fix | Semua interaksi jalan smooth |

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
- [ ] Copy hex code dengan satu klik
- [ ] UI responsive dan keliatan bagus
- [ ] GitHub repo dengan README yang jelas
- [ ] Bisa explain setiap bagian kode ke orang lain

---

## Progress Log

### Template entry:
```
**Tanggal:**
**Stuck di mana:**
**Hypothesis awal:**
**Yang dicoba:**
**Solusi:**
**Yang dipelajari:**
```

### Log

**Tanggal:** 9 Juli 2026
**Milestone:** Navbar dan Hero selesai dari blank canvas tanpa tutorial
**Yang dipelajari:** 
- Vite pakai `../../` untuk path assets karena folder nesting
- Import image di Vite harus lewat import statement, bukan string path langsung
- `list-style: none` untuk hilangkan bullet default dari ul
- react-icons install sekali, import per icon sesuai prefix library

---
**Tanggal:** 10 Juli 2026
**Stuck di mana:** - 
**Hypothesis awal:** 
**Yang dicoba:**
**Solusi:**
**Yang dipelajari:** CSS Specifically

## Notes

- Mobile menu = bagian Navbar, bukan halaman terpisah
- Hover states = CSS `:hover`, bukan JavaScript
- React Router = `<Link to="/page">`, bukan `<a href>`
- Frontend ke backend = lewat `fetch()`, bukan import langsung
- JWT = simpan di localStorage, kirim via Authorization header setiap request ke protected route
- Password harus di-hash di backend (bcrypt) sebelum simpan ke DB — jangan pernah simpan plain text

