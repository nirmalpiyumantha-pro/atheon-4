"use client"

import Container from "@/components/container"
import Link from "next/link"
import { useRef } from "react"
import { useSectionAnimation } from "@/hooks/use-section-animation"
import SectionHeading from "@/components/section-heading"
import { securityData } from "@/lib/security-data"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function Index() {
  const tagRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subHeadingRef = useRef<HTMLParagraphElement>(null)
  const securityRef = useRef<HTMLDivElement>(null)

  useSectionAnimation({
    tagRef,
    headingRef,
    subHeadingRef,
  })

  useGSAP(() => {
    if (securityRef?.current) {
      const items = securityRef?.current
        ? gsap.utils.toArray<HTMLElement>(securityRef.current.children)
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
      id="security"
      className="pt-16 md:pt-20 scroll-mt-16 md:scroll-mt-16"
    >
      <SectionHeading
        tag="Security & data handling"
        heading="Clear boundaries for your data."
        subHeading="Your workflow should have a clear data path. We work through access, hosting and handling requirements with you before launch."
        tagRef={tagRef}
        headingRef={headingRef}
        subHeadingRef={subHeadingRef}
      />

      <div
        ref={securityRef}
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
      >
        {securityData.map(({ id, icon: Icon, title, text }, index) => (
          <article
            key={id}
            className="border-t border-gray-200 pt-6"
            data-reveal-delay={index}
          >
            <Icon size={25} strokeWidth={1.6} className="text-blue-600" />
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-3 text-sm text-gray-700">{text}</p>
          </article>
        ))}
      </div>

      <Link
        className="mt-6 inline-flex items-center text-sm font-medium text-blue-600 underline underline-offset-4"
        href="/privacy"
      >
        Read our privacy policy
      </Link>
    </Container>
  )
}
