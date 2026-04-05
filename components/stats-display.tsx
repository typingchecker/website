"use client"

import { Volume2, VolumeX } from "lucide-react"

interface StatsDisplayProps {
  wpm: number
  accuracy: number
  timeLeft?: number | null
  /** Challenge duration (seconds); used when timeLeft is not set yet */
  selectedTime: number
  isChallenge?: boolean
  soundEnabled: boolean
  onSoundToggle: () => void
}

export function StatsDisplay({
  wpm,
  accuracy,
  timeLeft,
  selectedTime,
  isChallenge,
  soundEnabled,
  onSoundToggle,
}: StatsDisplayProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const displaySeconds = isChallenge ? (timeLeft ?? selectedTime) : null
  const showChallengeTime = isChallenge && displaySeconds !== null
  const isUrgent = isChallenge && timeLeft != null && timeLeft <= 10

  const rowClass =
    "flex w-full min-h-[44px] items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white px-3 py-2 dark:border-neutral-700/50 dark:bg-neutral-900/50"

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-neutral-500">Live stats</p>

      {showChallengeTime && (
        <div
          className={`${rowClass} ${isUrgent ? "border-red-300 bg-red-50 dark:border-red-500/40 dark:bg-red-500/5" : ""}`}
        >
          <span className="text-xs text-zinc-600 dark:text-neutral-400">Time left</span>
          <span
            className={`font-mono text-sm font-semibold tabular-nums ${isUrgent ? "text-red-600 dark:text-red-400" : "text-zinc-900 dark:text-white"}`}
          >
            {formatTime(displaySeconds)}
          </span>
        </div>
      )}

      <div className={rowClass}>
        <span className="text-xs text-zinc-600 dark:text-neutral-400">Key sound</span>
        <button
          type="button"
          onClick={onSoundToggle}
          aria-label={soundEnabled ? "Mute key sound" : "Unmute key sound"}
          aria-pressed={soundEnabled}
          className="flex min-h-[40px] shrink-0 items-center gap-2 rounded-md border border-zinc-300 bg-zinc-100 px-2.5 py-1.5 text-xs font-medium text-zinc-800 transition-colors touch-manipulation hover:bg-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 dark:border-neutral-600/60 dark:bg-neutral-800/80 dark:text-neutral-200 dark:hover:bg-neutral-700/80"
        >
          {soundEnabled ? (
            <Volume2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden />
          ) : (
            <VolumeX className="h-4 w-4 text-zinc-500 dark:text-neutral-500" aria-hidden />
          )}
          <span className="text-zinc-700 dark:text-neutral-300">{soundEnabled ? "On" : "Off"}</span>
        </button>
      </div>

      <div className={rowClass}>
        <span className="text-xs text-zinc-600 dark:text-neutral-400">Speed (WPM)</span>
        <span className="font-mono text-sm font-semibold tabular-nums text-zinc-900 dark:text-white">{wpm}</span>
      </div>

      <div className={rowClass}>
        <span className="text-xs text-zinc-600 dark:text-neutral-400">Accuracy</span>
        <span className="font-mono text-sm font-semibold tabular-nums text-zinc-900 dark:text-white">{accuracy}%</span>
      </div>
    </div>
  )
}
