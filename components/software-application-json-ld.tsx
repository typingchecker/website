import { absoluteUrl } from "@/lib/site"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TypingChecker",
  description:
    "Free online typing speed test and WPM checker. Measure typing accuracy, practice with timed challenges, and improve your keyboard skills in the browser—no install required.",
  url: absoluteUrl("/"),
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Typing tutor",
  operatingSystem: "Web browser",
  browserRequirements: "Requires JavaScript. Modern web browser.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Real-time WPM and accuracy",
    "Free typing and timed challenge modes",
    "Virtual keyboard and optional key sounds",
    "Light and dark theme",
  ].join(". "),
  publisher: {
    "@type": "Organization",
    name: "TypingChecker",
    url: absoluteUrl("/"),
  },
}

export function SoftwareApplicationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
