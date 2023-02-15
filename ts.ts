// function logId(id: number | string | boolean) {
//   if (typeof id == "string") {
//     console.log(id.toLocaleUpperCase());
//   } else if (typeof id == "number") {
//     console.log(id);
//   } else {
//     console.log(id);
//   }
// }
// logId(1);
// logId("asd");
// logId(true);

// function logError(err: string | string[]) {
//   if (Array.isArray(err)) {
//     console.log(err);
//   } else {
//     console.log(err);
//   }
// }

// function logObject(obj: { a: number } | { b: number }) {
//   if ("a" in obj) {
//     console.log(obj.a);
//   } else {
//     console.log(obj.b);
//   }
// }

// function logMulIds(a: string | number, b: string | boolean) {
//   if (a === b) {
//   } else {
//   }
// }
//////////////////////////////////////////
// enum RequestType {
//   GET = "GET",                   enum и types
//   POST = "POST",
// }
// function fetchWithAuth(url: string, method: RequestType) {}

// type httpMethod = "post" | "get";        лучше использовать types
// type coolString = string;

// function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
//   return 1;
// }
// fetchWithAuth("hhh", "post");

// let method = "post";
// fetchWithAuth("hhh", method as "post");
//////////////////////////////////////////////////////
// type User = {
//   name: string;
//   age: number;
//   skills: string[];
// };
// type Role = {
//   name: string;             как работают types
//   id: number;
// };

// // type UserWithRole = User & Role;
// type UserWithRole = {
//   user: User;
//   role: Role;
// };

// const user: UserWithRole = {
//   user: {
//     name: "P",
//     age: 33,
//     skills: ["1", "2"],
//   },
//   role: {
//     name: "E",
//     id: 1,
//   },
// };
/////////////////////////////////////////////////////////
// interface User {
//   name: string;
//   age: number;
//   log: (id: number) => string;
// }
// interface Role {         как работают interface
//   roleId: number;
// }
// interface UserWithRole extends User, Role {
//   creatDate: Date;
// }
// let user: UserWithRole = {
//   name: "asd",
//   age: 2,
//   roleId: 1,
//   creatDate: new Date(),
//   log(id) {
//     return "d";
//   },
// };

// interface UserDic {
//   [index: number]: User;
// }
///////////////////////////////////////////////////////////
// interface User {
//   name: string;
// }
// interface User {         отличие types и  interface
//   age: number;
// }
// const user: User = {
//   name: "Erkin",
//   age: 2,
// };
//////////////////////////////////////////
// type ID = string | number;
// interface IDI {
//   ID: string | number;   отличие types и  interface
// }
//////////////////////////////////////////
// interface User {
//   login: string;
//   password?: string;
// }
// const user: User = {
//   login: "sd",
//   //   password: "sd",
// };

// function mult(num1: number, num2: number = 5): number {
//   if (!num2) {
//     return num1 * num1;
//   }
//   return num1 * num2;
// }
// mult(2);
// mult(3, 6);
// //////////////////////////////////////////////////////////
// interface UserPro {
//   login: string;
//   password?: {
//     type: "primary" | "secondary";
//   };
// }

// function testPass(user: UserPro) {
//   //   const t = user.password ? user.password.type : undefined;
//   const t = user.password?.type;
// }

// function test(param?: string) {
//   const t = param ?? mult(5);
// }
// /////////////////////////////////////////////////////////////////
//void  игнорируем к примеру foreach она ничего не возвращает
// type voidFn = () => void;
// const f1: voidFn = () => {};
// const f2: voidFn = () => {
//   return true;
// };
// const b = f2();
// /////////////////////////////////////////
// const arr = ["Dev", "DevOps"];
// const user: { s: string[] } = {
//   s: [],
// };
// arr.forEach((el) => {
//   user.s.push(el);
// });
////////////////////////////////////////////////////
//unknown
// let input: unknown;
// input = 4;

// function run(i: unknown) {
//   if (typeof i == "number") {
//     i++;
//   } else if (typeof i == "string") {
//     console.log(i[0]);
//   } else {
//     console.log(i);
//   }
// }
// run(input);
///////////////////////////////////////////
// async function getData() {
//   try {
//     await fetch("");
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.log(error.message);
//     }
//   }
// }

// async function getDataForce() {
//   try {
//     await fetch("");
//   } catch (error: unknown) {
//     const e = error as Error;
//     console.log(e.message);
//   }
// }
////////////////////////////////////////////////
// type U1 = unknown | null;  // unknown
// type I1 = unknown & string;  // string
////////////////////////////////////////////
