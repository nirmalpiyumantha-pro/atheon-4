import Container from "@/components/container"
import Image from "next/image"
import logo from "@/assets/images/logo.png"
import { navItemsData } from "@/lib/nav-items-data"
import { ArrowUpRightIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <Container className="border-t border-gray-200 bg-blue-50 max-w-[1920px]">
      <footer className="flex flex-col items-center justify-center gap-4 py-12">
        <Link href="/#home" className="flex items-center gap-2.5">
          <Image src={logo} alt="" className="max-w-8" width={32} height={35} />
          <span className="text-lg font-medium text-blue-600">Atheon</span>
        </Link>

        <div className="text-center text-sm text-gray-500 leading-6">
          <p>Custom AI agents & business automation</p>
          <p>Based in Sri Lanka</p>
          <a
            href="mailto:contact@atheonworks.com"
            className="inline-flex min-h-11 items-center text-blue-600 hover:underline hover:underline-offset-4"
          >
            contact@atheonworks.com
          </a>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-col items-center gap-4 text-sm text-gray-700 md:flex-row md:gap-8"
        >
          {navItemsData.map((navItem) => (
            <a
              href={navItem.url}
              key={navItem.id}
              className="hover:underline hover:underline-offset-4"
            >
              {navItem.name}
            </a>
          ))}
        </nav>

        <nav
          aria-label="Company and legal links"
          className="flex flex-wrap justify-center gap-x-8 gap-y-2"
        >
          <a
            href="/privacy"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-gray-500 hover:underline hover:underline-offset-4"
          >
            Privacy policy
          </a>

          <a
            href="/terms"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-gray-500 hover:underline hover:underline-offset-4"
          >
            Website terms
          </a>

          <a
            href="https://www.linkedin.com/in/nirmal-piyumantha-3856501a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-gray-500 hover:underline hover:underline-offset-4"
          >
            <ArrowUpRightIcon size={16} aria-hidden="true" />
            LinkedIn
            <span className="sr-only"> (new tab)</span>
          </a>
        </nav>

        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Atheon. All rights reserved.
        </p>
      </footer>
    </Container>
  )
}
