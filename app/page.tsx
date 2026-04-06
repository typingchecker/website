import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { SoftwareApplicationJsonLd } from "@/components/software-application-json-ld"
import { TypingTest } from "@/components/typing-test"
import { pageBreadcrumbs } from "@/lib/breadcrumbs"

export default function Home() {
  return (
    <>
      <SoftwareApplicationJsonLd />
      <BreadcrumbJsonLd items={pageBreadcrumbs.home} />
      <TypingTest />
    </>
  )
}
