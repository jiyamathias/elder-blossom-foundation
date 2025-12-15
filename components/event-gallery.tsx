"use client"

import Image from "next/image"

export default function EventGallery() {
  const cards = [
    {
      type: "dark",
      image: "/images/image-282-29.png",
      title: "Care",
      description: "Providing comprehensive support that honors dignity and independence",
      alt: "Care - People gathering for activities",
    },
    {
      type: "light",
      image: "/images/download - 2025-10-15T101303.065 2.png",
      title: "Connection",
      description: "Breaking isolation through meaningful relationships and community engagement",
      alt: "Connection - Elder woman portrait",
    },
    {
      type: "dark",
      image: "/images/Image(8).png",
      title: "Purpose",
      description: "Empowering elders to share their wisdom and pursue their passions",
      alt: "Purpose - Community activity",
    },
    {
      type: "dark",
      image: "/images/Image(13).png",
      title: "Care",
      description: "Providing comprehensive support that honors dignity and independence",
      alt: "Care - Elders at table",
    },
    {
      type: "light",
      image: "/images/Image(11).png",
      title: "Companionship",
      description: "Breaking isolation through meaningful relationships and community engagement",
      alt: "Companionship - Community gathering",
    },
    {
      type: "dark",
      image: "/images/Image(12).png",
      title: "Purpose",
      description: "Empowering elders to share their passions",
      alt: "Purpose - Elder group",
    },
  ]

  return (
    <section id="gallery" className="py-12 md:py-20 bg-[#556B2F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-white">Event Gallery</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 place-items-center">
          {cards.map((card, index) => (
            <div key={index} className="w-full max-w-[280px]">
              <div
                className={`${card.type === "light" ? "bg-[#f5f5f0] border-[#f5f5f0] mb-0 lg:mb-25" : "bg-[#2a2a2a] border-[#2a2a2a]"} rounded-3xl overflow-hidden border-[6px]`}
              >
                <div className="relative h-[200px] md:h-[260px]">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.alt}
                    fill
                    className="object-cover rounded-3xl"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3
                    className={`${card.type === "light" ? "text-[#556B2F]" : "text-white"} font-bold text-xl md:text-2xl mb-2`}
                  >
                    {card.title}
                  </h3>
                  <p className={`${card.type === "light" ? "text-gray-700" : "text-gray-200"} text-xs md:text-sm`}>
                    {card.description}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
