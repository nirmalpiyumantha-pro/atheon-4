"use client"

import Container from "@/components/container"
import Faq from "@/components/home/faqs-section/faq"
import { faqsData } from "@/lib/faqs-data"
import { useRef } from "react"
import { useSectionAnimation } from "@/hooks/use-section-animation"
import SectionHeading from "@/components/section-heading"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function Index() {
  const tagRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subHeadingRef = useRef<HTMLParagraphElement>(null)
  const faqsRef = useRef<HTMLDivElement>(null)

  useSectionAnimation({
    tagRef,
    headingRef,
    subHeadingRef,
  })

  useGSAP(() => {
    if (faqsRef?.current) {
      const items = faqsRef?.current
        ? gsap.utils.toArray<HTMLElement>(faqsRef.current.children)
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
      className="pt-16 md:pt-20 scroll-mt-16 md:scroll-mt-16 flex flex-col md:flex-row gap-12"
      id="faqs"
    >
      <SectionHeading
        tag="FAQs"
        heading="Before we get started."
        subHeading="A few practical answers about choosing, building and running your automation."
        tagRef={tagRef}
        headingRef={headingRef}
        subHeadingRef={subHeadingRef}
        className="flex-1"
      />
      <div ref={faqsRef} className="flex-1 flex flex-col gap-4 w-full">
        {faqsData.map((faq) => (
          <Faq key={faq.id} title={faq.title} description={faq.description} />
        ))}
      </div>
    </Container>
  )
}
