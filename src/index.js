export const project = {
  slug: "excel-validation-toolkit",
  title: "Excel Validation Toolkit",
  description: "Toolkit that validates Excel files and reports invalid rows.",
  features: [
  "Workbook parser",
  "Schema rules",
  "Row validation",
  "Error report",
  "CLI output",
  "Test samples"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
