import type { ReactNode, RefObject } from "react"
import { cn } from "@/lib/utils"

type Props = {
  tag: string
  heading: ReactNode
  subHeading: string
  tagRef: RefObject<HTMLSpanElement | null>
  headingRef: RefObject<HTMLHeadingElement | null>
  subHeadingRef: RefObject<HTMLParagraphElement | null>
  className?: string
}

export default function SectionHeading({
  tag,
  heading,
  subHeading,
  tagRef,
  headingRef,
  subHeadingRef,
  className,
}: Props) {
  return (
    <header className={cn("max-w-full", className)}>
      <span
        ref={tagRef}
        className="text-xs text-blue-500 font-medium rounded-full px-3.5 py-2.5 bg-blue-50 border border-gray-200"
      >
        {tag}
      </span>
      <h2
        ref={headingRef}
        className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight"
      >
        {heading}
      </h2>
      <p ref={subHeadingRef} className="mt-4 max-w-lg text-base text-gray-700">
        {subHeading}
      </p>
    </header>
  )
}
