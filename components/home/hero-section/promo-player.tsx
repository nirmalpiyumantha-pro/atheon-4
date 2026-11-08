"use client"

import { useEffect, useRef } from "react"
import { XIcon } from "lucide-react"

type Props = {
  open: boolean
  onOpenChangeAction: (open: boolean) => void
}

export function PromoPlayer({ open, onOpenChangeAction }: Props) {
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const element = dialog.current

    if (!element) return

    if (open && !element.open) {
      element.showModal()
    }

    if (!open && element.open) {
      element.close()
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <dialog
      ref={dialog}
      className="fixed inset-0 m-auto max-h-[80vh] w-full max-w-5xl overflow-auto border border-gray-200 bg-gray-100 p-0 text-gray-900 shadow-2xl backdrop:bg-gray-900/70 backdrop:backdrop-blur-sm"
      onClose={() => onOpenChangeAction(false)}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          dialog.current?.close()
        }
      }}
    >
      <div>
        <header className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5 sm:py-4">
          <h2 className="m-0 text-base font-semibold">See Atheon in action</h2>
          <button
            type="button"
            className="flex justify-center items-center size-11 shrink-0 cursor-pointer rounded-full border border-gray-200 bg-white text-gray-900"
            onClick={() => dialog.current?.close()}
          >
            <XIcon size={22} />
          </button>
        </header>

        <div className="aspect-video bg-gray-900">
          {open && (
            <iframe
              className="block size-full border-0"
              src="https://www.youtube-nocookie.com/embed/8tAExH3B48Y?autoplay=1&playsinline=1&rel=0"
              title="Atheon promotional video"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </dialog>
  )
}
