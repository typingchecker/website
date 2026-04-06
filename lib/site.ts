/** Canonical site origin — keep in sync with `metadataBase` in `app/layout.tsx` */
export const SITE_URL = "https://typingchecker.com"

export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "")
  if (!path || path === "/") return `${base}/`
  const p = path.startsWith("/") ? path : `/${path}`
  return `${base}${p}`
}
