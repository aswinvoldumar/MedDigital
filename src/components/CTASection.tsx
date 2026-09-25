export default function CTASection() {
  return (
    <section id="contact" className="section-shell px-6 py-16 md:px-12 md:py-20 lg:px-16">
      <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)]">
        <div>
          <p className="text-[12px] font-medium tracking-[0.08em] text-[#A0A0A0] uppercase">Contact</p>
          <h2 className="mt-4 max-w-[720px] text-[36px] leading-[1.02] font-normal tracking-[-0.045em] text-[#111] md:text-[52px] lg:text-[60px]">
            Move legacy records into systems that can use them.
          </h2>
        </div>
        <div>
          <p className="max-w-[360px] text-[15px] leading-[1.6] text-[#555]">
            Talk with the team about EHR and EMR conversion, extraction, archiving, and migration
            support.
          </p>
          <a
            href="mailto:hello@meddata.example"
            className="mt-8 inline-flex h-11 items-center rounded-full bg-[#111] px-6 text-[12px] font-medium tracking-[0.08em] text-white uppercase transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#0D9488]"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
