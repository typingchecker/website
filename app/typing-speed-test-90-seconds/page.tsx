import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { TypingSpeedTest90SecondsPage } from "@/components/typing-speed-test-90-seconds-page"
import { pageBreadcrumbs } from "@/lib/breadcrumbs"

export const metadata: Metadata = {
  title: "90 Second Typing Test – Check Your WPM in 90 Seconds",
  description:
    "Take a 90 second typing test online to measure your typing speed, WPM, and accuracy. Practice typing and check your performance with this timed typing test.",
  alternates: {
    canonical: "/typing-speed-test-90-seconds",
  },
  openGraph: {
    title: "90 Second Typing Test – Check Your WPM in 90 Seconds",
    description:
      "Take a 90 second typing test online to measure your typing speed, WPM, and accuracy with this timed typing test.",
    url: "/typing-speed-test-90-seconds",
  },
}

export default function TypingSpeedTest90Seconds() {
  return (
    <>
      <BreadcrumbJsonLd items={pageBreadcrumbs.typingSpeedTest90Seconds} />
      <TypingSpeedTest90SecondsPage />
    </>
  )
}
