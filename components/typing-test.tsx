"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { TextDisplay } from "./text-display"
import { VirtualKeyboard } from "./virtual-keyboard"
import { SidebarStatsPanel } from "./sidebar-stats-panel"
import { TypingSeoContent } from "./typing-seo-content"
import { SiteLogo } from "./site-logo"
import { SiteFooter } from "./site-footer"
import { SiteNavigation } from "./site-navigation"
import { ModeSelector } from "./mode-selector"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { getRandomText, getNextText } from "@/lib/typing-data"
import { calculateWPM, calculateAccuracy } from "@/lib/typing-utils"
export function TypingTest() {
  const [text, setText] = useState("")
  const [typedText, setTypedText] = useState("")
  const [pressedKey, setPressedKey] = useState<string | null>(null)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const [correctChars, setCorrectChars] = useState(0)
  const [totalChars, setTotalChars] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const [mode, setMode] = useState<"free" | "challenge">("free")
  const [selectedTime, setSelectedTime] = useState(60)
  const [timeLeft, setTimeLeft] = useState<number | null>(null)
  const [finalStats, setFinalStats] = useState<{ wpm: number; accuracy: number } | null>(null)
  const [textsCompleted, setTextsCompleted] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const audioContextRef = useRef<AudioContext | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isTimerRunningRef = useRef(false)
  const wpmRef = useRef(wpm)
  const accuracyRef = useRef(accuracy)

  useEffect(() => {
    wpmRef.current = wpm
    accuracyRef.current = accuracy
  }, [wpm, accuracy])

  useEffect(() => {
    setText(getRandomText())
  }, [])

  const loadNextText = useCallback(() => {
    setText((currentText) => getNextText(currentText))
    setTypedText("")
    setTextsCompleted((prev) => prev + 1)
  }, [])

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    isTimerRunningRef.current = true

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
          }
          isTimerRunningRef.current = false
          setIsComplete(true)
          setFinalStats({ wpm: wpmRef.current, accuracy: accuracyRef.current })
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [])

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    isTimerRunningRef.current = false
  }, [])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const playMechanicalSound = useCallback(() => {
    if (!soundEnabled) return
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext()
      }
      const ctx = audioContextRef.current
      const now = ctx.currentTime

      const clickOsc = ctx.createOscillator()
      const clickGain = ctx.createGain()
      clickOsc.connect(clickGain)
      clickGain.connect(ctx.destination)
      clickOsc.frequency.value = 3500
      clickOsc.type = "square"
      clickGain.gain.setValueAtTime(0.15, now)
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02)
      clickOsc.start(now)
      clickOsc.stop(now + 0.02)

      const thockOsc = ctx.createOscillator()
      const thockGain = ctx.createGain()
      thockOsc.connect(thockGain)
      thockGain.connect(ctx.destination)
      thockOsc.frequency.value = 150
      thockOsc.type = "sine"
      thockGain.gain.setValueAtTime(0.3, now)
      thockGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08)
      thockOsc.start(now)
      thockOsc.stop(now + 0.08)

      const bufferSize = ctx.sampleRate * 0.03
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
      const output = noiseBuffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * 0.1
      }
      const noise = ctx.createBufferSource()
      const noiseGain = ctx.createGain()
      const noiseFilter = ctx.createBiquadFilter()
      noise.buffer = noiseBuffer
      noiseFilter.type = "bandpass"
      noiseFilter.frequency.value = 1000
      noiseFilter.Q.value = 1
      noise.connect(noiseFilter)
      noiseFilter.connect(noiseGain)
      noiseGain.connect(ctx.destination)
      noiseGain.gain.setValueAtTime(0.08, now)
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03)
      noise.start(now)
      noise.stop(now + 0.03)
    } catch {
      // Audio not supported
    }
  }, [soundEnabled])

  const resetTest = useCallback(() => {
    stopTimer()
    setText(getRandomText())
    setTypedText("")
    setPressedKey(null)
    setStartTime(null)
    setWpm(0)
    setAccuracy(0)
    setCorrectChars(0)
    setTotalChars(0)
    setIsComplete(false)
    setTimeLeft(mode === "challenge" ? selectedTime : null)
    setFinalStats(null)
    setTextsCompleted(0) // Reset texts completed count
  }, [mode, selectedTime, stopTimer])

  const handleModeChange = useCallback(
    (newMode: "free" | "challenge") => {
      stopTimer()
      setMode(newMode)
      setTypedText("")
      setPressedKey(null)
      setStartTime(null)
      setWpm(0)
      setAccuracy(0)
      setCorrectChars(0)
      setTotalChars(0)
      setIsComplete(false)
      setTimeLeft(newMode === "challenge" ? selectedTime : null)
      setFinalStats(null)
      setTextsCompleted(0) // Reset texts completed count
    },
    [selectedTime, stopTimer],
  )

  const handleTimeChange = useCallback(
    (seconds: number) => {
      stopTimer()
      setSelectedTime(seconds)
      setTimeLeft(seconds)
      setTypedText("")
      setStartTime(null)
      setWpm(0)
      setAccuracy(0)
      setCorrectChars(0)
      setTotalChars(0)
      setIsComplete(false)
      setFinalStats(null)
      setTextsCompleted(0) // Reset texts completed count
    },
    [stopTimer],
  )

  const processKeyPress = useCallback(
    (key: string) => {
      if (isComplete) return

      setPressedKey(key)
      playMechanicalSound()

      if (!startTime) {
        setStartTime(Date.now())
        if (mode === "challenge") {
          setTimeLeft(selectedTime)
          startTimer()
        }
      }

      const currentIndex = typedText.length
      if (currentIndex < text.length) {
        const newTypedText = typedText + key
        setTypedText(newTypedText)
        setTotalChars((prev) => prev + 1)

        if (key === text[currentIndex]) {
          setCorrectChars((prev) => prev + 1)
        }

        if (newTypedText.length === text.length) {
          if (mode === "free") {
            // In free mode, just load next text continuously
            loadNextText()
          } else {
            // In challenge mode, load next text and keep going until time runs out
            loadNextText()
          }
        }
      }
      setTimeout(() => setPressedKey(null), 100)
    },
    [isComplete, startTime, mode, selectedTime, typedText, text, playMechanicalSound, startTimer, loadNextText],
  )

  const handleVirtualKeyClick = useCallback(
    (key: string) => {
      processKeyPress(key)
    },
    [processKeyPress],
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        resetTest()
        return
      }
      if (e.key === "Tab") {
        e.preventDefault()
        setSoundEnabled((prev) => !prev)
        return
      }
      if (isComplete) return

      if (e.key.length === 1 || e.key === " ") {
        e.preventDefault()
        processKeyPress(e.key)
      }

      if (e.key === "Backspace" && typedText.length > 0) {
        e.preventDefault()
        setPressedKey("Backspace")
        playMechanicalSound()
        setTypedText((prev) => prev.slice(0, -1))
        setTimeout(() => setPressedKey(null), 100)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [typedText, isComplete, resetTest, playMechanicalSound, processKeyPress])

  useEffect(() => {
    if (!startTime || totalChars === 0) return
    const interval = setInterval(() => {
      const elapsedSeconds = (Date.now() - startTime) / 1000
      setWpm(calculateWPM(correctChars, elapsedSeconds))
      setAccuracy(calculateAccuracy(correctChars, totalChars))
    }, 100)
    return () => clearInterval(interval)
  }, [startTime, correctChars, totalChars])

  return (
    <div className="flex min-h-[100dvh] flex-col bg-zinc-100 dark:bg-[#0a0a0a]">
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
      {/* Mobile: top bar + slide-out menu with all sidebar content */}
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
          <div className="flex flex-col">
            <SiteNavigation
              embeddedInDrawer
              className="flex-none border-b border-zinc-200 pb-4 dark:border-neutral-800/50"
              onNavigate={() => setMobileMenuOpen(false)}
            />
            <header
              className="flex flex-col gap-3 border-t border-zinc-200 bg-zinc-50/95 px-4 py-4 dark:border-neutral-800/50 dark:bg-[#0a0a0a]/95"
              aria-label="Stats and keyboard shortcuts"
            >
              <SidebarStatsPanel
                wpm={wpm}
                accuracy={accuracy}
                timeLeft={timeLeft}
                selectedTime={selectedTime}
                isChallenge={mode === "challenge"}
                soundEnabled={soundEnabled}
                onSoundToggle={() => setSoundEnabled((prev) => !prev)}
              />
            </header>
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop: fixed-width sidebar */}
      <div className="hidden min-h-0 w-full shrink-0 flex-col border-b border-zinc-200 bg-zinc-50 dark:border-neutral-800/50 dark:bg-[#0a0a0a] md:flex md:h-full md:w-56 md:overflow-hidden md:border-b-0 md:border-r md:border-zinc-200 dark:md:border-neutral-800/50">
        <SiteNavigation />

        <header
          className="flex shrink-0 flex-col gap-3 overflow-y-auto border-t border-zinc-200 bg-zinc-50/95 px-4 py-3 backdrop-blur-md dark:border-neutral-800/50 dark:bg-[#0a0a0a]/95 md:px-3 md:pb-4"
          aria-label="Stats and keyboard shortcuts"
        >
          <SidebarStatsPanel
            wpm={wpm}
            accuracy={accuracy}
            timeLeft={timeLeft}
            selectedTime={selectedTime}
            isChallenge={mode === "challenge"}
            soundEnabled={soundEnabled}
            onSoundToggle={() => setSoundEnabled((prev) => !prev)}
          />
        </header>
      </div>

      <div className="relative flex min-h-0 min-w-0 flex-1 flex-col overflow-x-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-200/40 via-transparent to-zinc-300/30 dark:from-neutral-900/20 dark:to-neutral-900/40" />

      <main className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-start w-full max-w-[100vw] pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-[max(3rem,env(safe-area-inset-bottom,0px)+1.5rem)] pt-6 sm:pl-6 sm:pr-6 sm:pb-16 lg:pl-8 lg:pr-8">
        <div className="mb-3 max-w-7xl mx-auto text-center px-1">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white font-sans leading-snug text-balance">
            Free Typing Speed Test - Check Your WPM & Accuracy Online
          </h1>
        </div>

        <div className="mb-6">
          <ModeSelector
            mode={mode}
            selectedTime={selectedTime}
            onModeChange={handleModeChange}
            onTimeChange={handleTimeChange}
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 w-full">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 sm:text-sm dark:text-neutral-500">wpm</span>
            <span className="font-mono text-base font-semibold tabular-nums text-zinc-900 sm:text-lg dark:text-white">{wpm}</span>
          </div>
          {textsCompleted > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 sm:text-sm dark:text-neutral-500">texts</span>
              <span className="font-mono text-base font-semibold tabular-nums text-emerald-600 sm:text-lg dark:text-emerald-400">{textsCompleted}</span>
            </div>
          )}
        </div>

        <TextDisplay text={text} typedText={typedText} currentIndex={typedText.length} />

        <VirtualKeyboard pressedKey={pressedKey} onKeyClick={handleVirtualKeyClick} />

        {isComplete && mode === "challenge" && (
          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-4 w-full max-w-md px-2">
            <div className="w-full rounded-xl border border-amber-200 bg-amber-50 px-4 py-4 sm:px-6 dark:border-amber-500/20 dark:bg-amber-500/10">
              <p className="mb-3 text-center font-sans text-base font-medium text-amber-700 sm:text-lg dark:text-amber-400">{"Time's Up!"}</p>
              {finalStats && (
                <div className="flex flex-col items-center justify-center gap-2 text-center text-xs sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2 sm:text-sm">
                  <span className="text-zinc-600 dark:text-neutral-400">
                    Final WPM: <span className="font-semibold text-zinc-900 dark:text-white">{finalStats.wpm}</span>
                  </span>
                  <span className="text-zinc-600 dark:text-neutral-400">
                    Accuracy: <span className="font-semibold text-zinc-900 dark:text-white">{finalStats.accuracy}%</span>
                  </span>
                  <span className="text-zinc-600 dark:text-neutral-400">
                    Texts: <span className="font-semibold text-emerald-600 dark:text-emerald-400">{textsCompleted}</span>
                  </span>
                </div>
              )}
            </div>
            <p className="px-2 text-center text-xs text-zinc-500 sm:text-sm dark:text-neutral-500">Press ESC to try again</p>
          </div>
        )}

        <TypingSeoContent />
      </main>
      </div>
      </div>
      <SiteFooter />
    </div>
  )
}
