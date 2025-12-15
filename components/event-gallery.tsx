"use client"

import Image from "next/image"

export default function EventGallery() {
  return (
    <section id="gallery" className="py-20 bg-[#556B2F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-white">Event Gallery</h2>

        {/* First Row */}
        <div className="flex justify-center items-end gap-6 mb-20">
          <div className="w-[280px] flex-shrink-0">
            <div className="bg-[#2a2a2a] rounded-3xl overflow-hidden border-[10px] border-[#2a2a2a]">
              <div className="relative h-[260px]">
                <Image
                  src="/images/image-282-29.png"
                  alt="Care - People gathering for activities"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="px-2 py-6">
                <h3 className="text-white font-extrabold text-3xl mb-2">Care</h3>
                <p className="text-gray-200 text-sm">
                  Providing comprehensive support that honors dignity and independence
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-[300px] flex-shrink-0 z-10 sm:mb-15">
            <div className="bg-[#f5f5f0] rounded-3xl overflow-hidden border-[10px] border-[#f5f5f0]">
              <div className="relative h-[280px]">
                <Image
                  src="/images/download - 2025-10-15T101303.065 2.png"
                  alt="Connection - Elder woman portrait"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="px-2 py-6">
                <h3 className="text-[#556B2F] font-extrabold text-3xl mb-2">Connection</h3>
                <p className="text-gray-700 text-sm">
                  Breaking isolation through meaningful relationships and community engagement
                </p>
              </div>
            </div>
          </div>

          <div className="w-[280px] flex-shrink-0">
            <div className="bg-[#2a2a2a] rounded-3xl overflow-hidden border-[10px] border-[#2a2a2a]">
              <div className="relative h-[260px]">
                <Image
                  src="/images/Image(8).png"
                  alt="Purpose - Community activity"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="px-2 py-6">
                <h3 className="text-white font-extrabold text-3xl mb-2">Purpose</h3>
                <p className="text-gray-200 text-sm">
                  Empowering elders to share their wisdom and pursue their passions
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Second Row */}
        <div className="flex justify-center items-end gap-6">
          <div className="w-[280px] flex-shrink-0">
            <div className="bg-[#2a2a2a] rounded-3xl overflow-hidden border-[10px] border-[#2a2a2a]">
              <div className="relative h-[260px]">
                <Image
                  src="/images/image-284-29.png"
                  alt="Care - Elders at table"
                  fill
                  className="object-cover rounded-t-3xl"
                />
              </div>
              <div className="px-2 py-6">
                <h3 className="text-white font-extrabold text-3xl mb-2">Care</h3>
                <p className="text-gray-200 text-sm">
                  Providing comprehensive support that honors dignity and independence
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-[300px] flex-shrink-0 z-10 sm:mb-15">
            <div className="bg-[#f5f5f0] rounded-3xl overflow-hidden border-[10px] border-[#f5f5f0]">
              <div className="relative h-[280px]">
                <Image
                  src="/images/Image(11).png"
                  alt="Companionship - Community gathering"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="px-2 py-6">
                <h3 className="text-[#556B2F] font-extrabold text-3xl mb-2">Companionship</h3>
                <p className="text-gray-700 text-sm">
                  Breaking isolation through meaningful relationships and community engagement
                </p>
              </div>
            </div>
          </div>

          <div className="w-[280px] flex-shrink-0">
            <div className="bg-[#2a2a2a] rounded-3xl overflow-hidden border-[10px] border-[#2a2a2a]">
              <div className="relative h-[260px]">
                <Image
                  src="/images/Image(12).png"
                  alt="Purpose - Elder group"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="px-2 py-6">
                <h3 className="text-white font-extrabold text-3xl mb-2">Purpose</h3>
                <p className="text-gray-200 text-sm">Empowering elders to share their passions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
