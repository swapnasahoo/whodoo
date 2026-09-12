import Case from "@/interfaces/Case";

export const mockCases: Case[] = [
  {
    id: "case-001",
    title: "The Missing Phone",
    caseNo: 1,
    description:
      "A phone disappears from a classroom during the final period. Three students were nearby, but only one story doesn't add up.",
    difficulty: "Easy",
    steps: [
      {
        stepNo: 1,
        title: "The Disappearance",
        description:
          "Aarav left his phone on his desk at 3:45 PM. When he returned at 4:00 PM, it was gone. The classroom door had been locked during that time.",
        hint: "Think about who could have remained inside the classroom.",
      },
      {
        stepNo: 2,
        title: "The Suspects",
        description:
          "Aarav says he left at 3:45 PM. Riya says she went directly to the library. Kabir says he stayed in the classroom until 4:00 PM.",
        options: ["Aarav", "Riya", "Kabir"],
        correctOption: 2,
        explanation:
          "Kabir admitted that he remained inside the classroom while the others had left.",
      },
      {
        stepNo: 3,
        title: "The Library Record",
        description:
          "The library attendance system shows that Riya entered the library at 3:47 PM.",
        options: [
          "Riya's story is supported",
          "Riya definitely stole the phone",
          "The library record must be fake",
        ],
        correctOption: 0,
        explanation:
          "The library record supports Riya's claim that she went to the library.",
      },
    ],
  },

  {
    id: "case-002",
    title: "The Switched Trophy",
    caseNo: 2,
    description:
      "After a school competition, the winning trophy mysteriously appears on the wrong team's table. Someone switched it before the ceremony ended.",
    difficulty: "Medium",
    steps: [
      {
        stepNo: 1,
        title: "The Trophy",
        description:
          "Team Blue won the competition. Their trophy was placed on the judges' table at 2:30 PM. Ten minutes later, it was found on Team Red's table.",
        hint: "Find out when the trophy was actually moved.",
      },
      {
        stepNo: 2,
        title: "The Photograph",
        description:
          "A photograph taken at 2:35 PM shows the trophy still sitting on the judges' table.",
        options: [
          "The trophy was moved after 2:35 PM",
          "The trophy was never on the judges' table",
          "Team Blue moved it before 2:35 PM",
        ],
        correctOption: 0,
        explanation:
          "The photograph proves that the trophy was still on the judges' table at 2:35 PM.",
      },
      {
        stepNo: 3,
        title: "The Witness",
        description:
          "A student says they saw someone wearing a red jacket near the judges' table at 2:38 PM.",
        options: [
          "Investigate the person in the red jacket",
          "Investigate someone wearing blue",
          "Ignore the witness",
        ],
        correctOption: 0,
        explanation:
          "The witness places someone wearing a red jacket near the trophy shortly before it disappeared.",
      },
    ],
  },

  {
    id: "case-003",
    title: "The Anonymous Note",
    caseNo: 3,
    description:
      "A mysterious note appears inside a student's locker containing information that only a few people could have known.",
    difficulty: "Hard",
    steps: [
      {
        stepNo: 1,
        title: "The Message",
        description:
          "The note says: 'Meet me after school. I know what happened in the science lab.' Only four students knew about the incident.",
        hint: "Look for something unique about the way the note was written.",
      },
      {
        stepNo: 2,
        title: "The Handwriting",
        description:
          "The handwriting looks different from the student's usual writing, but several words use unusual abbreviations.",
        options: [
          "The writer may have disguised their handwriting",
          "The note must have been written by a teacher",
          "The handwriting proves nothing",
        ],
        correctOption: 0,
        explanation:
          "Someone can disguise their handwriting, but their usual writing habits may still reveal them.",
      },
      {
        stepNo: 3,
        title: "The Abbreviation",
        description:
          "One abbreviation in the note is commonly used by only one of the four students.",
        options: [
          "Compare their writing habits",
          "Ignore the abbreviation",
          "Accuse everyone",
        ],
        correctOption: 0,
        explanation:
          "A personal writing habit can provide a strong clue about who wrote the note.",
      },
      {
        stepNo: 4,
        title: "The Final Deduction",
        description:
          "The student who uses the unusual abbreviation also knew the exact time the science lab incident occurred.",
        options: [
          "They are the most likely writer",
          "They definitely did not write it",
          "The note is unrelated to the incident",
        ],
        correctOption: 0,
        explanation:
          "Both the unique abbreviation and the specific knowledge connect the student to the note.",
      },
    ],
  },
];
