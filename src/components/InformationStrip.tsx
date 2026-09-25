export default function InformationStrip() {
  return (
    <div className="relative z-10 mt-16 border-t border-black/[0.08] pt-8 md:mt-24 md:pt-9">
      <div className="grid items-start gap-6 md:grid-cols-[72px_minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-8">
        <p className="text-[28px] leading-none font-normal tracking-[-0.04em] text-[#111] md:text-[34px]">
          01
        </p>
        <div>
          <p className="text-[12px] tracking-[0.04em] text-[#A0A0A0] uppercase">Practice note</p>
          <h2 className="mt-3 max-w-[420px] text-[28px] leading-[1.05] font-normal tracking-[-0.04em] text-[#111] md:text-[34px]">
            Reliable Healthcare Data, Built for What Comes Next
          </h2>
        </div>
        <p className="max-w-[460px] text-[15px] leading-[1.6] text-[#555] md:pt-6 md:text-[16px]">
          We help healthcare organizations transform legacy EHR and EMR data into structured,
          accessible, and usable digital records while maintaining data integrity throughout the
          process.
        </p>
      </div>
    </div>
  )
}
