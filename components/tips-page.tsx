import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteShell } from "@/components/site-shell"

export function TipsPage() {
  return (
    <SiteShell mainClassName="items-start">
      <div className="mx-auto w-full max-w-2xl">
        <Link
          href="/"
          className="mb-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 dark:text-neutral-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          Back to typing test
        </Link>

        <article className="rounded-xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40 sm:p-10">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            Tips & how to use TypingChecker
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-neutral-400 sm:text-base">
            TypingChecker is a free typing speed test that runs in your browser. Use this guide to learn every feature—modes,
            timer, sounds, shortcuts, and the on-screen keyboard—so you can practice efficiently and improve your WPM and
            accuracy.
          </p>

          <div className="mt-10 space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-neutral-400 sm:text-base">
            <section>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">Getting started</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>Stay on the home page and focus the test area—start typing the paragraph shown with your physical keyboard.</li>
                <li>
                  Type each character in order. Correct characters move you forward; mistakes are reflected in your accuracy
                  percentage.
                </li>
                <li>
                  Your <strong className="font-medium text-zinc-800 dark:text-neutral-200">WPM</strong> (words per minute) and{" "}
                  <strong className="font-medium text-zinc-800 dark:text-neutral-200">accuracy</strong> update live while you type.
                </li>
                <li>
                  Use the <strong className="font-medium text-zinc-800 dark:text-neutral-200">mode</strong> controls (below the title)
                  to switch between relaxed practice and a timed challenge—see below.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">Free Type mode</h2>
              <p className="mt-3">
                <strong className="font-medium text-zinc-800 dark:text-neutral-200">Free Type</strong> is open-ended practice. There is
                no countdown. When you finish a passage, the next one loads automatically so you can keep going. Your{" "}
                <strong className="font-medium text-zinc-800 dark:text-neutral-200">texts</strong> counter increases each time you
                complete a passage—use it to track how many paragraphs you have finished in a session.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">Challenge mode</h2>
              <p className="mt-3">
                <strong className="font-medium text-zinc-800 dark:text-neutral-200">Challenge</strong> adds a timer. Choose how long
                you want to type: <strong className="font-medium text-zinc-800 dark:text-neutral-200">30 seconds</strong>,{" "}
                <strong className="font-medium text-zinc-800 dark:text-neutral-200">60 seconds</strong>,{" "}
                <strong className="font-medium text-zinc-800 dark:text-neutral-200">90 seconds</strong>, or{" "}
                <strong className="font-medium text-zinc-800 dark:text-neutral-200">120 seconds</strong> (2 minutes).
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>The timer starts when you press your first key—not when the page loads.</li>
                <li>
                  Keep typing: when you finish a passage, another one appears until time runs out. Your goal is to sustain speed
                  and accuracy under pressure.
                </li>
                <li>
                  The <strong className="font-medium text-zinc-800 dark:text-neutral-200">Time left</strong> row in the sidebar
                  shows the countdown. In the last 10 seconds it highlights in red so you can see you are almost out of time.
                </li>
                <li>
                  When time hits zero, you see a summary with your final WPM, accuracy, and how many texts you completed. Press{" "}
                  <kbd className="rounded border border-zinc-300 bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:border-neutral-600 dark:bg-neutral-800">
                    Esc
                  </kbd>{" "}
                  to reset and try again.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">Live stats (sidebar)</h2>
              <p className="mt-3">
                On desktop, the left sidebar shows <strong className="font-medium text-zinc-800 dark:text-neutral-200">Live stats</strong>
                : challenge time (in Challenge mode), key sound on/off, current WPM, and accuracy. On smaller screens, open the
                menu (hamburger icon) to see the same panel.
              </p>
              <p className="mt-3">
                Near the top of the main area you will also see WPM and, after you complete at least one passage, a{" "}
                <strong className="font-medium text-zinc-800 dark:text-neutral-200">texts</strong> count for quick reference while you
                type.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">Key sound (mute & unmute)</h2>
              <p className="mt-3">
                TypingChecker can play a short mechanical-style sound when you press keys (helpful for rhythm and feedback). You
                can turn it off if you prefer silence or are in a shared space.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  In <strong className="font-medium text-zinc-800 dark:text-neutral-200">Live stats</strong>, find{" "}
                  <strong className="font-medium text-zinc-800 dark:text-neutral-200">Key sound</strong> and tap the button to toggle
                  between <strong className="font-medium text-zinc-800 dark:text-neutral-200">On</strong> and{" "}
                  <strong className="font-medium text-zinc-800 dark:text-neutral-200">Off</strong> (speaker icons).
                </li>
                <li>
                  Keyboard shortcut: press{" "}
                  <kbd className="rounded border border-zinc-300 bg-zinc-100 px-1.5 py-0.5 font-mono text-xs dark:border-neutral-600 dark:bg-neutral-800">
                    Tab
                  </kbd>{" "}
                  to toggle key sound. Note: while you are on the typing test, Tab is reserved for this shortcut (it will not move
                  focus between fields like it usually does on web pages).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">Keyboard shortcuts</h2>
              <div className="mt-3 overflow-x-auto rounded-lg border border-zinc-200 dark:border-neutral-800">
                <table className="w-full min-w-[280px] text-left text-sm">
                  <thead className="border-b border-zinc-200 bg-zinc-50 dark:border-neutral-800 dark:bg-neutral-900/50">
                    <tr>
                      <th className="px-3 py-2 font-semibold text-zinc-900 dark:text-white">Key</th>
                      <th className="px-3 py-2 font-semibold text-zinc-900 dark:text-white">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-neutral-800">
                    <tr>
                      <td className="px-3 py-2 font-mono text-xs text-zinc-800 dark:text-neutral-200">Letters, numbers, symbols</td>
                      <td className="px-3 py-2">Type the next character in the passage.</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-mono text-xs text-zinc-800 dark:text-neutral-200">Space</td>
                      <td className="px-3 py-2">Type a space when the passage requires it.</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-mono text-xs text-zinc-800 dark:text-neutral-200">Backspace</td>
                      <td className="px-3 py-2">Remove the last character you typed (if any).</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-mono text-xs text-zinc-800 dark:text-neutral-200">Esc</td>
                      <td className="px-3 py-2">Reset the test: new random passage, stats cleared, timer reset in Challenge mode.</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-mono text-xs text-zinc-800 dark:text-neutral-200">Tab</td>
                      <td className="px-3 py-2">Toggle key sound on or off.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">On-screen (virtual) keyboard</h2>
              <p className="mt-3">
                Below the passage you will see a visual keyboard. You can <strong className="font-medium text-zinc-800 dark:text-neutral-200">click or tap</strong> keys
                to type—useful on touch devices or if you want to practice without a physical keyboard. Keys light up when
                pressed (from the screen or your hardware). A wide <strong className="font-medium text-zinc-800 dark:text-neutral-200">space</strong> bar sits under the
                rows for entering spaces.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">Light & dark theme</h2>
              <p className="mt-3">
                At the bottom of the sidebar (or in the slide-out menu on mobile), use{" "}
                <strong className="font-medium text-zinc-800 dark:text-neutral-200">Light mode</strong> /{" "}
                <strong className="font-medium text-zinc-800 dark:text-neutral-200">Dark mode</strong> to match your lighting and
                preference. Your choice is remembered in the browser for next time.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">Navigation & other pages</h2>
              <p className="mt-3">
                Use the site menu for <strong className="font-medium text-zinc-800 dark:text-neutral-200">Typing test</strong> (home),{" "}
                <strong className="font-medium text-zinc-800 dark:text-neutral-200">Contact</strong>, and this{" "}
                <strong className="font-medium text-zinc-800 dark:text-neutral-200">Tips</strong> page. The footer links to our{" "}
                <Link href="/privacy" className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400">
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">How to improve your typing</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="font-medium text-zinc-800 dark:text-neutral-200">Accuracy first.</strong> Speed builds on correct
                  habits—prioritize hitting the right keys before chasing a higher WPM.
                </li>
                <li>
                  <strong className="font-medium text-zinc-800 dark:text-neutral-200">Use Free Type</strong> to drill fundamentals,
                  then <strong className="font-medium text-zinc-800 dark:text-neutral-200">Challenge</strong> to simulate pressure and
                  track progress over weeks.
                </li>
                <li>
                  <strong className="font-medium text-zinc-800 dark:text-neutral-200">Keep sessions short and regular</strong> instead
                  of one long rare session—muscle memory improves with daily practice.
                </li>
                <li>
                  <strong className="font-medium text-zinc-800 dark:text-neutral-200">Minimize looking at the keyboard.</strong> The
                  on-screen layout can help you associate letters with finger positions.
                </li>
                <li>
                  <strong className="font-medium text-zinc-800 dark:text-neutral-200">Review your accuracy</strong> after Challenge
                  runs; aim to reduce errors before pushing raw speed.
                </li>
              </ul>
            </section>
          </div>
        </article>
      </div>
    </SiteShell>
  )
}
