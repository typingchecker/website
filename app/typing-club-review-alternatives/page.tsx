import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { TypingClubReviewPage } from "@/components/typing-club-review-page"
import { pageBreadcrumbs } from "@/lib/breadcrumbs"

export const metadata: Metadata = {
  title: "Typing Club Review (2026) + Best Alternatives to Improve Typing Speed",
  description:
    "Honest Typing Club review with pros, cons, and better alternatives. Compare features and tools to improve your typing speed and accuracy fast.",
  alternates: {
    canonical: "/typing-club-review-alternatives",
  },
  openGraph: {
    title: "Typing Club Review (2026) + Best Alternatives to Improve Typing Speed",
    description:
      "Honest Typing Club review with pros, cons, and better alternatives to improve typing speed and accuracy.",
    url: "/typing-club-review-alternatives",
  },
}

export default function TypingClubReviewAlternatives() {
  return (
    <>
      <BreadcrumbJsonLd items={pageBreadcrumbs.typingClubReviewAlternatives} />
      <TypingClubReviewPage />
    </>
  )
}
