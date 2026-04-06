import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { TipsPage } from "@/components/tips-page"
import { pageBreadcrumbs } from "@/lib/breadcrumbs"

export const metadata: Metadata = {
  title: "Tips & How to Use the Typing Test",
  description:
    "Learn how to use TypingChecker: Free Type vs Challenge mode, timer, key sounds, keyboard shortcuts, virtual keyboard, theme, and how to improve WPM and accuracy.",
  openGraph: {
    title: "Tips & How to Use the Typing Test | TypingChecker",
    description:
      "Complete guide to TypingChecker features—modes, mute sound, shortcuts, challenge timer, and typing improvement tips.",
    url: "/tips",
  },
}

export default function Tips() {
  return (
    <>
      <BreadcrumbJsonLd items={pageBreadcrumbs.tips} />
      <TipsPage />
    </>
  )
}
