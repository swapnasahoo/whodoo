import Case from "@/interfaces/Case";

export const mockCases: Case[] = [
  {
    id: "case-001",
    title: "The Missing Phone",
    caseNo: 1,
    description:
      "A phone disappears from a classroom during the final period. Three students were nearby, but only one story doesn't add up.",
    difficulty: "Easy",

    introduction:
      "The phone disappeared from the classroom during the final period. It belonged to Aarav, who reported it missing when he returned to the classroom at 4:00 PM. According to Aarav, three students were connected to the classroom during the final period: Riya, Kabir, and himself. After looking into the students involved, it was found that Kabir is known for doing well in both academics and sports and has never been involved in any serious misconduct. Aarav and Riya, on the other hand, have previously been involved in several minor mischievous incidents at school, sometimes together with Kabir. Although their past behaviour provides some context, it should not be treated as proof that any of them took the phone. The classroom was locked during the time the phone disappeared, meaning the movements of the people who were inside or near the classroom may be important.",

    steps: [
      {
        stepNo: 1,
        title: "The Timeline",
        question: "What should you establish first?",
        options: [
          "When Aarav last saw his phone",
          "Why Aarav left the classroom",
          "Who has the worst reputation",
        ],
        correctOption: 0,
        response: "Aarav last saw his phone on his desk at 3:45 PM.",
        explanation:
          "Knowing when the phone was last seen gives us the starting point for the disappearance.",
        hint: "Start with the last confirmed moment the phone was known to be there.",
      },

      {
        stepNo: 2,
        title: "The Timeline",
        question: "What should you establish next?",
        options: [
          "When Aarav returned to the classroom",
          "Kabir's academic performance",
          "Aarav's past behaviour",
        ],
        correctOption: 0,
        response:
          "Aarav returned to the classroom at 4:00 PM and found his phone missing.",
        explanation:
          "The phone disappeared sometime between 3:45 PM and 4:00 PM.",
        hint: "You already know when the phone was last seen. Find the other end of the time window.",
      },

      {
        stepNo: 3,
        title: "The Statements",
        question: "Whose whereabouts should you verify?",
        options: ["Riya's", "Aarav's", "The teacher's"],
        correctOption: 0,
        response:
          "The library attendance record shows that Riya entered the library at 3:47 PM.",
        explanation:
          "Riya's claim can now be compared with an independent record instead of relying only on her statement.",
        hint: "Look for someone whose story can be checked against a record.",
      },

      {
        stepNo: 4,
        title: "The Statements",
        question: "What should you verify about Riya's claim?",
        options: [
          "Whether someone can confirm she was in the library",
          "Whether she has been mischievous before",
          "Whether she knew Aarav",
        ],
        correctOption: 0,
        response:
          "A librarian remembers seeing Riya in the library shortly after she entered at 3:47 PM.",
        explanation:
          "The library record and the librarian's statement both support Riya's whereabouts during the disappearance window.",
      },

      {
        stepNo: 5,
        title: "The Locked Classroom",
        question: "What should you establish about the classroom?",
        options: [
          "Whether anyone could enter after it was locked",
          "Who usually cleans the classroom",
          "Who had the best grades",
        ],
        correctOption: 0,
        response:
          "The classroom was locked from the outside at 3:46 PM, and the key log shows that nobody opened it again until 4:00 PM.",
        explanation:
          "Anyone who remained inside after 3:46 PM could potentially have accessed the phone.",
        hint: "The key log can tell you who could physically enter the room.",
      },

      {
        stepNo: 6,
        title: "The Final Deduction",
        question: "Who had the strongest opportunity to take the phone?",
        options: ["Kabir", "Riya", "Aarav"],
        correctOption: 0,
        response:
          "Kabir remained inside the classroom while the phone was missing.",
        explanation:
          "Riya's whereabouts are supported by the library records, while Kabir remained inside during the disappearance window. That gives Kabir the strongest opportunity.",
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

    introduction:
      "The annual school competition has just ended, with Team Blue declared the winner. Their trophy was placed on the judges' table while the teams prepared for the closing ceremony. A few minutes later, the trophy was discovered on Team Red's table. Both teams were still present in the hall at the time. Team Blue had been celebrating their victory, while Team Red had just lost the competition. Several students and teachers were moving around the area, making it difficult to determine who could have approached the judges' table. No one has admitted to moving the trophy, and there is currently no direct evidence identifying who switched it. The exact timing of the movement and the people who were near the trophy may help narrow down what happened.",

    steps: [
      {
        stepNo: 1,
        title: "The Timeline",
        question: "What should you establish first?",
        options: [
          "When the trophy was last confirmed to be on the judges' table",
          "Which team was more upset",
          "Who won the competition",
        ],
        correctOption: 0,
        response:
          "A photograph taken at 2:35 PM shows the trophy still sitting on the judges' table.",
        explanation:
          "The photograph gives us a confirmed point in the timeline before the trophy was moved.",
        hint: "Start with the last confirmed location of the trophy.",
      },

      {
        stepNo: 2,
        title: "The Timeline",
        question: "What should you establish next?",
        options: [
          "When the trophy was discovered at its new location",
          "Why Team Red lost",
          "Who celebrated the most",
        ],
        correctOption: 0,
        response: "The trophy was discovered on Team Red's table at 2:40 PM.",
        explanation:
          "The trophy must have been moved sometime between 2:35 PM and 2:40 PM.",
      },

      {
        stepNo: 3,
        title: "The Witness",
        question: "Whose observation should you investigate?",
        options: [
          "The student who was near the judges' table",
          "Team Blue's captain",
          "The competition judge",
        ],
        correctOption: 0,
        response:
          "A student waiting near the judges' table reported seeing someone wearing a red jacket near the table at around 2:38 PM.",
        explanation:
          "The witness gives us a useful lead about who may have been near the trophy during the relevant time.",
        hint: "The most useful witness is the person who was closest to where the trophy was kept.",
      },

      {
        stepNo: 4,
        title: "The First Suspect",
        question: "What should you verify about the person in the red jacket?",
        options: [
          "Whether they could actually reach the trophy at 2:38 PM",
          "Whether they supported Team Red",
          "Whether they were angry about the result",
        ],
        correctOption: 0,
        response:
          "Team Red's captain, Dev, was wearing a red jacket, but a teacher confirms that Dev was on stage from 2:36 PM until 2:40 PM.",
        explanation:
          "Although Dev matches the witness description, his confirmed location makes it unlikely that he moved the trophy.",
      },

      {
        stepNo: 5,
        title: "Another Lead",
        question: "What should you investigate next?",
        options: [
          "Whether anyone else matched the red-jacket description",
          "Whether Dev was upset",
          "Whether Team Blue wanted the trophy back",
        ],
        correctOption: 0,
        response:
          "A volunteer working near the equipment room was also wearing a red jacket.",
        explanation:
          "The witness description does not uniquely identify Dev. Another person matches the same description and must be investigated.",
        hint: "A clue is only useful if you check whether other people also fit it.",
      },

      {
        stepNo: 6,
        title: "The Security Footage",
        question: "What should you verify about the volunteer?",
        options: [
          "Where the volunteer was during the disappearance window",
          "Which team the volunteer supported",
          "Why the volunteer wore a red jacket",
        ],
        correctOption: 0,
        response:
          "Security footage shows the volunteer near the judges' table at 2:38 PM and walking toward Team Red's table at 2:39 PM.",
        explanation:
          "The volunteer's movements connect both locations during the exact period when the trophy was moved.",
      },

      {
        stepNo: 7,
        title: "The Final Deduction",
        question: "Who most likely moved the trophy?",
        options: ["The volunteer", "Dev", "Team Blue's captain"],
        correctOption: 0,
        response:
          "The volunteer is the strongest suspect because their movements match the trophy's timeline and connect the judges' table to Team Red's table.",
        explanation:
          "The volunteer had the opportunity, was near the trophy at the right time, and was later seen moving toward the trophy's final location.",
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

    introduction:
      "An anonymous note was discovered inside a student's locker after school. The message referred to an incident that had taken place in the science laboratory earlier that day. Only four students were known to have information about what happened. None of them admitted writing the note. The handwriting does not immediately match the student's usual writing, suggesting that the writer may have attempted to conceal their identity. Investigators have no direct evidence identifying the writer and must rely on small details within the note and what each student could have known at the time. The writer may have deliberately included enough information to make the intended recipient understand the message while still hiding their identity.",

    steps: [
      {
        stepNo: 1,
        title: "The Message",
        question: "What should you establish first?",
        options: [
          "What the writer must have known",
          "Who has the neatest handwriting",
          "Who usually writes notes",
        ],
        correctOption: 0,
        response:
          "The writer knew about the incident that occurred in the science laboratory.",
        explanation:
          "This limits the investigation to people who had access to information about the incident.",
        hint: "Start with what the note proves the writer knew.",
      },

      {
        stepNo: 2,
        title: "The Message",
        question: "What detail should you investigate next?",
        options: [
          "Whether the note contains information known only to certain people",
          "Whether the note looks threatening",
          "Whether the locker owner likes science",
        ],
        correctOption: 0,
        response:
          "The note refers to the exact time the science laboratory incident occurred.",
        explanation:
          "A specific detail such as the exact time can help distinguish people with firsthand knowledge from people who only heard about the incident later.",
      },

      {
        stepNo: 3,
        title: "The Knowledge",
        question: "Whose knowledge should you verify?",
        options: [
          "Who knew the exact time of the incident",
          "Who was absent from school",
          "Who had the best handwriting",
        ],
        correctOption: 0,
        response:
          "Three students heard about the incident afterward, but only one of the four students was present when it happened.",
        explanation:
          "The student who was present had access to information that the others could only have learned later.",
        hint: "Think about who could know the exact details without being told.",
      },

      {
        stepNo: 4,
        title: "The Handwriting",
        question: "What should you compare?",
        options: [
          "The unusual abbreviations in the note with the students' writing habits",
          "The students' favourite subjects",
          "Only the size of their handwriting",
        ],
        correctOption: 0,
        response:
          "The note uses an unusual abbreviation that is commonly used by only one of the four students.",
        explanation:
          "Someone can disguise their handwriting while still accidentally keeping their normal writing habits.",
        hint: "Look beyond the appearance of the letters.",
      },

      {
        stepNo: 5,
        title: "The Connection",
        question: "What should you establish before making an accusation?",
        options: [
          "Whether the same student also had firsthand knowledge of the incident",
          "Whether the student likes writing",
          "Whether the student has written anonymous notes before",
        ],
        correctOption: 0,
        response:
          "The student who commonly uses the unusual abbreviation was also present during the science laboratory incident.",
        explanation:
          "The writing clue becomes much stronger when it connects with the student's firsthand knowledge.",
      },

      {
        stepNo: 6,
        title: "The Final Deduction",
        question: "Who is the strongest candidate for writing the note?",
        options: [
          "The student whose writing habit matches and who was present at the incident",
          "A student who only heard about the incident afterward",
          "A student who knew nothing about the incident",
        ],
        correctOption: 0,
        response:
          "The student whose writing habits match the note and who was present during the incident is the strongest candidate.",
        explanation:
          "Two independent clues point toward the same person: their unusual writing habit and their firsthand knowledge of the incident.",
      },
    ],
  },
];
