import { useEffect, useState } from "react"
import { sideNav } from "../data/content"

export default function HeroSideNavigation() {
  const [active, setActive] = useState<string>(sideNav[0].id)

  useEffect(() => {
    const sections = sideNav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const goTo = (id: string) => {
    setActive(id)
  }

  return (
    <nav aria-label="Page sections" className="absolute top-1/2 right-6 z-30 hidden -translate-y-1/2 lg:block">
      <ul className="flex flex-col items-end gap-3.5 border-r border-black/15 pr-3">
        {sideNav.map((item) => {
          const isActive = item.id === active
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => goTo(item.id)}
                className={`block text-[12px] leading-none tracking-[-0.01em] transition-colors duration-500 ${
                  isActive ? "text-[#111]" : "text-[#555] hover:text-[#111]"
                }`}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
