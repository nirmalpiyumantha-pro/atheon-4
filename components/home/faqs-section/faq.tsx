import { useState } from "react"

type Props = {
  title: string
  description: string
}

export default function Faq({ title, description }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 bg-blue-50 rounded-lg px-5 py-6">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between cursor-pointer"
      >
        <span className="text-base font-medium text-left">{title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>

      {open && <div className="text-sm text-gray-700 mt-2">{description}</div>}
    </div>
  )
}
