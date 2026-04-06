import type { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { ContactPage } from "@/components/contact-page"
import { pageBreadcrumbs } from "@/lib/breadcrumbs"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact TypingChecker for feedback, support, or questions about our free online typing speed test and WPM checker.",
  openGraph: {
    title: "Contact Us | TypingChecker",
    description:
      "Get in touch with TypingChecker for feedback, support, or questions about our free typing speed test.",
    url: "/contact",
  },
}

export default function Contact() {
  return (
    <>
      <BreadcrumbJsonLd items={pageBreadcrumbs.contact} />
      <ContactPage />
    </>
  )
}
