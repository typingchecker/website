"use client"

import { StatsDisplay } from "@/components/stats-display"

interface SidebarStatsPanelProps {
  wpm: number
  accuracy: number
  timeLeft: number | null
  selectedTime: number
  isChallenge: boolean
  soundEnabled: boolean
  onSoundToggle: () => void
}

export function SidebarStatsPanel({
  wpm,
  accuracy,
  timeLeft,
  selectedTime,
  isChallenge,
  soundEnabled,
  onSoundToggle,
}: SidebarStatsPanelProps) {
  return (
    <div className="flex flex-col gap-3">
      <StatsDisplay
        wpm={wpm}
        accuracy={accuracy}
        timeLeft={timeLeft}
        selectedTime={selectedTime}
        isChallenge={isChallenge}
        soundEnabled={soundEnabled}
        onSoundToggle={onSoundToggle}
      />

      <div className="flex flex-col gap-2 border-t border-zinc-200 pt-3 dark:border-neutral-800/50">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-neutral-500">Keyboard</p>
        <div className="flex w-full min-h-[44px] items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white px-3 py-2 dark:border-neutral-700/50 dark:bg-neutral-900/50">
          <span className="text-xs leading-snug text-zinc-700 dark:text-neutral-300">Start over with a new passage</span>
          <kbd className="inline-flex min-w-[2.75rem] shrink-0 items-center justify-center rounded-md border border-zinc-300 bg-zinc-100 px-2 py-1.5 font-mono text-xs font-medium text-zinc-900 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100">
            Esc
          </kbd>
        </div>
        <div className="flex w-full min-h-[44px] items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white px-3 py-2 dark:border-neutral-700/50 dark:bg-neutral-900/50">
          <span className="text-xs leading-snug text-zinc-700 dark:text-neutral-300">Turn typing sounds on or off</span>
          <kbd className="inline-flex min-w-[2.75rem] shrink-0 items-center justify-center rounded-md border border-zinc-300 bg-zinc-100 px-2 py-1.5 font-mono text-xs font-medium text-zinc-900 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100">
            Tab
          </kbd>
        </div>
      </div>
    </div>
  )
}
