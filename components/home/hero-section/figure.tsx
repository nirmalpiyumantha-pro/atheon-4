"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
gsap.registerPlugin(ScrollTrigger, useGSAP)

type Props = {
  value: string
  suffix?: string
  title: string
}

export function Figure({ title, value, suffix }: Props) {
  const valueRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!valueRef.current) return

    const target = { value: 0 }
    const number = Number(value)

    gsap.to(target, {
      value: number,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: valueRef.current,
        start: "top 90%",
        once: true,
      },
      onUpdate: () => {
        const decimals = value.includes(".") ? 1 : 0

        valueRef.current!.textContent = target.value.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      },
    })
  })

  return (
    <div className="flex flex-col justify-start items-center gap-3 px-6 odd:border-r lg:border-r lg:last:border-r-0 border-gray-300">
      <div className="text-gray-900 text-3xl lg:text-4xl font-semibold flex items-center">
        <span ref={valueRef}>{value}</span>
        <span>{suffix}</span>
      </div>
      <h3 className="text-gray-900 text-sm max-w-48 text-center">{title}</h3>
    </div>
  )
}
