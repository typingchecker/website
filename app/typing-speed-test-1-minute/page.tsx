import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { TypingSpeedTest1MinutePage } from "@/components/typing-speed-test-1-minute-page"
import { pageBreadcrumbs } from "@/lib/breadcrumbs"

export const metadata: Metadata = {
  title: "1 Minute Typing Speed Test – Check Your WPM in 60 Seconds",
  description:
    "Take a free 1 minute typing speed test to check your typing speed and accuracy. Measure your WPM instantly and improve your typing skills with real-time results.",
  alternates: {
    canonical: "/typing-speed-test-1-minute",
  },
  openGraph: {
    title: "1 Minute Typing Speed Test – Check Your WPM in 60 Seconds",
    description:
      "Take a free 1 minute typing speed test to check your typing speed and accuracy. Measure your WPM instantly with real-time results.",
    url: "/typing-speed-test-1-minute",
  },
}

export default function TypingSpeedTest1Minute() {
  return (
    <>
      <BreadcrumbJsonLd items={pageBreadcrumbs.typingSpeedTest1Minute} />
      <TypingSpeedTest1MinutePage />
    </>
  )
}
