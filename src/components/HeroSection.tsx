import { ArrowDown } from "lucide-react"
import { brand } from "../data/content"
import Navbar from "./Navbar"
import HeroSideNavigation from "./HeroSideNavigation"
import InformationStrip from "./InformationStrip"

type HeroSectionProps = {
  onOpenSearch: () => void
  onVideoReady: () => void
}

export default function HeroSection({ onOpenSearch, onVideoReady }: HeroSectionProps) {
  return (
    <section id="intro" className="section-shell relative overflow-hidden">
      <div className="relative min-h-[640px] md:min-h-[760px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlayThrough={onVideoReady}
          onError={onVideoReady}
          aria-label="Animated abstract DNA structure"
        >
          <source src="/videos/hero-dna.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/90 via-white/35 to-transparent" />

        <HeroSideNavigation />

        <div className="relative z-10 px-6 pt-6 pb-16 md:px-12 md:pt-7 lg:px-14">
          <Navbar onOpenSearch={onOpenSearch} />

          <div className="relative mt-14 md:mt-20 lg:mt-24">
            <div className="relative z-10 lg:pr-28">
              <p className="text-[12px] font-medium tracking-[0.08em] text-[#111] uppercase">
                {brand.eyebrow}
              </p>
              <h1 className="fade-up mt-5 text-[46px] leading-[1.05] font-normal tracking-[-0.05em] text-[#111] sm:text-[56px] md:text-[70px] lg:text-[82px]">
                Modernizing
                <br />
                <span className="text-[#0D9488]">Healthcare</span> Data
                <br />
                for What Comes Next
              </h1>
              <p className="mt-7 max-w-[420px] text-[15px] leading-[1.6] text-[#4A4A4A] md:text-[16px]">
                EHR and healthcare data support for extraction, conversion, validation, migration,
                and long-term accessibility.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center rounded-full bg-[#111] px-6 text-[12px] font-medium tracking-[0.08em] text-white uppercase transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#0D9488]"
                >
                  Get Started
                </a>
                <a
                  href="#services"
                  className="text-[12px] font-medium tracking-[0.08em] text-[#111] uppercase transition-colors duration-300 hover:text-[#0D9488]"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>

          <a
            href="#expertise"
            className="absolute right-6 bottom-8 z-20 hidden items-center gap-2 rounded-full bg-[#111] px-4 py-2.5 text-[12px] text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#0D9488] md:inline-flex lg:right-10"
          >
            <ArrowDown size={14} strokeWidth={1.75} />
            Scroll for more
          </a>
        </div>
      </div>

      <div className="bg-white px-6 pt-2 pb-8 md:px-12 md:pb-10 lg:px-14">
        <InformationStrip />
      </div>
    </section>
  )
}
