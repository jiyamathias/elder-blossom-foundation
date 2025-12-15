"use client"

import Image from "next/image"

export default function AimsObjectives() {
  const objectives = [
    "To promote the welfare and well-being of elderly persons in Nigeria by creating safe, engaging and compassionate community where elders find and fulfill purpose regardless of age, background or ability.",
    "To organize sustainable community based activities and events including Elder Fun Days, outreach programs and social gatherings that help reduce loneliness, improve mental well-being and promote social interaction among elderly persons.",
    "To foster and strengthen community connection among aged individuals through intergenerational bonds and reduce age-related stigma by involving volunteers and youths in elderly programs.",
    "To facilitate a healthy lifestyle and create a safe space for the elderly people to participate in recreational, cultural and wellness activities that support their emotional, physical and mental wellbeing.",
    "To provide free access to basic health support services by offering basic health checks and educating older people on health and wellness in partnership with health professionals.",
    "To create awareness and encourage better social care services, empathy and support to elderly people work by working with families, caregivers local communities and relevant agencies.",
    "To advocate for the rights and dignity of elderly persons through public campaigns, policy dialogues, and partnerships aimed at improving access to essential services such as healthcare, shelter, and recreational opportunities.",
    "To establish and support elderly-friendly programs and centers especially in rural and underserved areas, where aged individuals can gather, connect, and receive care and support.",
    "To collaborate with NGOs, public institutions, government agencies and individuals to promote a culture of honour, respect and compassion for the aged in Nigeria.",
  ]

  return (
    <section id="objective" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-primary">Aims and Objectives</h2>

        <div className="space-y-4 mb-16">
          {objectives.map((obj, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {index + 1}. {obj}
            </p>
          ))}
        </div>

        {/* Two image cards below objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
              <Image src="/images/image-284-29.png" alt="Medical advocacy services" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Medical advocacy services</h3>
            <p className="text-gray-600 text-sm">
              Ensuring every elder's voice is heard and their health needs are met with clarity and compassion.
            </p>
          </div>

          <div>
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
              <Image src="/images/Image(10).png" alt="Language exchange programs" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Language exchange programs</h3>
            <p className="text-gray-600 text-sm">
              Sharing stories, wisdom, and words—because every voice deserves to be heard.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
