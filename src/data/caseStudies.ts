import caseStudiesRaw from "./caseStudies.json";

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudyItem {
  id: string;
  path: string;
  category: string;
  title: string;
  listTitle: string;
  image: string;
  heroDescription: string;
  scopeTitle: string;
  scopeItems: string[];
  challenge: string;
  solution: string;
  outcome: string;
  metrics: CaseStudyMetric[];
  techStack: string[];
}

export const CASE_STUDIES = caseStudiesRaw as CaseStudyItem[];

export const CASE_STUDIES_BY_ID: Record<string, CaseStudyItem> = Object.fromEntries(
  CASE_STUDIES.map((item) => [item.id, item]),
) as Record<string, CaseStudyItem>;

export const getCaseStudyById = (id: string) => CASE_STUDIES_BY_ID[id];
