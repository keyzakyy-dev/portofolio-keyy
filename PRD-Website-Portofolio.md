# PRD (Product Requirements Document)
## Website Portofolio Personal — Referensi Gaya "Animate UI"

---

## 1. Ringkasan Produk

Website portofolio personal single-page yang menampilkan profil, layanan, riwayat pekerjaan (resume), portofolio karya (work), dan kontak. Gaya visual mengacu pada landing page **Animate UI**: minimalis, hitam-putih, banyak whitespace, tipografi tegas, elemen animasi halus (micro-interactions), dan grid kartu (card grid) sebagai elemen utama navigasi konten.

**Perbedaan dengan referensi:** 4 kartu grid pada referensi (Primitives, Components, Icons, Soon) diganti menjadi 4 kartu utama:
1. **Services** (Layanan)
2. **Resume** (Riwayat/CV)
3. **Work** (Portofolio/Proyek)
4. **Contact** (Kontak)

---

## 2. Tujuan

- Menampilkan identitas profesional pemilik portofolio secara ringkas dan menarik.
- Memberi jalur navigasi cepat ke 4 area utama (Services, Resume, Work, Contact) lewat card grid yang bisa diklik.
- Menonjolkan kesan modern & "developer-grade" lewat animasi halus dan desain minimalis ala Animate UI.
- Mendorong pengunjung (recruiter/klien) untuk menghubungi atau melihat detail karya.

---

## 3. Target Pengguna

| Persona | Kebutuhan |
|---|---|
| Recruiter / HR | Cepat melihat resume & pengalaman kerja |
| Klien freelance/proyek | Melihat layanan yang ditawarkan & contoh karya (work) |
| Sesama developer/komunitas | Melihat tech stack, GitHub, cara kontak |

---

## 4. Referensi Desain (Analisis dari Gambar)

| Elemen | Detail pada Referensi |
|---|---|
| Navbar | Logo + nama brand (kiri), ikon sosial (GitHub dengan star count, X/Twitter), toggle dark/light mode (kanan) |
| Badge | Pill kecil "New ✨ [Fitur Terbaru]" di atas heading, warna hitam solid |
| Hero Heading | Judul besar, bold, 1 baris/2 baris, warna hitam pekat |
| Sub-heading | Paragraf deskripsi singkat (2 baris), warna abu-abu, di tengah (centered) |
| CTA Buttons | 2 tombol: primary (hitam solid, dengan ikon panah) + secondary (outline/abu muda) |
| Tech Stack Row | Baris ikon kecil tech stack (React, TypeScript, Tailwind, dsb.) di bawah CTA |
| Card Grid | 4 kartu sejajar, rounded-corner besar, background abu muda, judul kartu pakai font italic/script, preview mockup konten di dalam kartu |
| Footer | Logo kecil + nama perusahaan/tahun, teks "Open Source Software Program", credit "Built by ... source code di GitHub" |

**Gaya visual:** flat design, warna dominan hitam/putih/abu, rounded corners besar (16–24px), font sans-serif tegas untuk heading, font script/italic untuk label kartu, spacing lega antar section.

---

## 5. Struktur Halaman (Sitemap — Single Page dengan Anchor Section)

```
/ (Home)
 ├── Navbar (sticky)
 ├── Hero Section
 ├── Card Grid Section (Services | Resume | Work | Contact)
 ├── (Opsional) Section detail tiap kartu di-scroll / anchor link (#services, #resume, #work, #contact)
 └── Footer
```

> Catatan: Card grid bisa berfungsi sebagai **navigasi anchor** (scroll ke section terkait di halaman yang sama) atau **link ke sub-halaman** (`/services`, `/resume`, `/work`, `/contact`). Rekomendasi: anchor scroll untuk menjaga kesan single-page yang smooth seperti referensi.

---

## 6. Rincian Fitur per Komponen

### 6.1 Navbar
- Logo + nama (kiri)
- Link sosial: GitHub (dengan star/label opsional diganti "Hire Me" atau LinkedIn), X/Twitter, dsb.
- Dark/Light mode toggle
- Sticky on scroll

### 6.2 Hero Section
- Badge kecil (opsional): "Available for Work 🟢" atau "New: Case Study Terbaru"
- Heading besar: nama + tagline profesi (contoh: **"Membangun Produk Digital dengan Detail & Style"**)
- Sub-heading: deskripsi singkat 1–2 kalimat tentang keahlian
- 2 CTA: **"Hire Me / Contact"** (primary) & **"View Work"** (secondary)
- Baris ikon tech stack yang dikuasai

### 6.3 Card Grid — 4 Kartu Utama

| Kartu | Isi Preview | Aksi saat Klik |
|---|---|---|
| **Services** | Ikon/list layanan singkat (mis. UI Design, Web Dev, Branding) | Scroll/navigasi ke detail daftar layanan + deskripsi tiap layanan |
| **Resume** | Preview mockup CV (garis teks + foto placeholder) | Scroll/navigasi ke timeline pengalaman kerja, pendidikan, skill, tombol **Download CV (PDF)** |
| **Work** | Grid mini thumbnail 2–3 proyek | Scroll/navigasi ke galeri portofolio lengkap dengan filter kategori |
| **Contact** | Preview form kontak singkat (nama, email) | Scroll/navigasi ke form kontak + info email/social/lokasi |

Setiap kartu: hover animation (scale-up halus, shadow muncul), label judul pakai font italic seperti referensi.

### 6.4 Detail Section: Services
- Daftar 3–6 layanan, masing-masing: ikon, judul, deskripsi singkat (1–2 kalimat)

### 6.5 Detail Section: Resume
- Ringkasan profil singkat
- Timeline pengalaman kerja (perusahaan, posisi, periode, deskripsi)
- Pendidikan
- Skill/tools (progress bar atau tag)
- Tombol download CV (PDF)

### 6.6 Detail Section: Work
- Grid/galeri proyek (thumbnail, judul, kategori/tag)
- Filter kategori (opsional: All, Web, Mobile, Design)
- Klik kartu proyek → modal atau halaman detail (deskripsi, tech stack, link demo/repo)

### 6.7 Detail Section: Contact
- Form kontak (Nama, Email, Pesan) + tombol kirim
- Info alternatif: email langsung, link sosial (LinkedIn, GitHub, Instagram)
- Opsional: peta lokasi/ketersediaan waktu respons

### 6.8 Footer
- Logo kecil + nama + tahun
- Tagline singkat (mis. "Open for freelance & collaboration")
- Copyright & link sosial

---

## 7. Desain System

| Aspek | Spesifikasi |
|---|---|
| Warna utama | Hitam (#0A0A0A), Putih (#FFFFFF), Abu (#F5F5F5, #A3A3A3) |
| Aksen (opsional) | 1 warna aksen (mis. hijau/biru) untuk status "available" atau CTA hover |
| Tipografi Heading | Sans-serif bold (mis. Inter, Geist, Satoshi) |
| Tipografi Label Kartu | Italic/script font untuk sentuhan personal (mis. "Playfair Italic") |
| Border radius | 16–24px pada card, 8–12px pada button |
| Spacing | Lega, section padding besar (80–120px vertical) |
| Dark mode | Wajib didukung (toggle di navbar) |

---

## 8. Animasi & Interaksi

- Fade-in/slide-up saat elemen masuk viewport (scroll reveal)
- Hover scale + shadow pada card grid
- Smooth scroll untuk anchor navigation
- Micro-interaction pada tombol (contoh: panah bergerak saat hover CTA)
- Transisi dark/light mode yang smooth

---

## 9. Tech Stack Rekomendasi

- **Framework:** React + Vite
- **Routing (jika perlu multi-page/anchor):** React Router (opsional, karena single-page bisa cukup pakai anchor scroll native)
- **Styling:** Tailwind CSS
- **Animasi:** Framer Motion / Animate UI component library (sesuai referensi)
- **Icon:** Lucide React
- **Form handling:** React Hook Form + validasi (mis. Zod)
- **Deployment:** Vercel / Netlify (keduanya mendukung build Vite secara native)

> Catatan teknis: Karena Vite adalah SPA (client-side rendering), perhatikan SEO — gunakan `react-helmet-async` untuk mengatur meta tag dinamis, dan pastikan build di-generate sebagai static assets yang di-serve dengan benar (base path, dsb.) saat deploy.

---

## 10. Non-Functional Requirements

- **Responsive:** mobile-first, breakpoint standar (sm/md/lg/xl)
- **Performa:** skor Lighthouse Performance ≥ 90
- **SEO:** meta title/description, Open Graph image, semantic HTML
- **Aksesibilitas:** kontras warna sesuai WCAG AA, alt text pada gambar
- **Loading:** lazy load gambar proyek pada section Work

---

## 11. User Flow Singkat

1. Pengunjung membuka halaman → melihat Hero + Badge fitur terbaru
2. Membaca tagline & tech stack singkat
3. Klik salah satu dari 4 kartu (Services/Resume/Work/Contact) → diarahkan/scroll ke section terkait
4. Jika tertarik → isi form Contact atau klik CTA "Hire Me"
5. Recruiter bisa langsung download CV dari section Resume

---

## 12. Metrik Keberhasilan (Opsional)

- Jumlah klik pada CTA "Hire Me" / form Contact terkirim
- Rata-rata waktu di halaman (engagement)
- Jumlah klik ke masing-masing kartu (Services/Resume/Work/Contact) — untuk tahu section paling diminati

---

## 13. Timeline Pengembangan (Contoh)

| Fase | Durasi | Output |
|---|---|---|
| Desain UI (Figma) | 3–5 hari | Wireframe + high-fidelity mockup |
| Setup project & komponen dasar | 2 hari | Navbar, Hero, Footer, Card Grid |
| Implementasi tiap section detail | 4–5 hari | Services, Resume, Work, Contact |
| Animasi & polish | 2–3 hari | Micro-interaction, dark mode, responsive |
| Testing & deploy | 1–2 hari | Live di Vercel |

---

*Dokumen ini adalah draft PRD yang bisa disesuaikan lebih lanjut sesuai kebutuhan spesifik (jumlah proyek, jenis layanan, dsb).*
