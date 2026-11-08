"use client"

import Link from "next/link"
import type { ComponentProps } from "react"

type Props = Pick<ComponentProps<typeof Link>, "children" | "className" | "ref"> & {
  enquiry: string
}

export default function ContactLink({ enquiry, ...props }: Props) {
  return (
    <Link
      {...props}
      href={`/?enquiry=${enquiry}#contact-us`}
      onNavigate={(event) => {
        const contact = document.getElementById("contact-us")
        if (!contact || window.location.pathname !== "/") return

        event.preventDefault()
        const url = new URL(window.location.href)
        url.searchParams.set("enquiry", enquiry)
        url.hash = "contact-us"
        if (url.href !== window.location.href) {
          window.history.pushState(null, "", url)
        }
        contact.scrollIntoView({ block: "start" })
      }}
    />
  )
}
