"use client"

import Link from "next/link"
import { Copyright } from "lucide-react"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      className="shrink-0 border-t border-zinc-200 bg-zinc-50/95 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] backdrop-blur-md dark:border-neutral-800/50 dark:bg-[#0a0a0a]/95"
    >
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
        <p className="flex items-center justify-center gap-2 text-center text-xs leading-relaxed text-zinc-500 sm:text-sm dark:text-neutral-500">
          <Copyright className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
          <span>
            {year} TypingChecker. All rights reserved.
          </span>
        </p>
        <Link
          href="/privacy"
          className="min-h-[44px] inline-flex items-center text-xs font-medium text-zinc-600 underline-offset-2 transition-colors hover:text-zinc-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 sm:min-h-0 sm:text-sm dark:text-neutral-400 dark:hover:text-white"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
