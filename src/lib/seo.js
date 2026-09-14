import { projects } from '../data/projects.js'

const BASE_URL = 'https://keyy-portofolio.vercel.app'

const BASE_TITLE = 'Sayyid Dzaky Farhan — Frontend Developer & Digital Creative'
const BASE_DESC =
  'Portofolio Sayyid Dzaky Farhan (keyzakyy) — Frontend developer spesialis React, Tailwind CSS, animasi UI, video editing, desain logo & grafis.'

const PAGE_META = {
  services: {
    title: 'Services',
    description:
      'Jasa pembuatan website modern, video editing, desain logo profesional, dan poster & grafis digital dengan alur pengerjaan terstruktur.',
  },
  resume: {
    title: 'Resume',
    description:
      'Profil, riwayat pendidikan, pengalaman kerja BPS & pemilu, keahlian teknis, dan kemampuan bahasa Sayyid Dzaky Farhan.',
  },
  work: {
    title: 'Work',
    description:
      'Koleksi proyek digital — WebGIS Desa Cinunuk, LMS Institut Teknologi Garut, dan website portofolio — lengkap dengan studi kasus.',
  },
  contact: {
    title: 'Contact',
    description:
      'Hubungi Sayyid Dzaky Farhan untuk proyek website, video editing, atau desain grafis — via form, email, atau WhatsApp.',
  },
}

function setAttr(selector, attr, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export function applyMeta({ page, projectId }) {
  let title = BASE_TITLE
  let description = BASE_DESC
  let path = '/'

  if (page === 'work' && projectId) {
    const proj = projects.find((p) => p.id === projectId)
    if (proj) {
      title = `${proj.title} — keyzakyy.`
      description = proj.desc
      path = `/work/${proj.id}`
    } else {
      title = `${PAGE_META.work.title} — keyzakyy.`
      description = PAGE_META.work.description
      path = '/work'
    }
  } else if (page === 'not-found') {
    title = '404 — keyzakyy.'
    description =
      'Halaman yang kamu cari tidak ditemukan. Kembali ke beranda untuk jelajahi layanan, resume, dan proyek keyzakyy.'
    path = window.location.pathname || '/'
  } else if (page && PAGE_META[page]) {
    title = `${PAGE_META[page].title} — keyzakyy.`
    description = PAGE_META[page].description
    path = `/${page}`
  }

  document.title = title
  setAttr('meta[name="description"]', 'content', description)
  setAttr(
    'meta[name="robots"]',
    'content',
    page === 'not-found' ? 'noindex, nofollow' : 'index, follow'
  )
  setAttr('link[rel="canonical"]', 'href', BASE_URL + path)
  setAttr('meta[property="og:title"]', 'content', title)
  setAttr('meta[property="og:description"]', 'content', description)
  setAttr('meta[property="og:url"]', 'content', BASE_URL + path)
  setAttr('meta[name="twitter:title"]', 'content', title)
  setAttr('meta[name="twitter:description"]', 'content', description)
}
