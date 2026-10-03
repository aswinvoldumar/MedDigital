const proof = [
  "20+ years of long-term care and healthcare experience through clinical leadership.",
  "11 years of MDS Coordinator experience, plus regional MDS responsibility across seven skilled nursing facilities.",
  "Experience with reimbursement documentation, Quality Measures, regulatory compliance, staff education, and interdisciplinary operations.",
  "Clinical leadership includes RN, LPN, CNA, Interim MDS Coordinator, DON Relief, Corporate RAI/MDS Trainer, and RAC credentials.",
]

export default function ClinicalSection() {
  return (
    <section id="clinical" className="section-shell px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <p className="text-[12px] font-medium tracking-[0.08em] text-[#A0A0A0] uppercase">
            Clinical knowledge
          </p>
          <h2 className="mt-4 max-w-[560px] text-[34px] leading-[1.05] font-normal tracking-[-0.045em] text-[#111] sm:text-[42px] md:text-[50px]">
            Clinical Knowledge Meets Healthcare Technology
          </h2>
          <p className="mt-7 max-w-[480px] text-[15px] leading-[1.65] text-[#555] md:text-[16px]">
            Healthcare data is more than rows and fields. Its meaning depends on clinical workflows,
            documentation requirements, reimbursement processes, regulatory requirements, and
            continuity of care. Bizintellis combines technology expertise with experienced clinical
            leadership in long-term care, MDS/RAI, reimbursement, quality measures, compliance, and
            EHR-supported clinical operations.
          </p>
          <p className="mt-6 max-w-[480px] text-[15px] leading-[1.65] text-[#111]">
            EHR environment experience includes PointClickCare, American HealthTech, and Matrix.
          </p>
        </div>
        <ul className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {proof.map((item) => (
            <li key={item} className="py-5 text-[15px] leading-[1.55] text-[#555]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
