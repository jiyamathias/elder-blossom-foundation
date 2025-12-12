import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import WhoWeAre from "@/components/who-we-are"
import EventGallery from "@/components/event-gallery"
import AimsObjectives from "@/components/aims-objectives"
import RecentEvents from "@/components/recent-events"
import GetInvolved from "@/components/get-involved"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <WhoWeAre />
      <EventGallery />
      <AimsObjectives />
      <RecentEvents />
      <GetInvolved />
      <Footer />
    </main>
  )
}
