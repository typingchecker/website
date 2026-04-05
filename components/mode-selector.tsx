"use client"

import { challengeTimes } from "@/lib/typing-data"

interface ModeSelectorProps {
  mode: "free" | "challenge"
  selectedTime: number
  onModeChange: (mode: "free" | "challenge") => void
  onTimeChange: (seconds: number) => void
}

export function ModeSelector({ mode, selectedTime, onModeChange, onTimeChange }: ModeSelectorProps) {
  return (
    <div className="flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
      {/* Mode toggle */}
      <div className="flex items-center justify-center rounded-full border border-zinc-200 bg-white p-1 dark:border-neutral-800 dark:bg-neutral-900">
        <button
          type="button"
          onClick={() => onModeChange("free")}
          className={`min-h-[44px] flex-1 rounded-full px-4 py-2.5 font-sans text-sm transition-all touch-manipulation sm:flex-none ${
            mode === "free"
              ? "bg-zinc-900 font-medium text-white dark:bg-white dark:text-black"
              : "text-zinc-500 active:text-zinc-900 dark:text-neutral-400 dark:active:text-white"
          }`}
        >
          Free Type
        </button>
        <button
          type="button"
          onClick={() => onModeChange("challenge")}
          className={`min-h-[44px] flex-1 rounded-full px-4 py-2.5 font-sans text-sm transition-all touch-manipulation sm:flex-none ${
            mode === "challenge"
              ? "bg-zinc-900 font-medium text-white dark:bg-white dark:text-black"
              : "text-zinc-500 active:text-zinc-900 dark:text-neutral-400 dark:active:text-white"
          }`}
        >
          Challenge
        </button>
      </div>

      {/* Time selector - only visible in challenge mode */}
      {mode === "challenge" && (
        <div className="flex flex-wrap items-center justify-center gap-1 rounded-2xl border border-zinc-200 bg-white p-1 dark:border-neutral-800 dark:bg-neutral-900 sm:rounded-full">
          {challengeTimes.map((time) => (
            <button
              type="button"
              key={time.seconds}
              onClick={() => onTimeChange(time.seconds)}
              className={`min-h-[44px] min-w-[44px] rounded-full px-3 py-2 font-mono text-sm transition-all touch-manipulation sm:min-w-0 ${
                selectedTime === time.seconds
                  ? "bg-emerald-600 font-medium text-white dark:bg-emerald-500"
                  : "text-zinc-500 active:text-zinc-900 dark:text-neutral-400 dark:active:text-white"
              }`}
            >
              {time.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
