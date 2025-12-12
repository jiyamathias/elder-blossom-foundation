"use client"

import Image from "next/image"

export default function RecentEvents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Recent Event</h2>

        {/* Grid: 1 large on left, 2 stacked on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Large image */}
          <div className="relative">
            <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image src="/images/image.png" alt="Mentorship programs" fill className="object-cover" />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mentorship programs</h3>
              <p className="text-gray-600 text-sm">
                Where wisdom meets wonder—passing stories, sparking growth, and building bridges across generations.
              </p>
            </div>
          </div>

          {/* Right - 2 stacked images */}
          <div className="flex flex-col gap-8">
            {/* Top right image */}
            <div>
              <div className="relative h-56 rounded-2xl overflow-hidden">
                <Image
                  src="/images/image-281-29.png"
                  alt="Art and creativity workshops"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Art and creativity workshops</h3>
                <p className="text-gray-600 text-sm">
                  Sparking joy, expression, and connection—one brushstroke, note, or dance step at a time.
                </p>
              </div>
            </div>

            {/* Bottom right image */}
            <div>
              <div className="relative h-56 rounded-2xl overflow-hidden">
                <Image src="/images/image-282-29.png" alt="Nutrition workshops" fill className="object-cover" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nutrition workshops</h3>
                <p className="text-gray-600 text-sm">
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
