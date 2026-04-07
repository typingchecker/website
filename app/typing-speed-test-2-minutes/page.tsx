import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { TypingSpeedTest2MinutesPage } from "@/components/typing-speed-test-2-minutes-page"
import { pageBreadcrumbs } from "@/lib/breadcrumbs"

export const metadata: Metadata = {
  title: "2 Minute Typing Test – Check Your WPM in 2 Minutes",
  description:
    "Take a 2 minute typing test online to measure your typing speed, WPM, and accuracy. Improve your typing skills with this 120 second typing challenge.",
  alternates: {
    canonical: "/typing-speed-test-2-minutes",
  },
  openGraph: {
    title: "2 Minute Typing Test – Check Your WPM in 2 Minutes",
    description:
      "Take a 2 minute typing test online to measure your typing speed, WPM, and accuracy with this 120 second typing challenge.",
    url: "/typing-speed-test-2-minutes",
  },
}

export default function TypingSpeedTest2Minutes() {
  return (
    <>
      <BreadcrumbJsonLd items={pageBreadcrumbs.typingSpeedTest2Minutes} />
      <TypingSpeedTest2MinutesPage />
    </>
  )
}
