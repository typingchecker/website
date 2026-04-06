import { absoluteUrl } from "@/lib/site"

/** Same asset as Open Graph — must exist at `public/typing-speed-checker.webp` */
const SCREENSHOT_PATH = "/typing-speed-checker.webp"

const features = [
  "Real-time words per minute (WPM) and accuracy percentage",
  "Free Type mode for open-ended practice with new passages as you finish",
  "Challenge mode with timed runs (30s, 60s, 90s, or 120s) and final results summary",
  "On-screen virtual keyboard with optional mechanical-style key sounds (mute with Tab or sidebar)",
  "Light and dark theme stored in your browser",
  "Keyboard shortcuts: Esc to reset, Backspace to correct, physical or on-screen input",
  "No account required; runs entirely in the web browser",
]

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
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  // schema.org: featureList expects Text (comma-friendly list of capabilities)
  featureList: features.join(", "),
  screenshot: {
    "@type": "ImageObject",
    url: absoluteUrl(SCREENSHOT_PATH),
    caption: "TypingChecker typing speed test interface in the browser",
  },
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
