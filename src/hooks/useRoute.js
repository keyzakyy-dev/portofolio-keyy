import { useEffect, useState } from 'react'

const PAGES = ['services', 'resume', 'work', 'contact']

export function parsePath(pathname = window.location.pathname) {
  const path = pathname.replace(/^\/+|\/+$/g, '')
  if (!path) return { page: null, projectId: null }
  const [seg, projectId] = path.split('/')
  if (!PAGES.includes(seg)) return { page: null, projectId: null }
  return { page: seg, projectId: projectId || null }
}

export function useRoute() {
  const [route, setRoute] = useState(() => parsePath())
  useEffect(() => {
    const onPop = () => setRoute(parsePath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return route
}

export function navigateTo(page, projectId = null) {
  window.history.pushState({}, '', page ? (projectId ? `/${page}/${projectId}` : `/${page}`) : '/')
  window.dispatchEvent(new PopStateEvent('popstate'))
}
