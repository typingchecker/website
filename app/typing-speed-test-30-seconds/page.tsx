import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { TypingSpeedTest30SecondsPage } from "@/components/typing-speed-test-30-seconds-page"
import { pageBreadcrumbs } from "@/lib/breadcrumbs"

export const metadata: Metadata = {
  title: "30 Second Typing Test – Check Your WPM in 30 Seconds Online",
  description:
    "Take a 30 second typing test online and instantly check your typing speed, WPM, and accuracy. Practice typing and measure your performance in just 30 seconds.",
  alternates: {
    canonical: "/typing-speed-test-30-seconds",
  },
  openGraph: {
    title: "30 Second Typing Test – Check Your WPM in 30 Seconds Online",
    description:
      "Take a 30 second typing test online and instantly check your typing speed, WPM, and accuracy. Practice typing in just 30 seconds.",
    url: "/typing-speed-test-30-seconds",
  },
}

export default function TypingSpeedTest30Seconds() {
  return (
    <>
      <BreadcrumbJsonLd items={pageBreadcrumbs.typingSpeedTest30Seconds} />
      <TypingSpeedTest30SecondsPage />
    </>
  )
}
