import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteShell } from "@/components/site-shell"
import { CONTACT_EMAIL } from "@/lib/contact"

const sections = [
  {
    title: "Introduction",
    body: (
      <>
        <p>
          TypingChecker (“we,” “our,” or “us”) operates the website{" "}
          <a
            href="https://typingchecker.com"
            className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
          >
            typingchecker.com
          </a>{" "}
          (the “Service”). This Privacy Policy explains how we handle information when you use our free online typing
          speed test and related pages (for example, our contact page).
        </p>
        <p className="mt-4">
          By using the Service, you agree to this policy. If you do not agree, please do not use the site.
        </p>
      </>
    ),
  },
  {
    title: "What TypingChecker is",
    body: (
      <p>
        TypingChecker is a browser-based typing speed and accuracy tool. You can practice typing, see words per minute
        (WPM) and accuracy, and use features such as different modes and optional sound feedback. You do not need to
        create an account to use the core typing test.
      </p>
    ),
  },
  {
    title: "Typing activity and test content",
    body: (
      <>
        <p>
          Your typing sessions run in your web browser. The text you type and your performance metrics (such as WPM
          and accuracy) are calculated locally on your device for the purpose of showing you results during your test.
        </p>
        <p className="mt-4">
          We do not operate a login system for the typing test and do not ask you to upload your typing history to our
          servers as part of the standard test experience. Unless you contact us (see below), we do not collect the
          paragraphs you type for storage on our systems.
        </p>
      </>
    ),
  },
  {
    title: "Analytics",
    body: (
      <>
        <p>
          We use Vercel Analytics to understand how the site is used—for example, which pages are viewed and aggregated
          usage patterns. This helps us improve performance and the user experience. Analytics may use cookies or similar
          technologies and may process technical information such as a truncated or anonymized IP address, device/browser
          type, and general location derived from IP at a region level.
        </p>
        <p className="mt-4">
          For more detail, see{" "}
          <a
            href="https://vercel.com/docs/analytics/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
          >
            Vercel’s documentation
          </a>{" "}
          and privacy policy as applicable.
        </p>
      </>
    ),
  },
  {
    title: "Theme and local preferences",
    body: (
      <p>
        If you change the appearance (for example, light or dark theme), your choice may be saved in your browser’s
        local storage (under a key such as <code className="rounded bg-zinc-200 px-1 py-0.5 text-xs dark:bg-neutral-800">quiktype-theme</code>) so
        the site remembers your preference on return visits. This data stays on your device unless you clear site data.
      </p>
    ),
  },
  {
    title: "Contact form and email",
    body: (
      <>
        <p>
          If you use our contact flow, your message is opened in your own email application via a{" "}
          <code className="rounded bg-zinc-200 px-1 py-0.5 text-xs dark:bg-neutral-800">mailto:</code> link. We do not
          receive your message until you send it from your email provider. Any information you choose to include (name,
          email address, message text) is handled according to your email provider’s policies once sent.
        </p>
        <p className="mt-4">
          For privacy-related requests, you may contact us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Hosting and service providers",
    body: (
      <p>
        The site is delivered over the internet using hosting and infrastructure providers (for example, Vercel and/or
        other cloud services). Those providers process technical data needed to serve pages and run analytics, as
        described in their respective policies.
      </p>
    ),
  },
  {
    title: "Children’s privacy",
    body: (
      <p>
        The Service is not directed at children under 13, and we do not knowingly collect personal information from
        children in a way that requires parental consent. If you believe we have received such information, please
        contact us and we will take appropriate steps.
      </p>
    ),
  },
  {
    title: "Your choices",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>You can disable or limit cookies and similar technologies in your browser settings.</li>
        <li>You can clear local storage for this site to remove saved theme preferences.</li>
        <li>You may use browser tools or extensions that block analytics scripts (note: some site features may not work as intended).</li>
      </ul>
    ),
  },
  {
    title: "International visitors",
    body: (
      <p>
        If you access the site from outside the United States, your information may be processed in the United States or
        other countries where our providers operate, which may have different data protection rules than your country.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The “Last updated” date at the bottom will change when we
        do. Continued use of the Service after changes means you accept the updated policy.
      </p>
    ),
  },
]

export function PrivacyPolicyPage() {
  return (
    <SiteShell mainClassName="items-start">
      <div className="mx-auto w-full max-w-2xl">
        <Link
          href="/"
          className="mb-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 dark:text-neutral-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          Back to typing test
        </Link>

        <article className="rounded-xl border border-zinc-200 bg-white/80 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/40 sm:p-10">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-neutral-500">Last updated: April 5, 2026</p>

          <div className="mt-8 space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-neutral-400 sm:text-base">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">{section.title}</h2>
                <div className="mt-3 space-y-4">{section.body}</div>
              </section>
            ))}

            <section>
              <h2 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">Contact</h2>
              <p className="mt-3">
                For questions about this Privacy Policy or our privacy practices, email{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </div>
    </SiteShell>
  )
}
