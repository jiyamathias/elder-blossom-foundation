"use client"

import Image from "next/image"
import Link from "next/link"

export default function Navigation() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-full px-8 py-4 w-4/5 max-w-4xl">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Elder Blossom Foundation" width={40} height={40} className="h-14 w-auto" />
          {/* <span className="hidden sm:inline font-bold text-sm text-gray-800">
            ELDER
            <br className="hidden" />
            <span className="text-xs">BLOSSOM</span>
          </span> */}
        </Link>

        <div className="flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition">
            Home
          </Link>
          <Link href="/donate" className="text-sm font-medium text-gray-700 hover:text-primary transition">
            Donate
          </Link>
          <button
            onClick={scrollToContact}
            className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-opacity-90 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}
