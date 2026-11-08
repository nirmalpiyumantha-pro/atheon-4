import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type Props = {
  className?: string
  id?: string
  children: ReactNode
}

export default function Container({ className, children, id }: Props) {
  return (
    <section id={id} className={cn("mx-auto max-w-7xl px-6 w-full", className)}>
      {children}
    </section>
  )
}
