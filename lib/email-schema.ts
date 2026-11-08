import * as v from "valibot"

export const enquiryOptions = [
  { value: "general", label: "Help me choose / general enquiry" },
  { value: "demo", label: "Book a demo" },
  { value: "managed", label: "Atheon-managed subscription" },
  { value: "infrastructure", label: "Deployment on my infrastructure" },
  { value: "agent", label: "Custom AI agent" },
  { value: "knowledge", label: "Company knowledge & search" },
  { value: "invoices", label: "Invoice processing" },
  { value: "scheduling", label: "Service scheduling" },
  { value: "support", label: "Customer support automation" },
] as const

export const emailSchema = v.object({
  enquiry_option: v.picklist(
    enquiryOptions.map((option) => option.value),
    "Please select a valid enquiry option.",
  ),
  name: v.pipe(
    v.string(),
    v.nonEmpty("Name is required."),
    v.maxLength(255, "Name must be 255 characters or less."),
  ),
  email: v.pipe(
    v.string(),
    v.nonEmpty("Email is required."),
    v.email("Please enter a valid email address."),
  ),
  message: v.pipe(
    v.string(),
    v.nonEmpty("Message is required."),
    v.maxLength(1024, "Message must be 1024 characters or less."),
  ),
})

export type EmailSchema = v.InferInput<typeof emailSchema>
