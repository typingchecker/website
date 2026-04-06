import Image from "next/image"
import { cn } from "@/lib/utils"

interface SiteLogoProps {
  width: number
  height: number
  className?: string
  priority?: boolean
}

/**
 * Two assets: `dark-logo` = dark ink for light UI; `light-logo` = light ink for dark UI.
 * Switches with Tailwind `dark:` so the correct logo matches `html.dark` / `html.light`
 * on first paint (avoids next-themes `resolvedTheme` being undefined → wrong/invisible logo on refresh).
 */
export function SiteLogo({ width, height, className, priority }: SiteLogoProps) {
  const shared = { width, height, priority, alt: "QuikType" as const }

  return (
    <span className="inline-block shrink-0">
      <Image
        {...shared}
        src="/dark-logo.webp"
        className={cn(className, "block dark:hidden")}
      />
      <Image
        {...shared}
        src="/light-logo.webp"
        className={cn(className, "hidden dark:block")}
      />
    </span>
  )
}
