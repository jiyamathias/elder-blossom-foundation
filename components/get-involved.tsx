"use client"

import { Heart, Handshake } from "lucide-react"

export default function GetInvolved() {
  return (
    <section id="become-a-partner" className="py-20 bg-[#f5f4e8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-primary">Get Involved</h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Volunteer Section */}
          <div>
            <div className="flex flex-col items-start gap-3 mb-6">
              <Heart className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Volunteer with Heart</h3>
            </div>
            <p className="text-gray-800 leading-relaxed">
              At Elder Blossom, we believe every elder deserves to flourish. Your time and kindness can spark joy,
              purpose, and connection in their golden years—whether you're sharing stories, listening, or simply being
              present. By nurturing creativity, learning, and play, you help transform ordinary moments into cherished
              memories. Join a community that honors elders as the treasures they are, and help us make every chapter of
              life bloom. No experience needed—just an open heart.
            </p>
          </div>

          {/* Partner Section */}
          <div>
            <div className="flex flex-col items-start gap-3 mb-6">
              <Handshake className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Become a Partner</h3>
            </div>
            <p className="text-gray-800 leading-relaxed">
              At Elder Blossom, we know that when communities unite, every elder can flourish. By partnering with us,
              your organization can help build a world where seniors experience dignity, purpose, and joy—turning
              compassion into lasting impact. Whether through shared initiatives, resources, or advocacy, your
              collaboration nurtures a future where every chapter of life is celebrated. Let's grow something beautiful,
              side by side.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
