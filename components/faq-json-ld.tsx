import { typingFaqItems } from "@/lib/faq-data"

function buildFaqPageJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

const homeJsonLd = buildFaqPageJsonLd(typingFaqItems)

export function FaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
    />
  )
}

export function FaqJsonLdFromItems({
  items,
}: {
  items: readonly { question: string; answer: string }[]
}) {
  const jsonLd = buildFaqPageJsonLd(items)
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
