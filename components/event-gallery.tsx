"use client"

import Image from "next/image"

export default function EventGallery() {
  return (
    <section className="py-20 bg-[#556B2F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-white">Event Gallery</h2>

        {/* First Row */}
        <div className="flex justify-center items-end gap-6 mb-16">
          {/* Left Card - Care (dark) */}
          <div className="relative w-[280px] h-[320px] rounded-3xl overflow-hidden bg-[#2a2a2a] flex-shrink-0">
            <Image src="/images/image-282-29.png" alt="Care" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-white font-bold text-2xl mb-2">Care</h3>
              <p className="text-gray-200 text-sm">
                Providing comprehensive support that honors dignity and independence
              </p>
            </div>
          </div>

          {/* Center Card - Connection (white, taller) */}
          <div className="relative w-[300px] flex-shrink-0 z-10">
            <div className="bg-white rounded-3xl overflow-hidden">
              <div className="relative h-[280px]">
                <Image src="/elderly-woman-with-headwrap-smiling-portrait.jpg" alt="Connection" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-[#556B2F] font-bold text-2xl mb-2">Connection</h3>
                <p className="text-gray-600 text-sm">
                  Breaking isolation through meaningful relationships and community engagement
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Purpose (dark) */}
          <div className="relative w-[280px] h-[320px] rounded-3xl overflow-hidden bg-[#2a2a2a] flex-shrink-0">
            <Image src="/images/image-284-29.png" alt="Purpose" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-white font-bold text-2xl text-right mb-2">Purpose</h3>
              <p className="text-gray-200 text-sm text-right">
                Empowering elders to share their wisdom and pursue their passions
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex justify-center items-end gap-6">
          {/* Left Card - Care (dark) */}
          <div className="relative w-[280px] h-[320px] rounded-3xl overflow-hidden bg-[#2a2a2a] flex-shrink-0">
            <Image src="/images/image-282-29.png" alt="Care" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-white font-bold text-2xl mb-2">Care</h3>
              <p className="text-gray-200 text-sm">
                Providing comprehensive support that honors dignity and independence
              </p>
            </div>
          </div>

          {/* Center Card - Companionship (white, taller) */}
          <div className="relative w-[300px] flex-shrink-0 z-10">
            <div className="bg-white rounded-3xl overflow-hidden">
              <div className="relative h-[280px]">
                <Image src="/images/image-281-29.png" alt="Companionship" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-[#556B2F] font-bold text-2xl mb-2">Companionship</h3>
                <p className="text-gray-600 text-sm">
                  Breaking isolation through meaningful relationships and community engagement
                </p>
              </div>
            </div>
          </div>

          {/* Right Card - Purpose (dark) */}
          <div className="relative w-[280px] h-[320px] rounded-3xl overflow-hidden bg-[#2a2a2a] flex-shrink-0">
            <Image src="/images/image-283-29.png" alt="Purpose" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-white font-bold text-2xl text-right mb-2">Purpose</h3>
              <p className="text-gray-200 text-sm text-right">
                Empowering elders to share their wisdom and pursue their passions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
