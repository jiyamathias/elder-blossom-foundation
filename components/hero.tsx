"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative pb-20 text-white overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background image - extends to top */}
      <div className="absolute inset-0 z-0">
        <Image src="/elderly-community-gathering.jpg" alt="Background" fill className="object-cover" priority />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance leading-tight">
          Where Every Elder Blooms with Purpose
        </h1>
        <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
          Nurturing hope, fostering connection, and celebrating the golden years with dignity and joy; At Elder Blossom
          Foundation, we believe aging is not about growing old it's about growing gold. We're dedicated to ensuring
          every elder in our community feels valued, connected, and empowered to live their fullest life.
        </p>
        <button className="px-8 py-3 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition">
          Join Our Mission
        </button>
      </div>
    </section>
  )
}
