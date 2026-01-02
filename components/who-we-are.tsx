"use client"

import Image from "next/image"

export default function WhoWeAre() {
  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-primary">Who We Are</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">About Us</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Elder Blossom Foundation is a nonprofit initiative dedicated to improving the quality of life for
                elderly individuals in our community. We focus on creating safe, engaging, and compassionate community
                where elders feel valued and supported.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our comprehensive programs and social interventions address the multifaceted needs of our elderly
                population, promoting physical health, mental wellness, and social connection.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Story</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Elder Blossom Foundation began with a simple vision: to create a community where aging is celebrated.
                Our founders recognized the growing need for meaningful engagement and support for elderly individuals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Since our inception, we have been discovering flowers in our elders' gardens and helping them continue
                to flourish when given proper care. Like life-discovering flowers, our elders continue to flourish when
                given proper care.
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              {/* <button className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-opacity-90 transition cursor-pointer">
                Learn More
              </button> */}
              <a href="https://flutterwave.com/donate/p4efl3vhwci7" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-2 border-2 border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-white transition cursor-pointer">
                  Donate
                </button>
              </a>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image-WNNZbdgPyiqmOXCNNsKdRzB2GP5ITO.png"
              alt="Elder Blossom Team Member"
              width={400}
              height={500}
              className="rounded-2xl object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
