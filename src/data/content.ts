export const brand = {
  wordmark: "MDS -Bizintellis",
  url: "https://www.bizintellis.com/",
  eyebrow: "MDS / EHR Support",
}

export const sideNav = [
  { id: "intro", label: "Intro" },
  { id: "expertise", label: "Expertise" },
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
      "Convert legacy electronic health record data into structured, accessible formats while maintaining data integrity and clinical context.",
  },
  {
    id: "emr-extraction",
    index: "02",
    title: "EMR Data Extraction",
    description:
      "Extract critical medical record information from legacy systems and prepare it for secure transformation or migration.",
  },
  {
    id: "archiving",
    index: "03",
    title: "Healthcare Data Archiving",
    description:
      "Preserve historical healthcare records in secure, accessible, and organized digital archives.",
  },
  {
    id: "migration",
    index: "04",
    title: "Legacy System Migration",
    description:
      "Move healthcare data from outdated platforms into modern environments with minimal disruption.",
  },
  {
    id: "validation",
    index: "05",
    title: "Data Validation & Quality",
    description:
      "Verify data structure, completeness, consistency, and integrity throughout the transformation process.",
  },
  {
    id: "support",
    index: "06",
    title: "EHR Technical Support",
    description:
      "Provide ongoing technical support for EHR and EMR environments, integrations, migrations, and data workflows.",
  },
] as const

export const processSteps = [
  { index: "01", label: "Extract" },
  { index: "02", label: "Validate" },
  { index: "03", label: "Convert" },
  { index: "04", label: "Archive" },
  { index: "05", label: "Integrate" },
] as const
