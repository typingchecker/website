import { typingFaqItems } from "@/lib/faq-data"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: typingFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export function FaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
