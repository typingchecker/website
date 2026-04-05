"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className="h-11 w-full rounded-lg border border-zinc-200 bg-zinc-100 dark:border-neutral-700 dark:bg-neutral-900/50"
        aria-hidden
      />
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2.5 text-sm font-medium text-zinc-800 shadow-sm transition-colors hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 dark:border-neutral-600 dark:bg-neutral-800/80 dark:text-neutral-100 dark:hover:bg-neutral-700/80"
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4 shrink-0 text-amber-400" aria-hidden />
          <span>Light mode</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 shrink-0 text-indigo-500" aria-hidden />
          <span>Dark mode</span>
        </>
      )}
    </button>
  )
}
