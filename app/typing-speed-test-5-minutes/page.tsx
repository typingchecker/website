import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { TypingSpeedTest5MinutesPage } from "@/components/typing-speed-test-5-minutes-page"
import { pageBreadcrumbs } from "@/lib/breadcrumbs"

export const metadata: Metadata = {
  title: "5 Minute Typing Test – Check Your WPM in 5 Minutes",
  description:
    "Take a 5 minute typing test online to measure your typing speed, WPM, and accuracy. Improve your keyboard skills with this extended typing challenge.",
  alternates: {
    canonical: "/typing-speed-test-5-minutes",
  },
  openGraph: {
    title: "5 Minute Typing Test – Check Your WPM in 5 Minutes",
    description:
      "Take a 5 minute typing test online to measure your typing speed, WPM, and accuracy with this extended typing challenge.",
    url: "/typing-speed-test-5-minutes",
  },
}

export default function TypingSpeedTest5Minutes() {
  return (
    <>
      <BreadcrumbJsonLd items={pageBreadcrumbs.typingSpeedTest5Minutes} />
      <TypingSpeedTest5MinutesPage />
    </>
  )
}
