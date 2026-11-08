"use client"

import Container from "@/components/container"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { ContactForm } from "@/components/home/contact-section/contact-form"
import { useSectionAnimation } from "@/hooks/use-section-animation"
import {
  ClipboardCheckIcon,
  MessageSquareIcon,
  WorkflowIcon,
} from "lucide-react"
import SectionHeading from "@/components/section-heading"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function Index() {
  const tagRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subHeadingRef = useRef<HTMLParagraphElement>(null)
  const startingPointsRef = useRef<HTMLUListElement>(null)

  useSectionAnimation({
    tagRef,
    headingRef,
    subHeadingRef,
  })

  useGSAP(() => {
    if (startingPointsRef?.current) {
      const items = startingPointsRef?.current
        ? gsap.utils.toArray<HTMLElement>(startingPointsRef.current.children)
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
      className="py-16 md:py-20 scroll-mt-16 md:scroll-mt-16 flex flex-col md:flex-row gap-12"
      id="contact-us"
    >
      <div className="flex-1 flex flex-col gap-8">
        <SectionHeading
          tag="Let’s talk"
          heading="Start with the work you want to improve."
          subHeading="You don’t need a technical brief. Tell us what takes too much time, what gets missed or what you want to work better."
          tagRef={tagRef}
          headingRef={headingRef}
          subHeadingRef={subHeadingRef}
        />

        <hr className="border-0 border-t border-gray-200" />

        <div className="flex flex-col gap-4">
          <h4 className="text-base font-semibold text-gray-900">
            A useful starting point
          </h4>
          <ul ref={startingPointsRef} className="flex flex-col gap-3">
            <li className="flex gap-2 items-center">
              <MessageSquareIcon className="size-4 text-blue-600" />
              <span className="text-gray-700 text-sm">
                The task or problem you want to solve
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <WorkflowIcon className="size-4 text-blue-600" />
              <span className="text-gray-700 text-sm">
                The tools your team uses today
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <ClipboardCheckIcon className="size-4 text-blue-600" />
              <span className="text-gray-700 text-sm">
                What a better outcome would look like
              </span>
            </li>
          </ul>
        </div>

        <div className="text-xs flex items-center gap-2">
          <span className="text-gray-500">Prefer email?</span>
          <a
            href="mailto:contact@atheonworks.com"
            className="text-blue-600 underline"
          >
            contact@atheonworks.com
          </a>
        </div>
      </div>

      <div className="flex-1">
        <ContactForm />
      </div>
    </Container>
  )
}
