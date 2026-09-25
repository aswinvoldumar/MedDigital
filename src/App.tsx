import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { services } from "./data/content"
import HeroSection from "./components/HeroSection"
import MissionSection from "./components/MissionSection"
import ServicesSection from "./components/ServicesSection"
import TechnologyProcess from "./components/TechnologyProcess"
import CTASection from "./components/CTASection"
import Footer from "./components/Footer"

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    let frame = 0

    const onClick = (event: MouseEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      const link = (event.target as Element | null)?.closest("a[href^='#']")
      if (!(link instanceof HTMLAnchorElement)) return
      const id = link.getAttribute("href")?.slice(1)
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return
      event.preventDefault()

      const start = window.scrollY
      const distance = target.getBoundingClientRect().top + start - 16 - start
      const duration = Math.min(900, Math.max(480, Math.abs(distance) * 0.4))
      const startTime = performance.now()
      cancelAnimationFrame(frame)

      const step = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration)
        const eased = 1 - (1 - progress) ** 3
        window.scrollTo(0, start + distance * eased)
        if (progress < 1) frame = requestAnimationFrame(step)
      }

      frame = requestAnimationFrame(step)
    }

    document.addEventListener("click", onClick)
    return () => {
      document.removeEventListener("click", onClick)
      cancelAnimationFrame(frame)
    }
  }, [])

  const results = services.filter((service) =>
    `${service.title} ${service.description}`.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#111]">
      <main className="mx-auto flex max-w-[1480px] flex-col gap-4 px-3 py-3 md:gap-5 md:px-4 md:py-4">
        <HeroSection onOpenSearch={() => setSearchOpen(true)} />
        <MissionSection />
        <ServicesSection />
        <TechnologyProcess />
        <CTASection />
        <Footer />
      </main>

      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-[#F2F2F2]/80 px-4 pt-24 backdrop-blur-sm">
          <div className="section-shell mx-auto max-w-[640px] p-6">
            <div className="flex items-center justify-between">
              <p className="text-[12px] tracking-[0.08em] text-[#A0A0A0] uppercase">Search services</p>
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="EHR conversion, archiving, migration"
              className="mt-4 w-full border-b border-black/10 bg-transparent py-3 text-[22px] tracking-[-0.03em] outline-none placeholder:text-[#A0A0A0]"
            />
            <ul className="mt-5 divide-y divide-black/[0.08]">
              {(query.trim() ? results : services).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={() => setSearchOpen(false)}
                    className="block py-3 text-[16px] tracking-[-0.02em]"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
