"use client"

import { navItemsData } from "@/lib/nav-items-data"
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/logo.png"
import { useEffect, useState, MouseEvent } from "react"
import { useIsMobile } from "@/hooks/use-mobile"
import { ArrowUpRightIcon, MenuIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { aboutData } from "@/lib/about-data"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)
  const isMobile = useIsMobile()
  const pathname = usePathname()

  useEffect(() => {
    const handleScrollLock = () => {
      if (isNavbarOpen && isMobile) {
        document.body.classList.add("overflow-hidden")
      } else if (isNavbarOpen && !isMobile) {
        document.body.classList.remove("overflow-hidden")
        setIsNavbarOpen(false)
      } else {
        document.body.classList.remove("overflow-hidden")
      }
    }

    handleScrollLock()
    window.addEventListener("resize", handleScrollLock)

    return () => {
      document.body.classList.remove("overflow-hidden")
      window.removeEventListener("resize", handleScrollLock)
    }
  }, [isNavbarOpen, isMobile])

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>, url: string) => {
    if (!url.includes("#")) return

    const [path, hash] = url.split("#")

    if (path && path !== "/" && path !== pathname) return

    const target = document.getElementById(hash)

    if (!target) return

    e.preventDefault()

    window.history.pushState(null, "", `/#${hash}`)

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })

    close()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-20 border-b-0 lg:border-b lg:border-gray-200 bg-white">
      <div className="relative flex justify-between gap-4 lg:gap-10 items-center px-5 py-4 max-w-7xl mx-auto border-b border-gray-200 lg:border-b-0">
        <Link href="/#home" className="flex items-center gap-4">
          <Image src={logo} alt="logo" className="max-w-10" />
          <h6 className="text-xl font-bold text-blue-600">{aboutData.name}</h6>
        </Link>
        <ul className="lg:flex gap-12 items-center hidden">
          {navItemsData.map((navItem) => (
            <Link
              href={navItem.url}
              key={navItem.id}
              onClick={(e) => handleNavigation(e, navItem.url)}
            >
              <li className="text-sm text-gray-900 hover:underline hover:decoration-gray-900 hover:underline-offset-4">
                {navItem.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-3 items-center">
          <Link href="/#contact-us">
            <button className="group hidden sm:block rounded-sm px-4 py-3 bg-blue-600 font-semibold text-sm cursor-pointer text-white sm:flex items-center gap-2">
              Discuss Your Project
              <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </Link>
          {isMobile && (
            <button
              type="button"
              className="rounded-md border border-gray-200 p-2"
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
            >
              {isNavbarOpen ? (
                <XIcon className="cursor-pointer text-gray-700" />
              ) : (
                <MenuIcon className="cursor-pointer" />
              )}
            </button>
          )}
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden bg-white backdrop-blur-2xl h-screen",
          isNavbarOpen ? "block" : "hidden",
        )}
      >
        <ul className="flex flex-col px-6 pb-6">
          {navItemsData.map((navItem) => (
            <li
              key={navItem.id}
              className="border-b border-gray-200 py-4 px-2 flex items-center justify-between group"
            >
              <Link
                href={navItem.url}
                onClick={(e) => {
                  handleNavigation(e, navItem.url)
                  setIsNavbarOpen(false)
                }}
                className="text-sm text-gray-700 group-hover:text-blue-600"
              >
                {navItem.name}
              </Link>
              <ArrowUpRightIcon className="size-4 text-gray-700 group-hover:text-blue-600" />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
