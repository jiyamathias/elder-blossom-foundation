import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative min-h-screen flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/elderly-community-gathering-background.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/50 z-[1]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="bg-[#6B8E23] rounded-3xl p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Text content */}
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Donate a Cent Today!</h1>
              <p className="text-base text-white leading-relaxed mb-8">
                Every act of giving—whether it's a single coin or a heartfelt contribution—helps weave moments of
                warmth, creativity, and connection into the lives of seniors in our community. Your generosity supports
                programs that bring companionship to quiet afternoons, spark imagination through art and storytelling,
                and ensure elders have access to resources that make their days brighter. By fostering spaces where
                every elder feels seen, valued, and celebrated, you help turn ordinary moments into cherished chapters
                of joy and dignity.
              </p>
              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition w-full">
                Donate
              </button>
            </div>

            {/* Right - Image with rounded corners and cream background */}
            <div className="relative h-96 rounded-3xl overflow-hidden bg-[#F5F5DC]">
              <Image
                src="/images/image-282-29.png"
                alt="Community members with colorful cards"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-[#6B8E23]">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Volunteer Card */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-10 h-10 text-[#6B8E23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900">Volunteer with Heart</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Elder Blossom, we believe every elder deserves to flourish. Your time and kindness can spark joy,
                purpose, and connection in their golden years—whether you're sharing stories, listening, or simply being
                present. By nurturing creativity, learning, and play, you help transform ordinary moments into cherished
                memories. Join a community that honors elders as the treasures they are, and help us make every chapter
                of life bloom. No experience needed—just an open heart.
              </p>
              <button className="px-6 py-3 bg-[#6B8E23] text-white rounded-md font-medium hover:bg-opacity-90 transition">
                Join Our Mission
              </button>
            </div>

            {/* Partner Card */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-10 h-10 text-[#6B8E23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900">Become a Partner</h3>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Elder Blossom, we know that when communities unite, every elder can flourish. By partnering with us,
                your organization can help build a world where seniors experience dignity, purpose, and joy—turning
                compassion into lasting impact. Whether through shared initiatives, resources, or advocacy, your
                collaboration nurtures a future where every chapter of life is celebrated. Let's grow something
                beautiful, side by side.
              </p>
              <button className="px-6 py-3 bg-[#6B8E23] text-white rounded-md font-medium hover:bg-opacity-90 transition">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
