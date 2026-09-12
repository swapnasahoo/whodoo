export type CaseDifficulty = "Easy" | "Medium" | "Hard";

export interface CaseStep {
  stepNo: number;
  title: string;
  description: string;
  hint?: string;

  options?: string[];
  correctOption?: number;
  explanation?: string;
}

export default interface Case {
  id: string;
  title: string;
  caseNo: number;
  description: string;
  difficulty: CaseDifficulty;
  steps: CaseStep[];
}
