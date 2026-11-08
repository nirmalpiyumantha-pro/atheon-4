"use client"

import { ArrowUpRightIcon } from "lucide-react"
import Container from "@/components/container"
import ContactLink from "@/components/contact-link"
import { useRef } from "react"
import { useSectionAnimation } from "@/hooks/use-section-animation"
import SectionHeading from "@/components/section-heading"
import { plansData } from "@/lib/plans-data"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function Index() {
  const tagRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subHeadingRef = useRef<HTMLParagraphElement>(null)
  const plansRef = useRef<HTMLDivElement>(null)

  useSectionAnimation({
    tagRef,
    headingRef,
    subHeadingRef,
  })

  useGSAP(() => {
    if (plansRef?.current) {
      const items = plansRef?.current
        ? gsap.utils.toArray<HTMLElement>(plansRef.current.children)
        : []

      items.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              once: true,
            },
          },
        )
      })
    }
  })

  return (
    <Container
      id="plans"
      className="pt-16 md:pt-20 scroll-mt-16 md:scroll-mt-16"
    >
      <SectionHeading
        tag="Plans & deployment"
        heading={
          <>
            Your automation.
            <br />
            <span className="text-blue-600">Two ways to run it.</span>
          </>
        }
        subHeading="Choose who manages the environment. We’ll shape the build, support and running costs around your business."
        tagRef={tagRef}
        headingRef={headingRef}
        subHeadingRef={subHeadingRef}
      />

      <div
        ref={plansRef}
        className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {plansData.map(({ id, label, title, description, features, cta, interest }) => (
          <article
            key={id}
            className="flex min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
          >
            <h3 className="text-3xl leading-tight font-semibold tracking-tight text-blue-600 max-md:min-h-0 max-lg:min-h-18">
              {label}
            </h3>
            <p className="mt-4 text-xl font-semibold leading-tight text-gray-900">
              {title}
            </p>
            <p className="mt-3 text-sm text-gray-700 max-md:min-h-0 max-lg:min-h-12">
              {description}
            </p>
            <dl className="my-8">
              {features.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-1 gap-2 border-t border-slate-200 py-4 text-sm leading-relaxed sm:grid-cols-[1fr_3fr] sm:gap-3"
                >
                  <dt className="font-medium text-gray-900 text-sm">{label}</dt>
                  <dd className="text-gray-700 text-sm">{value}</dd>
                </div>
              ))}
            </dl>
            <ContactLink enquiry={interest} className="mt-auto">
              <button className="group rounded-sm px-4 py-3 bg-blue-600 text-sm font-medium cursor-pointer text-white flex items-center justify-center gap-2 w-full">
                {cta}
                <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </ContactLink>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-col items-stretch justify-between gap-5 rounded-xl bg-blue-50 p-6 md:flex-row md:items-center">
        <div>
          <h3 className="text-lg font-semibold">Not sure which fits?</h3>
          <p className="mt-1 text-sm text-gray-700">
            Tell us about your setup. We’ll help you choose.
          </p>
        </div>
        <ContactLink enquiry="general" className="mt-auto">
          <button className="group rounded-sm px-4 py-3 text-blue-600 text-sm cursor-pointer bg-white flex items-center justify-center gap-2 w-full">
            Help me choose
            <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </ContactLink>
      </div>

      <p className="mt-5 max-w-4xl text-xs leading-relaxed text-gray-700">
        Pricing is scoped to your project. Development, hosting, third-party
        subscriptions, usage costs and support responsibilities are clarified in
        your proposal.
      </p>
    </Container>
  )
}
