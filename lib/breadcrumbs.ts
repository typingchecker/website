import type { BreadcrumbItem } from "@/components/breadcrumb-json-ld"

/** Breadcrumb trails for JSON-LD — last item is the current page */
export const pageBreadcrumbs: Record<string, BreadcrumbItem[]> = {
  home: [{ name: "Home", path: "/" }],
  contact: [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ],
  privacy: [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy" },
  ],
  tips: [
    { name: "Home", path: "/" },
    { name: "Tips", path: "/tips" },
  ],
  typingSpeedTest1Minute: [
    { name: "Home", path: "/" },
    { name: "1 Minute Typing Speed Test", path: "/typing-speed-test-1-minute" },
  ],
  typingSpeedTest30Seconds: [
    { name: "Home", path: "/" },
    { name: "30 Second Typing Test", path: "/typing-speed-test-30-seconds" },
  ],
}
