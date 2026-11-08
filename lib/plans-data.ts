export type Plan = {
  id: string
  label: string
  title: string
  description: string
  features: Array<Array<string>>
  interest: "managed" | "infrastructure"
  cta: string
}

export const plansData: Plan[] = [
  {
    id: "7shd9shs",
    label: "Managed subscription",
    title: "We run it for you.",
    description:
      "For teams that want their automation managed by Atheon, without looking after the infrastructure.",
    features: [
      ["Hosting", "Atheon-managed infrastructure"],
      ["Setup", "Built and configured for your process"],
      ["Maintenance", "Ongoing care through your subscription"],
      ["Support", "Coverage agreed in your plan"],
    ],
    interest: "managed",
    cta: "Discuss a managed plan",
  },
  {
    id: "uyah7siq",
    label: "Client-owned infrastructure",
    title: "Run it in your environment.",
    description:
      "For teams that want deployment on their own server or VPS, with clear handover and support arrangements.",
    features: [
      ["Hosting", "Your own server or private VPS"],
      ["Setup", "Deployment, configuration and handover"],
      ["Maintenance", "Responsibilities agreed with your team"],
      ["Support", "An optional, separately agreed arrangement"],
    ],
    interest: "infrastructure",
    cta: "Discuss your deployment",
  },
]
