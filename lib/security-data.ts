import {
  FileCheck2Icon,
  KeyRoundIcon,
  LucideIcon,
  ServerIcon,
} from "lucide-react"

export type SecurityData = {
  id: string
  icon: LucideIcon
  title: string
  text: string
}

export const securityData = [
  {
    id: "6gds6ja8",
    icon: KeyRoundIcon,
    title: "Access with a purpose",
    text: "We agree which data and systems the workflow needs, who can access them and which actions require your team’s approval.",
  },
  {
    id: "id6s5dgh",
    icon: ServerIcon,
    title: "A clear view of the setup",
    text: "We identify the hosting environment and external services involved. Client-owned hosting can still use third-party AI or integration providers.",
  },
  {
    id: "9s0nsdhs",
    icon: FileCheck2Icon,
    title: "Responsibilities defined",
    text: "Access controls, logs, retention, deletion and support responsibilities are agreed for your deployment before it goes live.",
  },
]
