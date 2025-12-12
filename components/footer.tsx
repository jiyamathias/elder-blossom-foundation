"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="font-bold text-lg mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-gray-200 transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 transition">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-bold text-lg mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-gray-200 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 transition">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact-us">
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@elderblossom.org" className="hover:text-gray-200 transition">
                  info@elderblossom.org
                </a>
              </li>
              <li>
                <a href="tel:+234123456789" className="hover:text-gray-200 transition">
                  +234 (0) 123 456 789
                </a>
              </li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-200 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-200 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm text-gray-200">
            Copyright © 2025 Elder Blossom Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
