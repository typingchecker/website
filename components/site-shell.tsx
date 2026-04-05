"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { SiteLogo } from "@/components/site-logo"
import { SiteFooter } from "@/components/site-footer"
import { SiteNavigation } from "@/components/site-navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface SiteShellProps {
  children: React.ReactNode
  /** Optional extra classes for the `<main>` element */
  mainClassName?: string
}

export function SiteShell({ children, mainClassName }: SiteShellProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-[100dvh] flex-col bg-zinc-100 dark:bg-[#0a0a0a]">
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <div className="sticky top-0 z-40 flex w-full items-center justify-between border-b border-zinc-200 bg-zinc-50/95 px-3 py-3 pt-[max(0.75rem,env(safe-area-inset-top,0px))] backdrop-blur-md dark:border-neutral-800/50 dark:bg-[#0a0a0a]/95 md:hidden">
            <Link href="/" className="flex min-w-0 items-center" aria-label="Home">
              <SiteLogo
                width={180}
                height={40}
                className="h-8 w-auto max-w-[10rem] object-contain object-left"
                priority
              />
            </Link>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-800 shadow-sm transition-colors hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" aria-hidden />
              </button>
            </SheetTrigger>
          </div>
          <SheetContent
            side="left"
            className="w-[min(100vw-1rem,20rem)] gap-0 overflow-y-auto border-zinc-200 bg-zinc-50 p-0 dark:border-neutral-800 dark:bg-[#0a0a0a] sm:max-w-sm"
          >
            <SiteNavigation
              embeddedInDrawer
              className="flex-none border-b border-zinc-200 pb-4 dark:border-neutral-800/50"
              onNavigate={() => setMobileMenuOpen(false)}
            />
          </SheetContent>
        </Sheet>

        <div className="hidden min-h-0 w-full shrink-0 flex-col border-b border-zinc-200 bg-zinc-50 dark:border-neutral-800/50 dark:bg-[#0a0a0a] md:flex md:h-full md:w-56 md:overflow-hidden md:border-b-0 md:border-r md:border-zinc-200 dark:md:border-neutral-800/50">
          <SiteNavigation />
        </div>

        <div className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-200/40 via-transparent to-zinc-300/30 dark:from-neutral-900/20 dark:to-neutral-900/40" />

          <main
            className={cn(
              "relative z-10 flex min-h-0 flex-1 flex-col w-full max-w-[100vw] pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(3rem,env(safe-area-inset-bottom,0px)+1.5rem)] pt-6 sm:pl-6 sm:pr-6 sm:pb-16 lg:pl-8 lg:pr-8",
              mainClassName,
            )}
          >
            {children}
          </main>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
