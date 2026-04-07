import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { FaqJsonLdFromItems } from "@/components/faq-json-ld"
import { SiteShell } from "@/components/site-shell"
import { Button } from "@/components/ui/button"
import { typingSpeedTest5MinutesFaq } from "@/lib/typing-speed-test-5-minutes-faq"

export function TypingSpeedTest5MinutesPage() {
  return (
    <SiteShell mainClassName="items-start">
      <FaqJsonLdFromItems items={typingSpeedTest5MinutesFaq} />

      <div className="mx-auto w-full max-w-5xl">
        <Link
          href="/"
          className="mb-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 dark:text-neutral-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          Back to typing test
        </Link>

        <article className="rounded-xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40 sm:p-10">
          <h1 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            5 Minute Typing Test – Measure Your Typing Speed and Accuracy
          </h1>

          <section className="mt-10 space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
              Test Your Typing Speed with a 5 Minute Typing Test
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-neutral-400 sm:text-base">
              <p>
                A 5 minute typing test is an extended typing challenge that measures how fast and accurately you can
                type during a longer session. In this typing speed test, you type continuously for five minutes while the
                system calculates your words per minute (WPM) and evaluates your typing accuracy.
              </p>
              <p>
                Compared to shorter typing tests, a 5 minute typing speed test provides a more realistic measurement of
                your typing performance. Because the test lasts longer, it allows the system to analyze your typing
                rhythm, consistency, and error rate more accurately.
              </p>
              <p>
                With TypingChecker, you can take a 5 minute typing test online for free and instantly see your typing
                results.
              </p>
            </div>
          </section>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="min-h-11 w-full sm:w-auto">
              <Link href="/">Start 5 minute test</Link>
            </Button>
            <p className="text-xs text-zinc-500 dark:text-neutral-500 sm:text-sm">
              On the test page, choose <strong className="font-medium text-zinc-700 dark:text-neutral-300">Challenge</strong>{" "}
              and <strong className="font-medium text-zinc-700 dark:text-neutral-300">5m</strong> (5 minutes). The timer starts on
              your first key.
            </p>
          </div>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-neutral-400 sm:text-base">
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                How the 5 Minute Typing Test Works
              </h2>
              <p className="mt-3">Taking the typing test 5 minutes challenge is simple and easy.</p>
              <p className="mt-3">Follow these steps:</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>
                  Start the 5 minute typing test: open the{" "}
                  <Link href="/" className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400">
                    typing test
                  </Link>
                  , select <strong className="font-medium text-zinc-800 dark:text-neutral-200">Challenge</strong> mode, and
                  choose <strong className="font-medium text-zinc-800 dark:text-neutral-200">5m</strong>.
                </li>
                <li>The timer begins automatically when you press your first key.</li>
                <li>Type the text displayed on the screen as accurately as possible.</li>
                <li>The system tracks your typing speed, WPM, and typing errors in real time.</li>
                <li>When the timer ends, your typing speed and accuracy results are displayed instantly.</li>
              </ol>
              <p className="mt-4">
                This timed typing test helps you evaluate your keyboard performance and track improvements over time.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                Why Take a 5 Minute Typing Speed Test?
              </h2>
              <p className="mt-3">
                The 5 minute typing test offers several benefits for people who want a deeper analysis of their typing
                skills.
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                    Highly Accurate Typing Speed Measurement
                  </h3>
                  <p className="mt-1">
                    Because the test lasts longer, it provides a more reliable estimate of your words per minute typing
                    speed.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Measure Typing Consistency</h3>
                  <p className="mt-1">
                    Typing continuously for five minutes helps analyze how consistently you type during extended typing
                    sessions.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Improve Typing Endurance</h3>
                  <p className="mt-1">
                    Longer typing tests help build endurance, which is important for tasks like writing, coding, and data
                    entry.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Identify Typing Errors</h3>
                  <p className="mt-1">
                    The typing checker highlights typing mistakes so you can improve your keyboard accuracy.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                What Is a Good Typing Speed?
              </h2>
              <p className="mt-3">Typing speed is usually measured in words per minute (WPM).</p>
              <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-200 dark:border-neutral-800">
                <table className="w-full min-w-[320px] text-left text-sm">
                  <thead className="border-b border-zinc-200 bg-zinc-50 dark:border-neutral-800 dark:bg-neutral-900/50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-zinc-900 dark:text-white">Typing Level</th>
                      <th className="px-4 py-3 font-semibold text-zinc-900 dark:text-white">WPM</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-neutral-800">
                    <tr>
                      <td className="px-4 py-3">Beginner</td>
                      <td className="px-4 py-3 font-mono tabular-nums">20–30 WPM</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Average</td>
                      <td className="px-4 py-3 font-mono tabular-nums">40–45 WPM</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Good</td>
                      <td className="px-4 py-3 font-mono tabular-nums">50–60 WPM</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Advanced</td>
                      <td className="px-4 py-3 font-mono tabular-nums">60–80 WPM</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Professional</td>
                      <td className="px-4 py-3 font-mono tabular-nums">90+ WPM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                Most people type around 40 to 45 WPM. With consistent typing practice, many typists improve their typing
                speed significantly.
              </p>
              <p className="mt-3">
                Taking regular typing speed tests online helps you monitor progress and increase typing efficiency.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                Tips to Improve Your Typing Speed
              </h2>
              <p className="mt-3">If you want to improve your typing speed and WPM, try the following tips:</p>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Practice Typing Regularly</h3>
                  <p className="mt-1">
                    Frequent typing practice helps build muscle memory and improve keyboard familiarity.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Focus on Accuracy First</h3>
                  <p className="mt-1">
                    Typing accurately reduces mistakes and naturally increases speed over time.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Learn Proper Finger Placement</h3>
                  <p className="mt-1">Correct keyboard finger positioning improves typing efficiency.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Avoid Looking at the Keyboard</h3>
                  <p className="mt-1">
                    Touch typing helps increase typing speed because your fingers memorize key positions.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Take Regular Typing Tests</h3>
                  <p className="mt-1">
                    Using online typing speed tests helps you track progress and improve typing skills.
                  </p>
                </div>
              </div>
              <p className="mt-4">
                With consistent practice, your typing speed and accuracy will gradually improve.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                Try Other Typing Speed Tests
              </h2>
              <p className="mt-3">If you want to practice typing with different durations, you can also try:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <Link
                    href="/typing-speed-test-30-seconds"
                    className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
                  >
                    30 Second Typing Test
                  </Link>
                </li>
                <li>
                  <Link
                    href="/typing-speed-test-1-minute"
                    className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
                  >
                    1 Minute Typing Test
                  </Link>
                </li>
                <li>
                  <Link
                    href="/typing-speed-test-90-seconds"
                    className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
                  >
                    90 Second Typing Test
                  </Link>
                </li>
                <li>
                  <Link
                    href="/typing-speed-test-2-minutes"
                    className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
                  >
                    2 Minute Typing Test
                  </Link>
                </li>
              </ul>
              <p className="mt-4">
                Each typing test measures your typing speed, WPM, and accuracy, helping you improve your keyboard skills
                step by step.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                Frequently Asked Questions
              </h2>
              <dl className="mt-6 space-y-6">
                {typingSpeedTest5MinutesFaq.map((item) => (
                  <div key={item.question}>
                    <dt className="text-sm font-semibold text-zinc-900 dark:text-white sm:text-base">{item.question}</dt>
                    <dd className="mt-2 text-sm leading-relaxed sm:text-base">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </article>
      </div>
    </SiteShell>
  )
}
