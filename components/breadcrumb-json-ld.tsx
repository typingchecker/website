import { absoluteUrl } from "@/lib/site"

export interface BreadcrumbItem {
  name: string
  /** Path beginning with `/`, e.g. `/contact` */
  path: string
}

export function BreadcrumbJsonLd({ items }: { items: readonly BreadcrumbItem[] }) {
  if (items.length === 0) return null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
