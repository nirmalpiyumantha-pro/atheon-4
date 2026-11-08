"use client"

import Image from "next/image"
import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"
import Container from "@/components/container"
import illustration from "@/assets/images/atheon-agent-capabilities.webp"
import { useRef } from "react"
import { useSectionAnimation } from "@/hooks/use-section-animation"
import SectionHeading from "@/components/section-heading"
import { highlightsData, supportingData } from "@/lib/ai-agent-data"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function Index() {
  const tagRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subHeadingRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const highlightsRef = useRef<HTMLDivElement>(null)
  const supportingRef = useRef<HTMLDivElement>(null)

  useSectionAnimation({
    tagRef,
    headingRef,
    subHeadingRef,
    buttonRef,
  })

  useGSAP(() => {
    if (highlightsRef?.current) {
      const items = highlightsRef?.current
        ? gsap.utils.toArray<HTMLElement>(highlightsRef.current.children)
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

    if (supportingRef?.current) {
      const items = supportingRef?.current
        ? gsap.utils.toArray<HTMLElement>(supportingRef.current.children)
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
      id="ai-agents"
      className="pt-16 md:pt-20 scroll-mt-16 md:scroll-mt-16"
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeading
            tag="The Atheon AI agent"
            heading={
              <div className="leading-14">
                Your new employee.
                <br />
                <span className="text-blue-600">Built to get things done.</span>
              </div>
            }
            subHeading="An AI agent built around your business process, connecting customer conversations with your knowledge, tools and workflows."
            tagRef={tagRef}
            headingRef={headingRef}
            subHeadingRef={subHeadingRef}
          />
          <Link
            ref={buttonRef}
            href="/#contact-us"
            className="mt-6 group inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Discuss Your AI Agent
            <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <figure className="min-w-0">
          <Image
            src={illustration}
            alt="Atheon’s circuit logo connects language, voice, images and business systems."
            sizes="(max-width: 767px) 100vw, 600px"
            className="h-auto w-full rounded-xl border border-gray-200 md:rounded-2xl"
          />
        </figure>
      </div>

      <div
        ref={highlightsRef}
        className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4"
      >
        {highlightsData.map(({ id, icon: Icon, title, text }) => (
          <article
            key={id}
            className="flex min-w-0 flex-col border-t border-gray-200 pt-6"
          >
            <span className="mb-4 text-blue-600">
              <Icon
                size={6}
                className="size-6"
                strokeWidth={1.6}
                aria-hidden="true"
              />
            </span>
            <h3 className="text-lg leading-7 font-semibold tracking-tight">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-700">{text}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-gray-200 bg-blue-50 p-6 sm:p-8">
        <h3 className="mb-8 text-2xl leading-8 font-semibold">
          Responsibility. Memory. Initiative.
        </h3>
        <div
          ref={supportingRef}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {supportingData.map(({ id, icon: Icon, title, text }) => (
            <article
              key={id}
              className="min-w-0 border-t border-gray-200 pt-6 first:border-t-0 first:pt-0 md:border-t-0 md:pt-0"
            >
              <Icon
                size={23}
                strokeWidth={1.6}
                className="mb-3 text-blue-600"
                aria-hidden="true"
              />
              <h4 className="text-base leading-6 font-semibold">{title}</h4>
              <p className="mt-2 text-sm leading-7 text-gray-700">{text}</p>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-5 text-xs leading-6 text-gray-500">
        Supported languages, inputs and integrations are agreed during setup and
        tested with your team before launch.
      </p>
    </Container>
  )
}
