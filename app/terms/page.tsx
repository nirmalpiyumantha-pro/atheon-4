import type { Metadata } from "next"
import Container from "@/components/container"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Website Terms",
  description:
    "Terms for using the Atheon website and requesting information about our AI agents and automation services.",
  alternates: { canonical: "/terms" },
}

export default function Terms() {
  return (
    <Container className="scroll-mt-20 py-28">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-blue-600 underline underline-offset-4"
      >
        Back to Atheon
      </Link>

      <header className="mt-6">
        <h1 className="text-4xl leading-tight font-semibold sm:text-5xl">
          Website terms
        </h1>
        <p className="mt-4 text-xs text-gray-500">
          Last updated: 29 October 2026
        </p>
        <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
          These terms explain how to use the Atheon website and what to expect
          when you enquire about our services.
        </p>
      </header>

      <div className="[&_section]:mt-8 [&_section]:border-t [&_section]:border-gray-200 [&_section]:pt-8">
        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            About Atheon
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            Atheon is an AI agents and business automation business based in Sri
            Lanka. Contact us at{" "}
            <a
              href="mailto:contact@atheonworks.com"
              className="break-words text-blue-700 underline underline-offset-4"
            >
              contact@atheonworks.com
            </a>{" "}
            with questions about this website or our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Information and examples
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            This website introduces our services. Workflow illustrations and
            conversations show example scenarios. They do not guarantee that
            every integration, language, outcome or feature will be available
            for every project. We confirm feasibility, scope, access
            requirements and expected outcomes with you before work begins.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            Information may change as our services and third-party platforms
            develop. Please confirm any detail you intend to rely on directly
            with us.
          </p>
        </section>

        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Enquiries, demos and service agreements
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            Sending an enquiry or requesting a demo does not create a paid
            subscription, confirm an appointment or commit either party to a
            project. A demo time is arranged separately by email.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            Paid work is governed by a separate written agreement. That
            agreement defines deliverables, fees, payment terms, deployment,
            data handling, support, ownership, cancellation and the
            responsibilities of each party. These website terms do not replace
            or amend an existing service agreement.
          </p>
        </section>

        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Responsible use
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            Use the website lawfully. Do not attempt unauthorised access,
            introduce malicious code, disrupt the site or send unlawful
            material. Share only information you are entitled to provide, and do
            not submit credentials or sensitive third-party records through the
            enquiry form.
          </p>
        </section>

        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Content and third-party services
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            Atheon’s branding and original website materials belong to Atheon or
            their respective rights holders. You may view and share links to the
            site. Obtain permission before reproducing our materials
            commercially or implying our endorsement.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            Third-party names and logos identify example tools and remain the
            property of their owners. Their appearance does not imply a
            partnership or endorsement. External websites and the YouTube player
            operate under their providers’ own terms and privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Availability and responsibility
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            We aim to keep the website useful and available, but cannot promise
            uninterrupted access or that all information will always be
            error-free. The website provides general service information, not
            professional advice for a particular decision. Nothing in these
            terms excludes a right or responsibility that cannot lawfully be
            excluded.
          </p>
        </section>

        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Privacy, applicable law and changes
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            Our{" "}
            <Link
              href="/privacy"
              className="text-blue-700 underline underline-offset-4"
            >
              privacy policy
            </Link>{" "}
            explains the handling of website visits and enquiries. These website
            terms are governed by the laws of Sri Lanka, subject to any
            mandatory rights that apply to you. Please contact us first so we
            can try to resolve a concern.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            We may update these website terms; the date above shows the latest
            revision. Changes to a signed service agreement follow that
            agreement’s own process.
          </p>
        </section>
      </div>
    </Container>
  )
}
