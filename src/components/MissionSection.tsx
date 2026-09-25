import DataJourneyVisualization from "./DataJourneyVisualization"

export default function MissionSection() {
  return (
    <section id="expertise" className="section-shell px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
        <div>
          <h2 className="max-w-[640px] text-[34px] leading-[1.05] font-normal tracking-[-0.045em] text-[#111] sm:text-[42px] md:text-[50px] lg:text-[54px]">
            <span className="text-[#AFAFAF]">Our mission</span> is to simplify the complexity of
            healthcare data, <span className="text-[#AFAFAF]">making every record</span> more
            accessible, secure, and usable.
          </h2>
        </div>
        <div className="lg:pt-2">
          <DataJourneyVisualization />
        </div>
      </div>
    </section>
  )
}
