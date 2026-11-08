type Service = {
  id: string
  label: string
  title: string
  text: string
  outcome: string
  interest: string
}

export const servicesData: Service[] = [
  {
    id: "djsd8s9s",
    label: "Company knowledge",
    title: "Answers your team can trace back to the source.",
    text: "An employee asks a question. Your agent checks approved policies and documents, then brings back a clear answer with references.",
    outcome: "Less searching. A clear next step.",
    interest: "knowledge",
  },
  {
    id: "9sdhs7ds",
    label: "Invoice processing",
    title: "Invoices checked. Exceptions brought to your attention.",
    text: "Extract invoice details, check calculations and match the purchase order. Save the draft bill and route discrepancies to finance before payment approval.",
    outcome: "Routine checks handled. Finance stays in control.",
    interest: "invoices",
  },
  {
    id: "j7x8asg7",
    label: "Service scheduling",
    title: "From a customer request to a confirmed visit.",
    text: "Match the job to the right technician, check availability and reserve a time. Update the calendar and send the customer their confirmation.",
    outcome: "A booked visit, with fewer back-and-forth messages.",
    interest: "scheduling",
  },
  {
    id: "2ysgy7wq",
    label: "Customer support",
    title: "Resolve the issue, not just the conversation.",
    text: "Verify the customer and check the order, tracking and delivery policy. Offer an approved resolution, then update the order and support ticket.",
    outcome: "An answer followed by the action it needs.",
    interest: "support",
  },
]
