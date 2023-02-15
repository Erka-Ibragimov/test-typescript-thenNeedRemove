"use strict";
// const skills: readonly [number, string] = [1, "Dev"];
// const [id, skillName] = skills;
// const arr: [number, string, ...boolean[]] = [1, "a", true, true, false]; // tuples
// const genArr: ReadonlyArray<string> = ["s"];
// for (const skill of skills) {
//   console.log(skill.toLocaleUpperCase());
// }
// const newSkills = skills
//   .filter((s: string) => s !== "Dev")
//   .map((s: string) => s + "!")
//   .reduce((a: string, b: string) => a + b);
// console.log(newSkills);
// enum RequestStatus {
//   PUBLISHED = "published",
//   DRAFT = "draft",
//   DELETED = "deleted",
// }
// interface Request {
//   topicId: number;
//   statusCode?: RequestStatus;
// }
// interface Response {
//   question: string;
//   answer: string;
//   tags: string[];
//   likes: number;
//   statusCode?: RequestStatus;
// }
// const getFaqs = async (req: Request): Promise<Response[]> => {
//   const res = await fetch("/faqs", {
//     method: "POST",
//     body: JSON.stringify(req),
//   });
//   const data: Promise<Response[]> = await res.json();
//   return data;
// };
