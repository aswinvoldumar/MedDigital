import { useEffect, useRef, useState } from "react"
import { journeyNodes } from "../data/content"

const directions = ["from-top", "from-right", "from-bottom-right", "from-bottom", "from-left", "from-top-left"]

export default function DataJourneyVisualization() {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
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
    <div className="relative">
      <p className="mb-4 text-[13px] text-[#111]">EHR Data Journey</p>

      <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[520px]">
        <div className="absolute inset-[8%] rounded-full border border-black/[0.08]" />
        <div className="absolute inset-[18%] rounded-full border border-black/[0.08]" />
        <div className="absolute inset-[30%] rounded-full border border-black/[0.08]" />
        <div className="absolute inset-[42%] rounded-full border border-black/[0.08]" />

        <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0D9488]" />

        {journeyNodes.map((node, index) => {
          const rad = (node.angle * Math.PI) / 180
          const radius = node.angle % 2 === 0 ? 46 : 38
          const x = 50 + Math.cos(rad) * radius
          const y = 50 + Math.sin(rad) * radius
          return (
            <div
              key={node.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div
                className={`journey-label flex items-center gap-2 ${directions[index]} ${shown ? "journey-in" : ""}`}
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D9488]" />
                <span className="max-w-[110px] text-[11px] leading-[1.25] text-[#555]">{node.label}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
