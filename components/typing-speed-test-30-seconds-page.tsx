import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { FaqJsonLdFromItems } from "@/components/faq-json-ld"
import { SiteShell } from "@/components/site-shell"
import { Button } from "@/components/ui/button"
import { typingSpeedTest30SecondsFaq } from "@/lib/typing-speed-test-30-seconds-faq"

export function TypingSpeedTest30SecondsPage() {
  return (
    <SiteShell mainClassName="items-start">
      <FaqJsonLdFromItems items={typingSpeedTest30SecondsFaq} />

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
            30 Second Typing Test – Measure Your Typing Speed Quickly
          </h1>

          <section className="mt-10 space-y-4">
       
            <div className="space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-neutral-400 sm:text-base">
              <p>
                A 30 second typing test is one of the fastest ways to check how quickly and accurately you can type. In
                this quick typing challenge, you type a short paragraph while the system measures your words per minute
                (WPM) and typing accuracy.
              </p>
              <p>
                This 30 second typing speed test is perfect for quick practice sessions or for anyone who wants to test
                their typing performance without taking a longer typing exam. In just half a minute, you can see how fast
                you type and identify areas for improvement.
              </p>
              <p>
                With TypingChecker, you can take a free typing test online directly in your browser and receive instant
                results.
              </p>
            </div>
          </section>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="min-h-11 w-full sm:w-auto">
              <Link href="/">Start typing speed test</Link>
            </Button>
            <p className="text-xs text-zinc-500 dark:text-neutral-500 sm:text-sm">
              On the test page, choose <strong className="font-medium text-zinc-700 dark:text-neutral-300">Challenge</strong>{" "}
              and <strong className="font-medium text-zinc-700 dark:text-neutral-300">30s</strong>. The timer starts on your first
              key.
            </p>
          </div>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-neutral-400 sm:text-base">
            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                How the 30 Second Typing Test Works
              </h2>
              <p className="mt-3">Taking the typing test for 30 seconds is simple and easy.</p>
              <p className="mt-3">Follow these steps:</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>
                  Open the{" "}
                  <Link href="/" className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400">
                    typing speed test
                  </Link>
                  , select <strong className="font-medium text-zinc-800 dark:text-neutral-200">Challenge</strong> mode, and
                  choose <strong className="font-medium text-zinc-800 dark:text-neutral-200">30s</strong>.
                </li>
                <li>The timer begins automatically when you press your first key.</li>
                <li>Type the text displayed on the screen as accurately as possible.</li>
                <li>The system tracks your typing speed, mistakes, and accuracy in real time.</li>
                <li>When the timer ends, your WPM and accuracy results are displayed instantly.</li>
              </ol>
              <p className="mt-4">
                This allows you to quickly check your typing performance and repeat the test multiple times.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                Why Take a 30 Second Typing Speed Test?
              </h2>
              <p className="mt-3">
                A 30 second typing test offers several benefits, especially for quick practice sessions.
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Quick Typing Speed Check</h3>
                  <p className="mt-1">
                    You can measure your typing speed in just 30 seconds, making it ideal for short practice sessions.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Easy Daily Typing Practice</h3>
                  <p className="mt-1">Because the test is short, you can repeat it multiple times to improve your typing skills.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Track Your WPM Progress</h3>
                  <p className="mt-1">Regular typing tests help you monitor improvements in typing speed and accuracy.</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">Identify Typing Mistakes</h3>
                  <p className="mt-1">The test highlights typing errors so you can improve your keyboard accuracy.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                What Is a Good Typing Speed?
              </h2>
              <p className="mt-3">
                Typing speed is usually measured in words per minute (WPM). Here are typical typing speed benchmarks:
              </p>
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
                Taking regular typing speed tests online can help you gradually improve your typing performance.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                Tips to Improve Your Typing Speed
              </h2>
              <p className="mt-3">If you want to type faster and improve your WPM, try these tips:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Practice typing regularly</li>
                <li>Focus on typing accurately before increasing speed</li>
                <li>Learn proper finger placement on the keyboard</li>
                <li>Avoid looking at the keyboard while typing</li>
                <li>Take regular typing speed tests</li>
              </ul>
              <p className="mt-4">
                With consistent practice, your typing speed can improve significantly over time.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                Try Other Typing Speed Tests
              </h2>
              <p className="mt-3">If you want to practice typing with different time limits, you can also try:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <Link href="/typing-speed-test-1-minute" className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400">
                    1 Minute Typing Test
                  </Link>
                </li>
                <li>
                  <Link href="/typing-speed-test-90-seconds" className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400">
                    90 Second Typing Test
                  </Link>{" "}
                  <span className="text-zinc-500 dark:text-neutral-500">(Challenge → 90s)</span>
                </li>
                <li>
                  <Link href="/typing-speed-test-2-minutes" className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400">
                    2 Minute Typing Test
                  </Link>{" "}
                  <span className="text-zinc-500 dark:text-neutral-500">(Challenge → 120s)</span>
                </li>
                <li>
                  <Link href="/typing-speed-test-accuracy" className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400">
                    Typing Accuracy Test
                  </Link>{" "}
                  <span className="text-zinc-500 dark:text-neutral-500">(main typing test)</span>
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
                {typingSpeedTest30SecondsFaq.map((item) => (
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
