import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { PrivacyPolicyPage } from "@/components/privacy-policy-page"
import { pageBreadcrumbs } from "@/lib/breadcrumbs"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How TypingChecker handles information when you use our free online typing speed test, analytics, and contact options.",
  openGraph: {
    title: "Privacy Policy | TypingChecker",
    description:
      "Learn how TypingChecker collects and uses information when you use our typing test and website.",
    url: "/privacy",
  },
}

export default function Privacy() {
  return (
    <>
      <BreadcrumbJsonLd items={pageBreadcrumbs.privacy} />
      <PrivacyPolicyPage />
    </>
  )
}
