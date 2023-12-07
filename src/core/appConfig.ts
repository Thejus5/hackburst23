export interface QuestionConfigInterface {
  questionName: string;
  opensIn: string;
  hintIn: string;
  deadLine: string;
  questionLink?: string;
}

export const appConfig = {
  appTitle: "HackBurst '23",
  deadLineDate: "8 december 2023 18:00:00", // Keep the format
  registrationLink:
    "https://docs.google.com/forms/d/1pGFxp1mtRV1nLVc7YVJ3IppRgVe9_AlO5YUx2pOkVU4/viewform?pli=1&pli=1&edit_requested=true",
  rules: [
    "All participants must be present at Ganga office, Trivandrum.",
    "Please maintain professionalism during the course of the event.",
    "Fair play is expected from all participants.",
    "Please adhere to all office policies.",
    "Registered team has to report to the registration desk at 5:30 PM on the event day and confirm the participation.",
    "Being it a coding challenge, you can use any online resources or sites for technical support.",
    "It is not encouraged to discuss the questions with other participants or those who are not participating in the event.",
    "Keep the event ideas, source codes, questions etc confidential and do not share it on any online platforms including social media.",
    "As notified earlier, personal computers/laptops are not allowed within office premises. Please get in touch with the organizing team in advance if you need any such assistance.",
    "The API’s are protected with bruteforce limits, so don’t lose your chance to submit with continuous retries.",
    "Each team will be provided with a Repository, you can push your codes, prompts, etc to the respective folders. Add as many details as possible for each puzzle describing how you solved the same.",
  ],
};

export const questionConfig: QuestionConfigInterface[] = [
  {
    questionName: "Main",
    opensIn: "8 december 2023 18:00:00",
    hintIn: "8 december 2023 18:30:00",
    deadLine: "9 december 2023 06:00:00",
    questionLink:"www.google.com"
  },
  {
    questionName: "1",
    opensIn: "8 december 2023 19:00:00",
    hintIn: "8 december 2023 19:30:00",
    deadLine: "9 december 2023 06:00:00",
  },
  {
    questionName: "2",
    opensIn: "8 december 2023 21:30:00",
    hintIn: "8 december 2023 22:00:00",
    deadLine: "9 december 2023 06:00:00",
  },
  {
    questionName: "3",
    opensIn: "8 december 2023 23:00:00",
    hintIn: "8 december 2023 23:30:00",
    deadLine: "9 december 2023 06:00:00",
  },
  {
    questionName: "4",
    opensIn: "9 december 2023 02:00:00",
    hintIn: "8 december 2023 02:30:00",
    deadLine: "9 december 2023 06:00:00",
  },
  {
    questionName: "5",
    opensIn: "8 december 2023 03:30:00",
    hintIn: "8 december 2023 04:00:00",
    deadLine: "9 december 2023 06:00:00",
  },
];
