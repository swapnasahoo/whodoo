export type CaseDifficulty = "Easy" | "Medium" | "Hard";

export interface CaseStep {
  stepNo: number;
  title: string;

  question: string;
  options: string[];
  correctOption: number;

  explanation: string;
  response: string;

  hint?: string;
}

export default interface Case {
  id: string;
  title: string;
  caseNo: number;
  description: string;
  introduction: string;
  difficulty: CaseDifficulty;
  steps: CaseStep[];
}
