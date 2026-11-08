"use client"

import { useActionState, useEffect } from "react"
import { sendEmail, State } from "@/app/actions/email"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"
import { enquiryOptions } from "@/lib/email-schema"

const initialState = {
  success: false,
  timestamp: 0,
  errors: {},
}

type Props = {
  className?: string
}

export function ContactForm({ className }: Props) {
  const [state, formAction, pending] = useActionState<State, FormData>(
    sendEmail,
    initialState,
  )
  useEffect(() => {
    if (!state.timestamp) return

    if (state.success) {
      toast.success(
        "Thank you for contacting us. We will get back to you soon.",
      )
    } else {
      toast.error("Failed to send your message. Please try again.")
    }
  }, [state])

  return (
    <div
      className={cn(
        "p-6 md:p-8 border border-blue-200 rounded-2xl flex flex-col gap-6 w-full",
        className,
      )}
    >
      <div className="flex flex-col gap-3 pt-5">
        <h3 className="text-gray-900 text-2xl font-semibold">
          Tell us about your project
        </h3>
        <p className="text-gray-700 text-sm">
          Choose what you’re interested in, then tell us a little about your
          business.
        </p>
      </div>

      <form action={formAction} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <label
            htmlFor="enquiry_option"
            className="text-xs text-gray-900 font-medium"
          >
            What are you interested in?
          </label>

          <select
            id="enquiry_option"
            name="enquiry_option"
            defaultValue="general"
            required
            className="w-full min-w-0 rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-gray-900 focus:border-blue-600 focus:outline-2 focus:outline-blue-100 focus:outline-offset-1"
          >
            {enquiryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {state.errors?.enquiry_option?.[0] && (
            <p className="text-sm text-red-500 w-full">
              {state.errors.enquiry_option[0]}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="name" className="text-xs text-gray-900 font-medium">
            Your Name
          </label>
          <input
            className="w-full min-w-0 rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-2 focus:outline-blue-100 focus:outline-offset-1"
            name="name"
            placeholder="Full Name"
            type="text"
            required
          />
          {state.errors?.name?.[0] && (
            <p className="text-sm text-red-500 w-full">
              {state.errors.name[0]}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="text-xs text-gray-900 font-medium">
            Email
          </label>
          <input
            className="w-full min-w-0 rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-2 focus:outline-blue-100 focus:outline-offset-1"
            name="email"
            placeholder="you@company.com"
            type="text"
            required
          />
          {state.errors?.email?.[0] && (
            <p className="text-sm text-red-500 mt-2 w-full">
              {state.errors.email[0]}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label
            htmlFor="message"
            className="text-xs text-gray-900 font-medium"
          >
            What would you like to improve?
          </label>
          <textarea
            className="resize-none h-44 w-full min-w-0 rounded-md border border-blue-100 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-600 focus:outline-2 focus:outline-blue-100 focus:outline-offset-1"
            name="message"
            placeholder="Describe the task, the tools you use and what you'd like to change..."
            required
          />
          {state.errors?.message?.[0] && (
            <p className="text-sm text-red-500 mt-2 w-full">
              {state.errors.message[0]}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={pending}
          className="group hidden sm:block rounded-sm px-5 py-4 bg-blue-600 font-semibold text-sm cursor-pointer text-white sm:flex items-center gap-2 justify-between"
        >
          Send message
          <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>

        <div className="text-xs text-gray-500">
          Your details are sent to Atheon so we can respond. Read our{" "}
          <Link href="/privacy" className="text-blue-600 underline">
            Privacy Policy
          </Link>
        </div>
      </form>
    </div>
  )
}
