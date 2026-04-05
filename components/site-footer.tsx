"use client"

import { Copyright } from "lucide-react"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="shrink-0 border-t border-zinc-200 bg-zinc-50/95 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] backdrop-blur-md dark:border-neutral-800/50 dark:bg-[#0a0a0a]/95"
    >
      <p className="flex items-center justify-center gap-2 text-center text-xs leading-relaxed text-zinc-500 sm:text-sm dark:text-neutral-500">
        <Copyright className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
        <span>
          {year} TypingChecker. All rights reserved.
        </span>
      </p>
    </footer>
  )
}
