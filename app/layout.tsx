import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://typingchecker.com"),
  title: "Free Typing Speed Test & WPM Checker Online",
  description:
    "Check your typing speed and accuracy instantly. Take a free typing test online and improve your WPM with practice tests and typing exercises.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    images: [
      {
        url: "/typing-speed-checker.webp",
        alt: "Typing speed test and WPM checker preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/typing-speed-checker.webp"],
  },
  verification: {
    google: "r9AWVxVILJihdZWWQqjKsa3Ppi2th1VdCJBB6S_o-ko",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-[100dvh]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="quiktype-theme">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
