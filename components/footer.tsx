"use client"

import type React from "react"
import Link from "next/link"
import { Facebook, Youtube, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start">
          {/* Copyright Column */}
          <div>
            <h4 className="font-bold text-xl">Copyright © 2023 Elder Blossom</h4>
            <h4 className="font-bold text-xl mb-4">Foundation</h4>
            <p className="text-sm text-gray-200 mb-8">All right reserved.</p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-200 transition" aria-label="Facebook">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-gray-200 transition" aria-label="YouTube">
                <Youtube className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-gray-200 transition" aria-label="LinkedIn">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="#" className="hover:text-gray-200 transition" aria-label="Instagram">
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Pages + Contact */}
          <div className="flex flex-col gap-12 sm:flex-row sm:gap-24">
            {/* Pages Column */}
            <div>
              <h4 className="font-bold text-xl mb-4">Pages</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#our-story"
                    onClick={(e) => handleSmoothScroll(e, "our-story")}
                    className="hover:text-gray-200 transition cursor-pointer"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#recent-event"
                    onClick={(e) => handleSmoothScroll(e, "recent-event")}
                    className="hover:text-gray-200 transition cursor-pointer"
                  >
                    Recent Event
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    onClick={(e) => handleSmoothScroll(e, "gallery")}
                    className="hover:text-gray-200 transition cursor-pointer"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#objective"
                    onClick={(e) => handleSmoothScroll(e, "objective")}
                    className="hover:text-gray-200 transition cursor-pointer"
                  >
                    Aims and Objectives
                  </a>
                </li>
                <li>
                  <a
                    href="#become-a-partner"
                    onClick={(e) => handleSmoothScroll(e, "become-a-partner")}
                    className="hover:text-gray-200 transition cursor-pointer"
                  >
                    Become a Partner
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div id="contact-us">
              <h4 className="font-bold text-xl mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@elderblossom.org" className="hover:text-gray-200 transition">
                    Info@elderblossom.org
                  </a>
                </li>
                <li>
                  <a href="tel:+234123456789" className="hover:text-gray-200 transition">
                    +234123456789
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
