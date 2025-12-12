"use client"

import { Heart, Users } from "lucide-react"

export default function GetInvolved() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-16 text-gray-900">Get Involved</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Volunteer Card */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Volunteer with Heart</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a volunteer, you become every elder's friend and support. Your time and compassion can make a
              meaningful difference in the lives of our elderly community members. Whether you have a few hours a week
              or can commit more, we have opportunities that match your availability.
            </p>
            <button className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-opacity-90 transition">
              Become a Volunteer
            </button>
          </div>

          {/* Partner Card */}
          <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Become a Partner</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Elder Blossom, we know that when we work together, we can create lasting change. Whether you're a
              business, organization, or individual, your partnership can help us expand our reach and impact. Together,
              we can build a community where every elder thrives.
            </p>
            <button className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-opacity-90 transition">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
