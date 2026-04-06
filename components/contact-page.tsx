"use client"

import { useCallback, useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteShell } from "@/components/site-shell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CONTACT_EMAIL } from "@/lib/contact"

export function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      const subject = encodeURIComponent(`TypingChecker contact from ${name || "visitor"}`)
      const body = encodeURIComponent(
        [`Name: ${name || "(not provided)"}`, `Email: ${email || "(not provided)"}`, "", message].join("\n"),
      )
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    },
    [name, email, message],
  )

  return (
    <SiteShell mainClassName="items-start">
      <div className="mx-auto w-full max-w-5xl">
     

        <div className="rounded-xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40 sm:p-8">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">Contact us</h1>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-neutral-400">
            Questions, feedback, or bug reports? Send us a message. We read every note.
          </p>

          <p className="mt-4 text-sm text-zinc-600 dark:text-neutral-400">
            You can also email us directly at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Name</Label>
              <Input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="min-h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-h-11"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="How can we help?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[120px] resize-y"
              />
            </div>
            <Button type="submit" size="lg" className="min-h-11 w-full sm:w-auto">
              Open in email app
            </Button>
            <p className="text-xs leading-relaxed text-zinc-500 dark:text-neutral-500">
              Submitting opens your email client with a draft to {CONTACT_EMAIL}. No data is stored on our servers.
            </p>
          </form>
        </div>
      </div>
    </SiteShell>
  )
}
