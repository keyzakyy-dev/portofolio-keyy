# keyzakyy. — Personal Portfolio Website

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwind-css&logoColor=white)](#)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.2-black?logo=framer&logoColor=white)](#)
[![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#)

> Website portofolio personal yang mengusung gaya estetika minimalis hitam-putih mengacu pada referensi **Animate UI**. Menampilkan identitas developer, katalog layanan digital, riwayat pengalaman interaktif, showcase proyek, dan saluran kontak langsung.

🌐 **Live Demo:** [https://keyzakyy.vercel.app](https://keyzakyy.vercel.app)

---

## ✨ Fitur Utama

- **🎨 Minimalist Monochrome Design:** Tipografi tegas, kontras monokrom bersih, dan dukungan penuh **Dark / Light Mode** dengan persistensi preferensi tema.
- **⚡ Fluid Micro-interactions:** Animasi intro wordmark SVG, transisi blur-reveal pada teks sapaan (*Halo! / Hola! / Ciao! / Olá!*), dan morphing layout berbasis **Framer Motion**.
- **🗂️ Segmented Tab Control (Resume):** Tampilan riwayat pendidikan, pengalaman sensus & pemilu BPS, keahlian teknis (QGIS, Web Dev), dan bahasa dengan tab kontrol interaktif yang responsif di mobile maupun desktop.
- **💼 Interactive Work Showcase:** Galeri portofolio lengkap dengan halaman detail mandiri, daftar fitur bernomor (*Simple Numbered List*), tag teknologi, dan slider screenshot proyek interaktif.
- **🖨️ PDF & Print Ready:** Halaman resume dilengkapi tombol cetak yang langsung disesuaikan dengan stylesheet `@media print` untuk menghasilkan format CV dokumen siap unduh.
- **📬 Direct Contact Channels:** Saluran komunikasi cepat terintegrasi langsung ke **WhatsApp** (pre-filled message generator), **Email** (fitur 1-klik salin), dan form pesan ringkas.

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite 8](https://vite.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion 13](https://motion.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Linter** | [Oxlint](https://oxc.rs/) |

---

## 📁 Struktur Direktori

```text
portofolio-keyy/
├── public/
│   ├── favicon.svg             # Ikon website
│   ├── profile.jpg             # Foto profil
│   └── screenshots/            # Tangkapan layar proyek untuk slider
│       ├── webgis-cinunuk/
│       ├── lms-itg/
│       └── portfolio/
├── src/
│   ├── components/             # Komponen modular antarmuka
│   │   ├── CardGrid.jsx        # 4 Kartu navigasi utama beranimasi
│   │   ├── CounterStats.jsx    # Statistik angka bertambah otomatis
│   │   ├── Footer.jsx          # Tautan sosial dan copyright
│   │   ├── Header.jsx          # Navigasi sticky, preloader wordmark, theme toggler
│   │   ├── Hero.jsx            # Sapaan morphing, bio singkat, CTA & tech icons
│   │   └── ThemeToggler.jsx    # Tombol pergantian Dark/Light mode
│   ├── constants/
│   │   └── icons.js            # Path vektor SVG untuk ikon sosial
│   ├── pages/                  # Sub-halaman konten
│   │   ├── ContactPage.jsx     # Formulir & direct contact hub
│   │   ├── ResumePage.jsx      # Profil & riwayat dengan segmented tab
│   │   ├── ServicesPage.jsx    # Layanan digital & alur pengerjaan
│   │   └── WorkPage.jsx        # Showcase proyek & detail dengan slider
│   ├── App.jsx                 # Routing SPA & transisi halaman
│   ├── index.css               # Styling global Tailwind CSS & design tokens
│   └── main.jsx                # Entry point React
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Memulai (Getting Started)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal:

### Prasyarat
- [Node.js](https://nodejs.org/) versi 18.0 atau lebih tinggi
- npm / pnpm / yarn

### Instalasi

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/keyzakyy-dev/portofolio-keyy.git
   cd portofolio-keyy
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka browser dan akses [http://localhost:5173](http://localhost:5173).

4. **Build untuk produksi:**
   ```bash
   npm run build
   ```

5. **Linting kode:**
   ```bash
   npm run lint
   ```

---

## 👤 Profil & Kontak

**Sayyid Dzaky Farhan (keyzakyy)**  
*Mahasiswa Teknik Informatika Institut Teknologi Garut • Frontend Developer & Digital Creative*

- **GitHub:** [@keyzakyy-dev](https://github.com/keyzakyy-dev)
- **Instagram:** [@keyzakyy](https://www.instagram.com/keyzakyy/)
- **Email:** [keyzakyy.dev@gmail.com](mailto:keyzakyy.dev@gmail.com)
- **WhatsApp:** [+62 851-6666-4226](https://wa.me/6285166664226)

---

## 📄 Lisensi

Proyek ini dirilis di bawah lisensi [MIT](LICENSE). Silakan gunakan dan sesuaikan untuk kebutuhan portofolio Anda sendiri.
