"use client"

import Image from "next/image"

export default function RecentEvents() {
  return (
    <section id="recent-event" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-primary">Recent Event</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Large image that fills full height */}
          <div className="flex flex-col">
            <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden">
              <Image src="/images/image-283-29.png" alt="Mentorship programs" fill className="object-cover" />
            </div>
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-[#556B2F] mb-3">Mentorship programs</h3>
              <p className="text-gray-700 text-base">
                Where wisdom meets wonder—passing stories, sparking growth, and building bridges across generations.
              </p>
            </div>
          </div>

          {/* Right - 2 stacked images with equal heights */}
          <div className="flex flex-col gap-8">
            {/* Top right image */}
            <div className="flex flex-col flex-1">
              <div className="relative flex-1 min-h-[280px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/Image(8).png"
                  alt="Art and creativity workshops"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[#556B2F] mb-3">Art and creativity workshops</h3>
                <p className="text-gray-700 text-base">
                  Sparking joy, expression, and connection—one brushstroke, note, or dance step at a time.
                </p>
              </div>
            </div>

            {/* Bottom right image */}
            <div className="flex flex-col flex-1">
              <div className="relative flex-1 min-h-[280px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/Image(9).png"
                  alt="Nutrition workshops"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[#556B2F] mb-3">Nutrition workshops</h3>
                <p className="text-gray-700 text-base">
                  Where good food meets great company—because eating well is a celebration of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
