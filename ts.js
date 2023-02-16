"use strict";
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
// never
// function generateError(message: string): never {
//   throw new Error(message);
// }
// function dumpError(): never {
//   while (true) {}
// }
// /////////////////////////////////////////////////
// type paymentAction = "refund" | "checkout" | "reject";
// function proccessAction(action: paymentAction) {
//   switch (action) {
//     case "refund":
//       //...
//       break;
//     case "checkout":
//       //...
//       break;
//     case "reject":
//       //...
//       break;
//     default: // проверка что никогда не зайдем в этот кейс
//       const _: never = action;
//       throw new Error("Нет такого action");
//   }
// }
////////////////////////////////////////////////
// function generateError(message: string): never {
//   throw new Error(message);
// }
// function isString(x: string | number): boolean {
//   if (typeof x === "number") {
//     return false;
//   } else if (typeof x === "string") {
//     return true;
//   }
//   generateError("Не может быть!");
// }
/////////////////////////////////////////////////////////
// const n: null = null; /// null это осознанно делаем а undefined нет
// // const n1: string = null;
// // const n2: number = null;
// // const n3: undefined = null;
// interface User {
//   name: string;
// }
// function getUser(): User | null {
//   if (Math.random() > 0.5) {
//     return null;
//   } else {
//     return { name: "Erkin" };
//   }
// }
// const user = getUser();
// if (user) {
//   const n55 = user.name;
// }
//////////////////////////////////////////////////////
// let a = 5;
// let b: string = a.toString();
// let e: string = new String(a).valueOf();
// let f: boolean = new Boolean(a).valueOf();
// let c = "5.5";
// let d: number = parseFloat(c);
/////////////////////////////////////
// interface User {
//   // преобразование обьектов
//   name: string;
//   email: string;
//   login: string;
// }
// const user: User = {
//   name: "Вася",
//   email: "vasay",
//   login: "Vasyyyy",
// };
// interface Admin {
//   name: string;
//   role: number;
// }
// const admin: Admin = {
//   ...user,
//   role: 1,
// };
// function userToAdmin(user: User): Admin {
//   return {
//     name: user.name,
//     role: 1,
//   };
// }
// /////////////////////////////////////////////
// // type guards --------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function logId(id: string | number) {
//   if (isString(id)) {
//     console.log(id);
//   } else if (typeof id === "number") {
//     console.log(id);
//   }
//   id;
// }
// function isString(x: string | number): x is string {
//   /// хототь и возврашает string но на самом дела возварашает true или false
//   /// Promise не работает
//   return typeof x == "string";
// }
// function isAdmin(user: User | Admin): user is Admin {
//   /// точно так же как и со string
//   return "role" in user;
// }
// function isAdminAlternative(user: User | Admin): user is Admin {
//   return (user as Admin).role !== undefined;
// }
// function setRoleZero(user: User | Admin) {
//   if (isAdmin(user)) {
//     user.role = 0;
//   } else {
//     throw new Error("Пользователь не админ");
//   }
// }
///////////////////////////////////////////////////////////////////////
