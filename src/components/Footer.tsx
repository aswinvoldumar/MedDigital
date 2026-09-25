import { brand, sideNav } from "../data/content"

export default function Footer() {
  return (
    <footer className="px-4 pt-2 pb-6 md:px-6">
      <div className="flex flex-col gap-6 border-t border-black/[0.08] pt-6 md:flex-row md:items-end md:justify-between">
        <div>
          <a
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-medium tracking-[-0.03em] text-[#111] transition-colors duration-300 hover:text-[#0D9488]"
          >
            {brand.wordmark}
          </a>
          <p className="mt-1 text-[13px] text-[#555]">MDS / EHR Support</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {sideNav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-[13px] text-[#555]">
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-[12px] text-[#A0A0A0]">
          © {new Date().getFullYear()}{" "}
          <a href={brand.url} target="_blank" rel="noopener noreferrer" className="text-[#A0A0A0] transition-colors duration-300 hover:text-[#0D9488]">
            {brand.wordmark}
          </a>
        </p>
      </div>
    </footer>
  )
}
