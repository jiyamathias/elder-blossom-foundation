import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { Heart, Handshake } from "lucide-react"

export default function DonatePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative min-h-screen flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero1.jpeg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/50 z-[1]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="bg-primary rounded-3xl p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
              <a href="https://flutterwave.com/donate/p4efl3vhwci7" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold transition w-full cursor-pointer">
                Donate
              </button>
              </a>
            </div>

            {/* Right - Image with rounded corners and cream background */}
            <div className="relative mx-auto">
              <Image
                src="/images/image-281-29.png"
                alt="Community members with colorful cards"
                width={400}
                height={500}
                // fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-primary">Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Volunteer Card */}
            <div className="flex flex-col h-full">
              <Heart className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold text-primary mb-4">Volunteer with Heart</h3>
              <p className="text-gray-700 mb-8 leading-relaxed flex-grow">
                At Elder Blossom, we believe every elder deserves to flourish. Your time and kindness can spark joy,
                purpose, and connection in their golden years—whether you're sharing stories, listening, or simply being
                present. By nurturing creativity, learning, and play, you help transform ordinary moments into cherished
                memories. Join a community that honors elders as the treasures they are, and help us make every chapter
                of life bloom. No experience needed—just an open heart.
              </p>
              <a href="https://flutterwave.com/donate/p4efl3vhwci7" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition w-fit cursor-pointer">
                Join Our Mission
              </button>
              </a>
            </div>

            {/* Partner Card */}
            <div className="flex flex-col h-full">
              <Handshake className="w-10 h-10 text-primary" />
              <h3 className="text-2xl font-bold text-primary mb-4">Become a Partner</h3>
              <p className="text-gray-700 mb-8 leading-relaxed flex-grow">
                At Elder Blossom, we know that when communities unite, every elder can flourish. By partnering with us,
                your organization can help build a world where seniors experience dignity, purpose, and joy—turning
                compassion into lasting impact. Whether through shared initiatives, resources, or advocacy, your
                collaboration nurtures a future where every chapter of life is celebrated. Let's grow something
                beautiful, side by side.
              </p>
              <a href="https://flutterwave.com/donate/p4efl3vhwci7" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition w-fit cursor-pointer">
                  Become a Partner
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
