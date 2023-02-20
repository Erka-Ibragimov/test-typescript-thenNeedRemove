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
// /////////////////////////////////////////////////////////////////////////////////
// interface Req {
//   sum: number;
//   from: number;
//   to: number;
// }
// enum ResponseStatus {
//   SUCCESS = "success",
//   FAILED = "failed",
// }
// interface DataBaseId extends Req {
//   databaseId: number;
// }
// interface ErrorMessage {
//   errorMessage: string;
//   errorCode: number;
// }
// interface Success {
//   status: ResponseStatus.SUCCESS;
//   data: DataBaseId;
// }
// interface Failed {
//   status: ResponseStatus.FAILED;
//   data: ErrorMessage;
// }
// type FirstOrSecond = Success | Failed;

// const isSuccess = (res: FirstOrSecond): res is Success => {
//   //   return typeof (res as Success).data.databaseId !== undefined;
//   //   return "databaseId" in res.data;
//   if (res.status == ResponseStatus.SUCCESS) {
//     return true;
//   }
//   return false;
// };
// const isFailed = (res: FirstOrSecond): res is Failed => {
//   //   return "errorMessage" in res.data;
//   if (res.status == ResponseStatus.FAILED) {
//     return true;
//   }
//   return false;
// };
// type f = (res: FirstOrSecond) => number;
// const fn: f = (res: FirstOrSecond): number => {
//   if (isSuccess(res)) {
//     return 1;
//   }
//   return 0;
// };
///////////////////////////////////////////////////
// abstract class Logger {
//   abstract log(message: string): void;
//   printDate() {
//     console.log(new Date());
//   }
// }
// class PrintLog extends Logger {
//   log(message: string): void {
//     console.log(message);
//   }
//   logWithDate() {
//     this.printDate();
//     this.log("Here I am Erkin");
//   }
// }
// const log = new PrintLog();
// log.logWithDate();
//////////////////////////////////////////
// abstract class Logger {
//   // как работают абстрактные классы
//   abstract log(message: string): void;
//   printDate(date: Date): void {
//     this.log(date.toString());
//   }
// }
// class PrintLogger extends Logger {
//   log(message: string): void {
//     console.log(message);
//   }
//   logWithDate(message: string): void {
//     this.printDate(new Date());
//     this.log(message);
//   }
// }
// const log = new PrintLogger();
// log.logWithDate("sf");
/////////////////////////////////////////////
// genetic
// const transferToString = <T>(thing: T): string | undefined => {
//   if (typeof thing === "string") {
//     return thing;
//   } else if (typeof thing === "number") {
//     return thing + "";
//   } else if (typeof thing === "boolean") {
//     return thing + "";
//   }
//   return undefined;
// };
// transferToString<string>("sdf");
// transferToString(4);
//////////////////////////////////////////////////////////
const data = [
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
  { id: 3, name: "Надя" },
];
// interface ISort {
//   id: number;
// }
// function sortById<T extends ISort>(
//   arr: Array<T | undefined>
// ): Array<T | undefined> {
//   for (let i = 0; i < arr.length; i++) {
//     let index = i;
//     for (let k = i + 1; k < arr.length; k++) {
//       if (arr[index]!.id < arr[k]!.id) {
//         index = k;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[index];
//     arr[index] = temp;
//   }
//   return arr;
// }
// const a = sortById(data);
//////////////////////////////////////////////////
// interface ISort {
//   id: number;
// }
// function sortById<T extends ISort>(
//   arr: T[],
//   typesSort: "asc" | "desc" = "asc"
// ): T[] {
//   return arr.sort((a, b) => {
//     switch (typesSort) {
//       case "asc":
//         return a.id - b.id;
//       case "desc":
//         return b.id - a.id;
//     }
//   });
// }
// console.log(sortById(data, "desc"));
// console.log(sortById(data));
///////////////////////////////////////////////