import { useEffect, useRef, useState } from "react"
import { processSteps } from "../data/content"

const positions = [
  "left-[6%] top-[18%] h-[180px] w-[180px] md:h-[220px] md:w-[220px] bubble-from-left",
  "left-[28%] top-[46%] h-[150px] w-[150px] md:h-[190px] md:w-[190px] bubble-from-bottom",
  "left-[46%] top-[8%] h-[200px] w-[200px] md:h-[250px] md:w-[250px] bubble-from-top",
  "left-[62%] top-[48%] h-[160px] w-[160px] md:h-[200px] md:w-[200px] bubble-from-corner",
  "left-[78%] top-[16%] h-[140px] w-[140px] md:h-[170px] md:w-[170px] bubble-from-right",
]

const delays = ["0ms", "140ms", "80ms", "220ms", "180ms"]

export default function TechnologyProcess() {
  const bubblesRef = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = bubblesRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setShown(true)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="technology" className="section-shell relative overflow-hidden px-6 py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Healthcare professional working with digital records"
      >
        <source src="/videos/healthcare-process.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40" />

      <div className="relative z-10">
      <p className="text-[12px] font-medium tracking-[0.08em] text-[#A0A0A0] uppercase">Technology</p>
      <h2 className="mt-4 max-w-[640px] text-[36px] leading-[1.02] font-normal tracking-[-0.045em] text-[#111] md:text-[50px] lg:text-[56px]">
        From Legacy Systems to Structured Healthcare Data
      </h2>

      <div ref={bubblesRef} className={`relative mt-12 hidden h-[460px] md:block ${shown ? "bubbles-in" : ""}`}>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 460" fill="none" aria-hidden>
          <path
            d="M120 140 C 240 220, 300 300, 390 320 S 560 80, 620 150 S 820 300, 900 150"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="1"
          />
        </svg>
        {processSteps.map((step, index) => (
          <div
            key={step.index}
            className={`bubble-enter absolute grid place-items-center rounded-full border border-black/10 bg-white/70 ${positions[index]}`}
            style={{ animationDelay: delays[index] }}
          >
            <div className="text-center">
              <p className="text-[12px] tracking-[0.06em] text-[#A0A0A0]">{step.index}</p>
              <p className="mt-1 text-[18px] tracking-[-0.03em] text-[#111] uppercase md:text-[22px]">
                {step.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ol className="mt-10 divide-y divide-black/[0.08] border-y border-black/[0.08] md:hidden">
        {processSteps.map((step) => (
          <li key={step.index} className="flex items-baseline gap-5 py-5">
            <span className="text-[13px] text-[#A0A0A0]">{step.index}</span>
            <span className="text-[28px] tracking-[-0.04em] text-[#111] uppercase">{step.label}</span>
          </li>
        ))}
      </ol>
      </div>
    </section>
  )
}
