import {
  AudioLinesIcon,
  BellRingIcon,
  HistoryIcon,
  LanguagesIcon,
  LucideIcon,
  MessageSquareTextIcon,
  PlugIcon,
  WorkflowIcon,
} from "lucide-react"

export type AgentData = {
  id: string
  icon: LucideIcon
  title: string
  text: string
}

export const highlightsData: AgentData[] = [
  {
    id: "k47md8sx",
    icon: MessageSquareTextIcon,
    title: "Your customers don’t need the perfect words.",
    text: "Atheon understands typos, casual wording and incomplete requests, then asks for missing details to keep the conversation moving.",
  },
  {
    id: "p82nf5qd",
    icon: AudioLinesIcon,
    title: "A photo. A voice note. Work can start there.",
    text: "Customers can share photos, screenshots or voice notes. Atheon picks out the useful details to keep their request moving forward.",
  },
  {
    id: "x39vb7la",
    icon: LanguagesIcon,
    title: "Make every customer feel understood.",
    text: "Customers can speak in their preferred language. Atheon replies using your business information in the languages your business supports.",
  },
  {
    id: "m64qk2we",
    icon: PlugIcon,
    title: "Fits into your business from the conversation onward.",
    text: "Atheon connects to your existing tools to check availability, update records and complete agreed tasks as the conversation continues.",
  },
]

export const supportingData: AgentData[] = [
  {
    id: "t91hz6rc",
    icon: WorkflowIcon,
    title: "Completes an entire job independently",
    text: "Atheon independently works through multiple steps and connected tools to complete an entire job from request to result.",
  },
  {
    id: "8dehtdq3",
    icon: HistoryIcon,
    title: "Remembers returning customers",
    text: "Atheon uses previous conversations and customer preferences to keep returning customers from having to start over.",
  },
  {
    id: "3dhd3iw7",
    icon: BellRingIcon,
    title: "Takes initiative",
    text: "Atheon follows up on unfinished enquiries, sends reminders and flags issues without waiting for another message.",
  },
]
