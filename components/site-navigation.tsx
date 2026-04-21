"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SiteLogo } from "@/components/site-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Typing Speed Test" },
  { href: "/tips", label: "Tips" },
  { href: "/typing-speed-test-30-seconds", label: "30 second test" },
  { href: "/typing-speed-test-1-minute", label: "1 minute test" },
  { href: "/typing-speed-test-90-seconds", label: "90 second test" },
  { href: "/typing-speed-test-2-minutes", label: "2 minute test" },
  { href: "/typing-speed-test-5-minutes", label: "5 minute test" },
  { href: "/contact", label: "Contact" },
] as const

interface SiteNavigationProps {
  /** Call when a nav link is followed (e.g. close mobile menu) */
  onNavigate?: () => void
  className?: string
  /** Slides in a sheet: no flex-grow so the panel sizes to content and scrolls as one */
  embeddedInDrawer?: boolean
}

export function SiteNavigation({ onNavigate, className, embeddedInDrawer }: SiteNavigationProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "z-30 flex flex-col gap-4 bg-zinc-50/95 px-4 pb-4 pt-[max(1rem,env(safe-area-inset-top,0px))] backdrop-blur-md dark:bg-[#0a0a0a]/95 md:py-6 md:pb-4 md:pt-6",
        embeddedInDrawer ? "min-h-0 flex-none" : "min-h-0 flex-1",
        className,
      )}
      aria-label="Main navigation"
    >
      <Link
        href="/"
        onClick={onNavigate}
        className="flex shrink-0 items-center gap-2.5 rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-blue-500/80"
      >
        <SiteLogo
          width={200}
          height={48}
          className="h-10 w-auto max-w-[min(100%,12rem)] shrink-0 object-contain object-left"
          priority
        />
      </Link>

      <ul
        className={cn(
          "flex flex-col gap-0.5 border-t border-zinc-200 pt-4 dark:border-neutral-800/50 md:border-t-0 md:pt-0",
          embeddedInDrawer ? "flex-none" : "min-h-0 flex-1 overflow-y-auto",
        )}
      >
        {navItems.map(({ href, label }) => {
          const isActive =
            href.startsWith("#") ? false : href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
          return (
            <li key={label}>
              <Link
                href={href}
                onClick={onNavigate}
                className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors md:py-2 ${
                  isActive
                    ? "bg-zinc-200 text-zinc-900 dark:bg-neutral-800 dark:text-white"
                    : "text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900 dark:text-neutral-400 dark:hover:bg-neutral-800/60 dark:hover:text-white"
                } `}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>

      <div
        className={cn(
          "shrink-0 border-t border-zinc-200 pt-4 dark:border-neutral-800/50",
          !embeddedInDrawer && "mt-auto",
        )}
      >
        <ThemeToggle />
      </div>
    </nav>
  )
}
