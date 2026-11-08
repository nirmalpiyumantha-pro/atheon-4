import type { Metadata } from "next"
import { inter } from "@/app/fonts"
import "./globals.css"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/sonner"
import { aboutData } from "@/lib/about-data"
import { MailIcon } from "lucide-react"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.PUBLIC_BASE_URL || aboutData.publicBaseUrl),
  title: {
    template: `%s - ${aboutData.name}`,
    default: `${aboutData.name} - ${aboutData.title}`,
  },
  description: aboutData.description,
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="relative">
        <Toaster position="top-center" offset="80px" />
        <Navbar />
        {children}
        <a
          href="mailto:contact@atheonworks.com"
          className="fixed bottom-10 right-10"
        >
          <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-50" />

          <div className="relative rounded-full bg-blue-600 p-3">
            <MailIcon className="size-8 text-white" strokeWidth={1.2} />
          </div>
        </a>
        <Footer />
      </body>
    </html>
  )
}
