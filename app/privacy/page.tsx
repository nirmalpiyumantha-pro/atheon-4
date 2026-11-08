import type { Metadata } from "next"
import Container from "@/components/container"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Atheon handles website visits, business enquiries and information shared when you contact us.",
  alternates: { canonical: "/privacy" },
}

export default function Privacy() {
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
          Privacy policy
        </h1>
        <p className="mt-4 text-xs text-gray-500">
          Last updated: 29 October 2026
        </p>
        <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
          This policy explains how information is handled when you browse this
          website, play our video or contact Atheon about a project.
        </p>
      </header>

      <div className="[&_section]:mt-8 [&_section]:border-t [&_section]:border-gray-200 [&_section]:pt-8">
        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Who this policy covers
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            Atheon is an AI agents and business automation business based in Sri
            Lanka. For questions about this policy or your information, email{" "}
            <a
              href="mailto:contact@atheonworks.com"
              className="break-words text-blue-700 underline underline-offset-4"
            >
              contact@atheonworks.com
            </a>
            .
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            This policy covers our website and business enquiries. Data
            processed inside a client’s automation is addressed separately in
            the project agreement and any applicable data-processing terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Information you choose to share
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            The enquiry form asks for your name, email address, area of interest
            and a short description of your project. When you select “Send
            message” or “Send demo request,” these details are sent through our
            server and Resend, our email-delivery provider, to
            contact@atheonworks.com. The website does not store these enquiries
            in a form database. Your IP address may be used briefly in server
            memory to limit repeated submissions.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            When you send us an email, we receive the message and the contact
            information included with it. We use these details to respond,
            discuss your requirements, prepare a proposal and manage the
            resulting business correspondence. Please share only what is needed
            for the discussion; do not include passwords, access tokens or
            sensitive customer records.
          </p>
        </section>

        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Website requests and service providers
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            The website hosting provider may process technical request data such
            as your IP address, browser information, requested pages and access
            times to deliver and protect the site. Email providers process
            correspondence when you send an enquiry. These providers may process
            information outside Sri Lanka.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            We have not added advertising trackers or a newsletter sign-up to
            this website. Hosting, security and third-party services can have
            their own data practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Video playback and external links
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            The embedded YouTube player loads only after you select “See Atheon
            in action.” It uses YouTube’s privacy-enhanced embed domain. Playing
            the video connects your browser to YouTube, which can process
            technical and playback information and use browser storage under its
            own policies. Privacy-enhanced mode does not mean that no
            information is processed.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            Read the{" "}
            <a
              href="https://policies.google.com/privacy"
              className="break-words text-blue-700 underline underline-offset-4"
            >
              Google privacy policy
            </a>{" "}
            for YouTube’s practices. Following our LinkedIn link takes you to
            LinkedIn, where its own privacy policy applies.
          </p>
        </section>

        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Handling and keeping correspondence
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            Business correspondence is used for the enquiry and any resulting
            work. Information may be handled by the people and service providers
            involved in that work, or disclosed where required by applicable
            law. The relevant purpose, contractual responsibilities and
            recordkeeping obligations determine how long it needs to be kept.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            Ask us about the handling of a specific message or request its
            deletion using the email address above. If information must be
            retained for an ongoing project, a dispute or a legal obligation, we
            will explain the relevant limitation. No website, email service or
            storage system can guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Your choices and requests
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            You can browse without sending an enquiry or loading the video. You
            can contact us to ask what information we hold about your enquiry,
            correct it, request deletion or raise a privacy concern. We may need
            to verify your identity before acting on a request. Any statutory
            rights and remedies depend on the law applicable to your request and
            the provisions in force at that time.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            For information about Sri Lanka’s data-protection framework, visit
            the{" "}
            <a
              href="https://www.dpa.gov.lk/"
              className="break-words text-blue-600 underline underline-offset-4"
            >
              Data Protection Authority
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl leading-relaxed font-semibold sm:text-2xl">
            Changes to this policy
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-700 text-justify">
            We may update this policy when the website or our handling practices
            change. The date at the top identifies the latest revision.
          </p>
        </section>
      </div>
    </Container>
  )
}
