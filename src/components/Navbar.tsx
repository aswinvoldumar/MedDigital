import { Search } from "lucide-react"
import { brand } from "../data/content"

type NavbarProps = {
  onOpenSearch: () => void
}

export default function Navbar({ onOpenSearch }: NavbarProps) {
  return (
    <header className="relative z-20 flex items-center justify-between">
      <a
        href={brand.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[15px] font-medium tracking-[-0.03em] text-[#111] transition-colors duration-300 hover:text-[#0D9488]"
      >
        {brand.wordmark}
      </a>
      <div className="flex items-center gap-2.5">
        <button
          type="button"
          aria-label="Search"
          onClick={onOpenSearch}
          className="grid h-9 w-9 place-items-center rounded-full text-[#111] transition duration-300 ease-out hover:bg-[#111] hover:text-white"
        >
          <Search size={16} strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="Accessibility"
          className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-[11px] font-medium transition duration-300 ease-out hover:border-[#0D9488] hover:text-[#0D9488]"
        >
          <span aria-hidden>Aa</span>
        </button>
      </div>
    </header>
  )
}
