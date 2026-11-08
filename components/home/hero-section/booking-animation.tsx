"use client"

import { useRef } from "react"
import { CheckIcon, LoaderCircleIcon, MessageSquareIcon } from "lucide-react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import logo from "@/assets/images/logo.png"
import { aboutData } from "@/lib/about-data"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
}

export default function BookingAnimation({ className }: Props) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
      })

      // Initial states
      gsap.set("[data-booking-message]", {
        autoAlpha: 0,
        y: 30,
      })

      gsap.set("[data-availability-done], [data-technician-done]", {
        autoAlpha: 0,
        display: "none",
      })

      gsap.set("[data-confirmation-item]", {
        autoAlpha: 0,
        y: 20,
      })

      // 1. Customer message
      timeline.to("[data-customer-message]", {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      })

      // 2. Booking assistant message
      timeline.to("[data-assistant-message]", {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      })

      // 3. Check availability
      timeline
        .to({}, { duration: 0.8 })
        .to("[data-availability-loading]", {
          autoAlpha: 0,
          duration: 0.2,
        })
        .set("[data-availability-loading]", {
          display: "none",
        })
        .set("[data-availability-done]", {
          display: "flex",
        })
        .to("[data-availability-done]", {
          autoAlpha: 1,
          duration: 0.2,
        })

      // 4. Match technician
      timeline
        .to({}, { duration: 0.5 })
        .to("[data-technician-loading]", {
          autoAlpha: 0,
          duration: 0.2,
        })
        .set("[data-technician-loading]", {
          display: "none",
        })
        .set("[data-technician-done]", {
          display: "flex",
        })
        .to("[data-technician-done]", {
          autoAlpha: 1,
          duration: 0.2,
        })

      // 5. Booking confirmation message
      timeline.to("[data-confirmation-message]", {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      })

      // 6. Confirmation details appear one after another
      timeline.to("[data-confirmation-item]", {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.6,
        ease: "power2.out",
      })
    },
    { scope: container },
  )

  return (
    <div
      ref={container}
      className={cn(
        "flex flex-col justify-center items-center gap-4 sm:gap-8",
        className,
      )}
    >
      {/* Customer message */}
      <div
        data-booking-message
        data-customer-message
        className="p-6 border border-gray-200 rounded-br-4xl rounded-t-4xl shadow-[0_0_30px_8px_rgba(0,0,0,0.08)] flex flex-col gap-4 w-full sm:w-md"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquareIcon className="size-4 text-blue-600" />
            <span className="text-xs text-gray-700">Customer</span>
          </div>

          <span className="text-xs text-gray-700">Just now</span>
        </div>

        <p className="text-lg text-gray-900">
          Can I book an AC service for Tuesday?
        </p>
      </div>

      {/* Booking assistant message */}
      <div
        data-booking-message
        data-assistant-message
        className="p-6 border border-gray-200 rounded-bl-4xl rounded-t-4xl shadow-[0_0_30px_8px_rgba(0,0,0,0.08)] flex flex-col gap-4 w-full sm:w-md ml-6 sm:ml-24"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" className="max-w-6" />
            <h6 className="text-base font-semibold text-blue-600">
              {aboutData.name}
            </h6>
          </div>

          <span className="text-xs text-gray-700 px-3 py-2 bg-blue-50 rounded-full font-medium border border-gray-200">
            Booking assistant
          </span>
        </div>

        <p className="text-base text-gray-900">Let me arrange that for you.</p>

        <div className="flex flex-col gap-2">
          {/* Availability loading */}
          <div data-availability-loading className="flex items-center gap-2">
            <LoaderCircleIcon className="text-blue-600 size-4 animate-spin" />
            <span className="text-sm text-gray-700">
              Checking availability...
            </span>
          </div>

          {/* Availability completed */}
          <div data-availability-done className="hidden items-center gap-2">
            <CheckIcon className="text-green-500 size-4" />
            <span className="text-sm text-gray-700">
              Tuesday at 2:00 PM available
            </span>
          </div>

          {/* Technician loading */}
          <div data-technician-loading className="flex items-center gap-2">
            <LoaderCircleIcon className="text-blue-600 size-4 animate-spin" />
            <span className="text-sm text-gray-700">
              Matching a technician...
            </span>
          </div>

          {/* Technician completed */}
          <div data-technician-done className="hidden items-center gap-2">
            <CheckIcon className="text-green-500 size-4" />
            <span className="text-sm text-gray-700">Daniel Silva matched</span>
          </div>
        </div>
      </div>

      {/* Booking confirmation message */}
      <div
        data-booking-message
        data-confirmation-message
        className="p-6 border border-gray-200 rounded-bl-4xl rounded-t-4xl shadow-[0_0_30px_8px_rgba(0,0,0,0.08)] flex flex-col gap-4 w-full sm:w-md text-white bg-blue-600 ml-6 sm:ml-24"
      >
        <div className="flex items-center justify-between">
          <p className="text-lg font-medium">Your AC service is booked.</p>
          <span className="text-xs text-green-700 px-3 py-2 bg-green-50 rounded-full font-medium">
            Booked
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm">Tuesday at 2:00 PM available</p>
          <p className="text-sm">Daniel Silva matched</p>
        </div>

        <div className="flex items-center gap-2">
          <div data-confirmation-item className="flex items-center gap-2">
            <CheckIcon className="text-green-200 size-4" />
            <span className="text-sm">Calendar updated</span>
          </div>

          <div data-confirmation-item className="flex items-center gap-2">
            <CheckIcon className="text-green-200 size-4" />
            <span className="text-sm">Confirmation sent</span>
          </div>
        </div>
      </div>
    </div>
  )
}
