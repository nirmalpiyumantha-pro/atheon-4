"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUpRightIcon, Maximize2Icon } from "lucide-react"
import Container from "@/components/container"
import { capabilitiesData } from "@/lib/capabilities-data"
import { servicesData } from "@/lib/services-data"
import Link from "next/link"
import { cn } from "@/lib/utils"
import SectionHeading from "@/components/section-heading"
import { useSectionAnimation } from "@/hooks/use-section-animation"

export function Index() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const articlesRef = useRef<(HTMLElement | null)[]>([])
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const tagRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subHeadingRef = useRef<HTMLParagraphElement>(null)
  const capabilitiesRef = useRef<HTMLDivElement>(null)

  useSectionAnimation({
    tagRef,
    headingRef,
    subHeadingRef,
  })

  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add("(min-width: 1024px)", () => {
        articlesRef.current.forEach((article, index) => {
          if (!article) return

          ScrollTrigger.create({
            trigger: article,
            start: "top top+=256",
            end: "bottom top+=256",
            onEnter: () => setActive(index),
            onEnterBack: () => setActive(index),
          })
        })
      })

      return () => media.revert()
    },
    { scope: sectionRef },
  )

  useGSAP(
    () => {
      const images = imagesRef.current.filter(
        (image): image is HTMLImageElement => image !== null,
      )

      gsap.to(images, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
      })

      const activeImage = imagesRef.current[active]

      if (activeImage) {
        gsap.to(activeImage, {
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
        })
      }
    },
    {
      scope: sectionRef,
      dependencies: [active],
    },
  )

  useGSAP(
    () => {
      const media = gsap.matchMedia()

      media.add("(max-width: 1023px)", () => {
        if (!capabilitiesRef.current) return

        const items = gsap.utils.toArray<HTMLElement>(
          capabilitiesRef.current.children,
        )

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
      })

      return () => media.revert()
    },
    { scope: sectionRef },
  )

  return (
    <Container className="scroll-mt-32" id="services">
      <SectionHeading
        tag="From request to result"
        heading="See what happens after the first message."
        subHeading="Four services of how we connect your information, tools and workflows to get the work done."
        tagRef={tagRef}
        headingRef={headingRef}
        subHeadingRef={subHeadingRef}
      />

      <div
        ref={sectionRef}
        className="grid grid-cols-1 items-stretch gap-16 lg:grid-cols-[1fr_2fr] mt-16"
      >
        {/* Descriptions */}
        <div className="grid min-w-0" ref={capabilitiesRef}>
          {servicesData.map((service, index) => (
            <article
              key={service.label}
              id={`capability-${index}`}
              ref={(element) => {
                articlesRef.current[index] = element
              }}
              className="flex min-h-0 min-w-0 flex-col justify-center lg:pb-44 scroll-mt-60"
            >
              <div className="lg:max-w-xl">
                <span className="text-xs font-medium text-blue-600">
                  {service.label}
                </span>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-5 text-base text-gray-700">{service.text}</p>
                <p className="mt-6 border-t border-gray-200 pt-5 text-sm font-medium text-black">
                  {service.outcome}
                </p>
                <Link
                  href="/#contact-us"
                  className="text-blue-600 flex items-center hover:underline hover:underline-offset-4 text-sm mt-6 gap-2"
                >
                  Discuss a similar workflow
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </div>

              {/* Mobile image */}
              <figure className="mt-6 lg:hidden">
                <a
                  href={capabilitiesData[index].image.src.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={capabilitiesData[index].image.src}
                    alt={capabilitiesData[index].image.alt}
                    sizes="(max-width: 1023px) 100vw, 1px"
                    className="h-auto w-full rounded-xl border border-gray-200"
                  />

                  <div className="flex py-6 items-center justify-center gap-2 rounded-b-xl text-sm text-blue-600">
                    <Maximize2Icon className="size-4" aria-hidden="true" />
                    Open and zoom workflow
                    <span className="sr-only">(new tab)</span>
                  </div>
                </a>
              </figure>
            </article>
          ))}
        </div>

        {/* Desktop sticky showcase */}
        <div className="hidden min-w-0 min-lg:block">
          <div className="sticky top-64">
            <div className="relative grid overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 shadow-xs">
              {capabilitiesData.map((item, index) => (
                <Image
                  key={item.id}
                  ref={(element) => {
                    imagesRef.current[index] = element
                  }}
                  src={item.image.src}
                  alt={item.image.alt}
                  aria-hidden={active !== index}
                  sizes="(min-width: 1024px) 66vw, 1px"
                  loading="eager"
                  className="col-start-1 row-start-1 h-auto w-full object-contain"
                  style={{
                    opacity: active === index ? 1 : 0,
                  }}
                />
              ))}
            </div>

            <div className="px-1 mt-4 flex justify-end">
              <a
                href={capabilitiesData[active].image.src.src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-blue-600 hover:underline"
              >
                Open full size
                <Maximize2Icon className="size-4" aria-hidden="true" />
                <span className="sr-only">(new tab)</span>
              </a>
            </div>

            {/* Progress navigation */}
            <nav className="mt-3 flex justify-center gap-2">
              {servicesData.map((service, index) => (
                <a
                  key={service.label}
                  href={`#capability-${index}`}
                  aria-label={service.label}
                  aria-current={active === index ? "step" : undefined}
                  onClick={() => setActive(index)}
                  className="grid h-8 w-12 items-center"
                >
                  <span
                    className={cn(
                      "h-1 rounded-full transition-colors duration-200",
                      active === index ? "bg-blue-600" : "bg-blue-100",
                    )}
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </Container>
  )
}
