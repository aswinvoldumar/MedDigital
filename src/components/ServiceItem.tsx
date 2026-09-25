import { Plus } from "lucide-react"

type ServiceItemProps = {
  index: string
  title: string
  description: string
  open: boolean
  onOpen: () => void
  onToggle: () => void
}

export default function ServiceItem({
  index,
  title,
  description,
  open,
  onOpen,
  onToggle,
}: ServiceItemProps) {
  return (
    <div
      className="grid border-t border-black/[0.08] md:grid-cols-2 md:items-start"
      onMouseEnter={onOpen}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex items-start gap-4 py-5 text-left"
      >
        <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-black/15 text-[#111] transition duration-300 ease-out group-hover:border-[#0D9488] group-hover:text-[#0D9488]">
          <Plus
            size={12}
            strokeWidth={1.75}
            className={`transition-transform duration-500 ease-out ${open ? "rotate-45" : ""}`}
          />
        </span>
        <span>
          <span className="block text-[11px] tracking-[0.04em] text-[#A0A0A0]">{index}</span>
          <span className="mt-1 block text-[18px] leading-[1.15] font-normal tracking-[-0.03em] text-[#111] md:text-[20px]">
            {title}
          </span>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-700 ease-out ${
          open ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="max-w-[360px] pr-2 text-[14px] leading-[1.55] text-[#555] md:pt-5">{description}</p>
      </div>
    </div>
  )
}
