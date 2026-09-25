import { useState } from "react"
import { services } from "../data/content"
import ServiceItem from "./ServiceItem"

export default function ServicesSection() {
  const [openId, setOpenId] = useState<string>(services[0].id)

  return (
    <section id="services" className="section-shell px-4 py-4 md:px-5 md:py-5">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.15fr)_minmax(260px,0.72fr)] lg:gap-5">
        <div className="relative min-h-[460px] overflow-hidden rounded-[22px] bg-[#e9ebef] lg:min-h-[720px]">
          <img
            src="/images/service-data-flow.png"
            alt="Abstract glass forms suggesting healthcare data in motion"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-5 left-5 max-w-[230px] rounded-[18px] bg-white px-5 py-4">
            <p className="text-[20px] leading-[1.15] font-normal tracking-[-0.03em] text-[#111]">
              Secure Data Transformation
            </p>
            <p className="mt-2 text-[13px] leading-[1.45] text-[#555]">
              Preserving structure, accuracy, and accessibility across every migration.
            </p>
          </div>
        </div>

        <div className="px-3 py-6 md:px-6 md:py-8">
          <p className="max-w-[280px] text-[15px] leading-[1.5] text-[#111]">
            Driven by careful handling of healthcare data and a precise approach to technical work.
          </p>
          <a
            href="#technology"
            className="mt-6 inline-flex h-10 items-center rounded-full bg-[#111] px-5 text-[11px] font-medium tracking-[0.08em] text-white uppercase transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#0D9488]"
          >
            Learn More
          </a>
          <div className="mt-10">
            {services.map((service) => (
              <ServiceItem
                key={service.id}
                index={service.index}
                title={service.title}
                description={service.description}
                open={openId === service.id}
                onOpen={() => setOpenId(service.id)}
                onToggle={() => setOpenId((current) => (current === service.id ? "" : service.id))}
              />
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[320px] overflow-hidden rounded-[22px] bg-[#eceef1] lg:block">
          <img
            src="/images/molecule-nodes.png"
            alt="White molecular structure representing connected records"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-5 right-4 left-4 rounded-[18px] bg-white/95 px-4 py-4">
            <p className="text-[18px] leading-[1.2] font-normal tracking-[-0.03em] text-[#111]">
              Records that stay connected
            </p>
            <p className="mt-2 text-[13px] leading-[1.45] text-[#555]">
              Structure, context, and integrity carried through every conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
