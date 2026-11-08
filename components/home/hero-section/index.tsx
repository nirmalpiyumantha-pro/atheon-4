"use client"

import Container from "@/components/container"
import Link from "next/link"
import ContactLink from "@/components/contact-link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useState } from "react"
import { ArrowUpRightIcon, PlayIcon } from "lucide-react"
import { PerformanceFigures } from "@/components/home/hero-section/performance-figures"
import BookingAnimation from "@/components/home/hero-section/booking-animation"
import { PromoPlayer } from "@/components/home/hero-section/promo-player"

gsap.registerPlugin(useGSAP)

export function Index() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subHeadingRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const [isPromoOpen, setIsPromoOpen] = useState(false)

  useGSAP(() => {
    if (!headingRef.current || !subHeadingRef.current || !ctaRef.current) {
      return
    }

    gsap.fromTo(
      headingRef.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
    )

    gsap.fromTo(
      subHeadingRef.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      },
    )

    gsap.fromTo(
      ctaRef.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
      },
    )
  }, [])

  return (
    <Container
      className="scroll-mt-20 flex flex-col gap-8 lg:gap-0 mt-28 lg:mt-0"
      id="home"
    >
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:h-[768px]">
        <div className="flex flex-col lg:justify-center lg:items-center">
          <div>
            <span className="text-sm text-blue-500 font-medium">
              AI agents & business automation
            </span>
            <h1
              className="text-[48px] md:text-[56px] lg:text-[64px] font-bold leading-14 md:leading-18 text-gray-900 max-w-5xl mt-3"
              ref={headingRef}
            >
              Upgrade your <br className="hidden lg:block" /> Business with{" "}
              <br /> <span className="text-blue-600">AI Workforce</span>
            </h1>
            <p
              className="text-lg md:leading-6 text-gray-700 max-w-xl mt-4"
              ref={subHeadingRef}
            >
              Atheon designs, builds and maintains custom AI agents and business
              automations
            </p>
            <div
              className="flex flex-col md:flex-row gap-2 md:gap-4 flex-1 mt-4 md:mt-6"
              ref={ctaRef}
            >
              <ContactLink enquiry="demo">
                <button className="group rounded-sm px-4 py-3 bg-blue-600 text-sm font-medium cursor-pointer text-white flex items-center justify-center gap-2 w-full">
                  Book a Demo
                  <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </ContactLink>
              <Link href="#">
                <button
                  className="group rounded-sm px-4 py-3 ring-blue-600 ring-2 ring-inset text-sm font-medium cursor-pointer text-blue-600 flex items-center justify-center gap-2 w-full"
                  onClick={() => setIsPromoOpen(true)}
                >
                  See Atheon in Action
                  <PlayIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <BookingAnimation className="flex-1" />
      </div>
      <PerformanceFigures />
      <PromoPlayer open={isPromoOpen} onOpenChangeAction={setIsPromoOpen} />
    </Container>
  )
}
