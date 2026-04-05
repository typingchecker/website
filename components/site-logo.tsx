"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

interface SiteLogoProps {
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function SiteLogo({ width, height, className, priority }: SiteLogoProps) {
  const { resolvedTheme } = useTheme()
  // light-logo = light-colored artwork for dark UI; dark-logo = dark-colored artwork for light UI
  const src = resolvedTheme === "light" ? "/dark-logo.webp" : "/light-logo.webp"

  return (
    <Image
      src={src}
      alt="QuikType"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  )
}
