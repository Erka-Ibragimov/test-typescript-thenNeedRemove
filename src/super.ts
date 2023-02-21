// interface IUser {
//   name: string;
//   age: number;
// }
// type KeysOfUser = keyof IUser;
// const key: KeysOfUser = "age";
// function getValue<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }
// const user: IUser = {
//   name: "Erkin",
//   age: 23,
// };
// const userName = getValue(user, "name");
// //////////////////////////////////////////////////////////////
// let strOrNum: string | number; ///// typeof keyof
// let str2OrNum: typeof strOrNum;

// const user = {
//   name: "Erkin",
// };
// type keyOfUser = keyof typeof user;
// enum Direction {
//   Up,
//   Down,
// }
// type d = keyof typeof Direction;
////////////////////////////////////////////////
// interface Data {
//   group: number;
//   name: string;
// }
// const dataInfo: Data[] = [
//   { group: 1, name: "a" },
//   { group: 1, name: "b" },
//   { group: 2, name: "c" },
// ];

// interface IGroup<T> {
//   [key: string]: T[];
// }

// function groupBy<T>(array: T[], key: keyof T): IGroup<T> {
//   let obj: any = {};
//   array.forEach((el: T) => {
//     if (!obj[el[key]]) {
//       obj[el[key]] = [el];
//     } else {
//       obj[el[key]].push(el);
//     }
//   });
//   return obj;
// }
// const res = groupBy<Data>(dataInfo, "group");
// console.log(res);
///////////////////////////////////////////////////////////
// interface Data {
//   group: number;
//   name: string;
// }
// const dataInfo: Data[] = [
//   { group: 1, name: "a" },
//   { group: 1, name: "b" },
//   { group: 2, name: "c" },
// ];
// interface IGroup<T> {
//   [key: string]: T[];
// }
// function groupBy<T>(array: T[], key: keyof T) {
//   return array.reduce((obj: any, el) => {
//     const numGroup = el[key];
//     if (!obj[numGroup]) {
//       obj[numGroup] = [el];
//     } else {
//       obj[numGroup].push(el);
//     }
//     return obj;
//   }, {});
// }
// const res = groupBy<Data>(dataInfo, "group");
// console.log(res);
/////////////////////////////////////////////////////
