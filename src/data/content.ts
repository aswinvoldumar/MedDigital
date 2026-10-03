export const brand = {
  wordmark: "Bizintellis",
  url: "https://www.bizintellis.com/",
  eyebrow: "Healthcare Data & EHR Solutions",
}

export const sideNav = [
  { id: "intro", label: "Intro" },
  { id: "expertise", label: "Expertise" },
  { id: "clinical", label: "Clinical" },
  { id: "technology", label: "Technology" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const

export const journeyNodes = [
  { label: "Data Extraction", angle: -58 },
  { label: "Data Validation", angle: -8 },
  { label: "Data Conversion", angle: 42 },
  { label: "Data Archiving", angle: 118 },
  { label: "Data Migration", angle: 168 },
  { label: "System Integration", angle: 222 },
] as const

export const services = [
  {
    id: "ehr-conversion",
    index: "01",
    title: "EHR Data Conversion",
    description:
      "Transform legacy healthcare data into structured formats suited to modern platforms and downstream use.",
  },
  {
    id: "emr-extraction",
    index: "02",
    title: "EMR Data Extraction",
    description:
      "Support secure retrieval of required clinical, operational, and historical data from legacy source systems.",
  },
  {
    id: "archiving",
    index: "03",
    title: "Healthcare Data Archiving",
    description:
      "Organize historical healthcare records for secure, durable, and accessible retention.",
  },
  {
    id: "migration",
    index: "04",
    title: "Legacy System Migration",
    description:
      "Support structured migration from legacy platforms into modern environments with attention to continuity, integrity, and accessibility.",
  },
  {
    id: "validation",
    index: "05",
    title: "Data Validation & Quality",
    description:
      "Validate completeness, mapping, structure, and usability before data is accepted into the target environment.",
  },
  {
    id: "support",
    index: "06",
    title: "EHR Technical Support",
    description:
      "Provide technical support around healthcare data workflows, system transitions, integrations, and operational continuity.",
  },
] as const

export const processSteps = [
  { index: "01", label: "Extract" },
  { index: "02", label: "Validate" },
  { index: "03", label: "Convert" },
  { index: "04", label: "Archive" },
  { index: "05", label: "Integrate" },
] as const
