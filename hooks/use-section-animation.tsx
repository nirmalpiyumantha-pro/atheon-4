import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import type { RefObject } from "react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

type SectionAnimationRefs = {
  tagRef?: RefObject<HTMLElement | null>
  headingRef?: RefObject<HTMLElement | null>
  subHeadingRef?: RefObject<HTMLElement | null>
  buttonRef?: RefObject<HTMLElement | null>
  itemsRef?: RefObject<HTMLElement | null>
}

export function useSectionAnimation({
  tagRef,
  headingRef,
  subHeadingRef,
  buttonRef,
  itemsRef,
}: SectionAnimationRefs) {
  useGSAP(() => {
    if (tagRef?.current) {
      gsap.fromTo(
        tagRef?.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tagRef?.current,
            start: "top bottom",
            once: true,
          },
        },
      )
    }

    if (headingRef?.current) {
      gsap.fromTo(
        headingRef?.current,
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
          scrollTrigger: {
            trigger: headingRef?.current,
            start: "top bottom",
            once: true,
          },
        },
      )
    }

    if (subHeadingRef?.current) {
      gsap.fromTo(
        subHeadingRef?.current,
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
          scrollTrigger: {
            trigger: subHeadingRef?.current,
            start: "top bottom",
            once: true,
          },
        },
      )
    }

    if (buttonRef?.current) {
      gsap.fromTo(
        buttonRef?.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonRef?.current,
            start: "top bottom",
            once: true,
          },
        },
      )
    }

    const items = itemsRef?.current
      ? gsap.utils.toArray<HTMLElement>(itemsRef.current.children)
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
  })
}
