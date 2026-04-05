"use client"

import { keyboardLayout } from "@/lib/typing-utils"

interface VirtualKeyboardProps {
  pressedKey: string | null
  onKeyClick: (key: string) => void
}

export function VirtualKeyboard({ pressedKey, onKeyClick }: VirtualKeyboardProps) {
  const isKeyPressed = (key: string) => {
    if (!pressedKey) return false
    return pressedKey.toUpperCase() === key.toUpperCase()
  }

  const isSpacePressed = pressedKey === " "

  return (
    <div className="mt-8 flex w-full max-w-full flex-col items-center gap-1 px-2 sm:mt-14 sm:gap-1.5 sm:px-0">
      <div className="-mx-1 w-full overflow-x-auto overflow-y-visible px-1 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
        <div className="mx-auto flex min-w-min flex-col items-center gap-1 sm:gap-1.5">
          {keyboardLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-1 sm:gap-1.5">
              {row.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => onKeyClick(key.toLowerCase())}
                  className={`
                    h-8 min-h-[2rem] w-8 min-w-[2rem] sm:h-10 sm:min-h-[2.5rem] sm:w-10 sm:min-w-[2.5rem] md:h-12 md:min-h-[3rem] md:w-12 md:min-w-[3rem] lg:h-14 lg:w-14
                    flex items-center justify-center
                    rounded-md sm:rounded-lg
                    font-mono text-[10px] font-medium sm:text-xs md:text-sm
                    transition-all duration-75 ease-out
                    cursor-pointer select-none touch-manipulation
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 dark:focus-visible:ring-white/20
                    active:scale-[0.92] active:translate-y-0.5
                    ${
                      isKeyPressed(key)
                        ? "scale-[0.92] translate-y-0.5 bg-zinc-900 text-white shadow-md dark:bg-white dark:text-black dark:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                        : "border border-zinc-200 bg-white text-zinc-800 active:border-zinc-400 active:bg-zinc-100 dark:border-neutral-700/50 dark:bg-neutral-900/80 dark:text-neutral-300 dark:active:border-neutral-500/70 dark:active:bg-neutral-800/80 md:dark:hover:border-neutral-500/70 md:dark:hover:bg-neutral-800/80 md:hover:border-zinc-300 md:hover:bg-zinc-50"
                    }
                  `}
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => onKeyClick(" ")}
        className={`
          mt-1 flex h-11 min-h-[44px] w-full max-w-[min(100%,18rem)] items-center justify-center rounded-lg font-mono text-[10px] font-medium uppercase tracking-widest transition-all duration-75 ease-out sm:max-w-none sm:w-72 md:w-80 sm:text-xs
          cursor-pointer select-none touch-manipulation
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 dark:focus-visible:ring-white/20
          active:scale-[0.98] active:translate-y-0.5
          ${
            isSpacePressed
              ? "scale-[0.98] translate-y-0.5 bg-zinc-900 text-white shadow-md dark:bg-white dark:text-black dark:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              : "border border-zinc-200 bg-white text-zinc-600 active:border-zinc-400 active:bg-zinc-100 dark:border-neutral-700/50 dark:bg-neutral-900/80 dark:text-neutral-400 dark:active:border-neutral-500/70 dark:active:bg-neutral-800/80 md:dark:hover:border-neutral-500/70 md:hover:border-zinc-300 md:hover:bg-zinc-50"
          }
        `}
      >
        space
      </button>
    </div>
  )
}
