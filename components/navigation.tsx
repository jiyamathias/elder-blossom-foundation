"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-4 md:top-10 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-full px-4 md:px-8 py-3 md:py-4 w-[95%] md:w-4/5 max-w-4xl">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Elder Blossom Foundation"
            width={40}
            height={40}
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition">
            Home
          </Link>
          <Link href="/donate" className="text-sm font-medium text-gray-700 hover:text-primary transition">
            Donate
          </Link>
          <button
            onClick={scrollToContact}
            className="px-4 py-2 bg-[#6B8E23] text-white rounded-md text-sm font-medium hover:bg-opacity-90 transition"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-primary transition"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg p-4 md:hidden">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-primary transition py-2"
              >
                Home
              </Link>
              <Link
                href="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-primary transition py-2"
              >
                Donate
              </Link>
              <button
                onClick={scrollToContact}
                className="px-4 py-2 bg-[#6B8E23] text-white rounded-md text-sm font-medium hover:bg-opacity-90 transition text-left"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


// "use client"

// import Image from "next/image"
// import Link from "next/link"

// export default function Navigation() {
//   const scrollToContact = () => {
//     const contactSection = document.getElementById("contact-us")
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   return (
//     <nav
//       className="
//         fixed top-10 left-1/2 -translate-x-1/2
//         z-50 bg-white rounded-full
//         px-8 py-4
//         w-4/5 max-w-4xl
//         max-w-full box-border
//       "
//     >
//       <div className="flex flex-wrap justify-between items-center gap-y-4">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/images/logo.png"
//             alt="Elder Blossom Foundation"
//             width={40}
//             height={40}
//             className="h-14 w-auto"
//           />
//         </Link>

//         {/* Links */}
//         <div className="flex flex-wrap items-center gap-8 justify-end">
//           <Link href="/" className="text-sm font-medium text-gray-700 hover:text-primary transition">
//             Home
//           </Link>

//           <Link href="/donate" className="text-sm font-medium text-gray-700 hover:text-primary transition">
//             Donate
//           </Link>

//           <button
//             onClick={scrollToContact}
//             className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-opacity-90 transition"
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </nav>
//   )
// }
