import {
  Database,
  Globe,
  UserCheck,
  Briefcase,
  GraduationCap,
  Languages,
} from 'lucide-react'

export const stats = [
  { label: 'Pendidikan', value: 'S1 TI' },
  { label: 'Pengalaman BPS & Pemilu', value: '5 Event' },
  { label: 'Keahlian Utama', value: 'Data & Dev' },
  { label: 'Status', value: 'Aktif Kuliah' },
]

export const skillCategories = [
  {
    title: 'Hard Skills (Data & Spasial)',
    icon: Database,
    skills: [
      'QGIS (Pengolahan Peta Digital)',
      'Pengolahan Data Statistik',
      'Data Entry & Validasi Data',
      'Microsoft Excel (Basic)',
      'Microsoft Word',
    ],
  },
  {
    title: 'Web Development & Digital Creative',
    icon: Globe,
    skills: [
      'Pembuatan Website (React & Tailwind)',
      'Video Editing (Reels, TikTok, YouTube)',
      'Desain Logo & Identitas Brand',
      'Desain Poster & Konten Grafis',
    ],
  },
  {
    title: 'Soft Skills',
    icon: UserCheck,
    skills: [
      'Ketelitian Tinggi',
      'Kerjasama Tim & Terampil',
      'Manajemen Waktu & Target Ketat',
      'Komunikasi Efektif',
      'Problem Solving & Disiplin',
    ],
  },
]

export const languages = [
  { name: 'Bahasa Indonesia', level: 'Fasih (Native)' },
  { name: 'Bahasa Inggris', level: 'Cukup (Conversational)' },
]

export const workExperiences = [
  {
    role: 'Pengolahan Peta Wilayah Sensus',
    organization: 'Sensus Ekonomi 2026',
    period: 'Sept 2025 – Okt 2025',
    location: 'Kab. Garut',
    desc: 'Mengolah dan memperbarui peta wilayah kerja sensus menggunakan data spasial serta melakukan digitasi dan validasi peta batas wilayah.',
    highlights: [
      'Mengolah data spasial dan memperbarui peta wilayah kerja sensus',
      'Melakukan digitasi dan validasi peta untuk akurasi cakupan area sensus ekonomi',
    ],
  },
  {
    role: 'Pengawas TPS',
    organization: 'Pilkada 2024 (KPU & Bawaslu)',
    period: 'November 2024',
    location: 'Garut',
    desc: 'Mengawasi jalannya Pemilihan Kepala Daerah 2024 di TPS sesuai regulasi resmi dan menjaga integritas hasil pemungutan suara.',
    highlights: [
      'Mengawasi kepatuhan pemungutan suara terhadap regulasi KPU dan Bawaslu',
      'Mencatat, melaporkan, dan menangani temuan dugaan pelanggaran pemilu',
      'Menjaga independensi, transparansi, dan integritas pemungutan & penghitungan suara',
    ],
  },
  {
    role: 'Panitia TPS (KPPS)',
    organization: 'Pemilu Presiden 2024',
    period: 'Februari 2024',
    location: 'Garut',
    desc: 'Bertugas melayani pemilih dalam proses pencoblosan dan membantu penyusunan berita acara penghitungan suara.',
    highlights: [
      'Melayani pemilih dan memastikan kelancaran alur pemungutan suara di TPS',
      'Membantu penghitungan suara serta penyusunan berita acara hasil pemilu',
    ],
  },
  {
    role: 'Operator Entry Data',
    organization: 'Sensus Pertanian 2023 (BPS)',
    period: 'Jul 2023 – Agust 2023',
    location: 'BPS Kab. Garut',
    desc: 'Menginput dan memverifikasi data hasil sensus pertanian lapangan meliputi rumah tangga, usaha, dan lahan pertanian.',
    highlights: [
      'Melakukan input data rumah tangga, usaha, dan lahan pertanian dengan teliti',
      'Melakukan pengecekan ganda guna meminimalisir potensi kesalahan data nasional',
    ],
  },
  {
    role: 'Operator Entry Data',
    organization: 'Regsosek 2022 (Registrasi Sosial Ekonomi - BPS)',
    period: 'Jan 2022 – Maret 2022',
    location: 'BPS Kab. Garut',
    desc: 'Melakukan entri data rumah tangga dan individu hasil pendataan lapangan sesuai standar operasional BPS.',
    highlights: [
      'Melakukan entri data sosial ekonomi rumah tangga dan individu secara akurat',
      'Memastikan akurasi dan konsistensi data melalui verifikasi ketat sesuai standar BPS',
    ],
  },
]

export const educationList = [
  {
    degree: 'S1 Teknik Informatika',
    institution: 'Institut Teknologi Garut',
    period: 'September 2024 – Sekarang',
    notes: 'Mempelajari ilmu komputer, rekayasa perangkat lunak, sistem informasi, dan teknologi komputasi modern.',
  },
]

export const tabs = [
  { id: 'pengalaman', label: 'Pengalaman', icon: Briefcase },
  { id: 'pendidikan', label: 'Pendidikan', icon: GraduationCap },
  { id: 'skills', label: 'Keahlian', icon: Database },
  { id: 'bahasa', label: 'Bahasa', icon: Languages },
]
