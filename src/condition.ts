// const a: number = Math.random() > 0.5 ? 1 : 0;
// interface HTTPResponse<T extends "success" | "failed"> {
//   code: number;
//   data: T extends "success" ? string : Error;
//   additionalData: T extends "success" ? string : number;
// }
// const success: HTTPResponse<"success"> = {
//   code: 200,
//   data: "done",
//   additionalData: "dfg",
// };
// const error: HTTPResponse<"failed"> = {
//   code: 400,
//   data: new Error(),
//   additionalData: 0,
// };
// ////////////////////////////////////////////////////////////////////
// class User {
//   id: number;
//   name: string;
// }
// class UserPersistend extends User {
//   dbId: string;
// }
// function getUser(dbId: string): UserPersistend;
// function getUser(id: number): User;
// function getUser(dbIdOrId: string | number): User | UserPersistend {
//   if (typeof dbIdOrId == "number") {
//     return new User();
//   }
//   return new UserPersistend();
// }

// type UserOrUserPersistend<T extends string | number> = T extends number
//   ? User
//   : UserPersistend;
// function getUser2<T extends string | number>(id: T): UserOrUserPersistend<T> {
//   if (typeof id == "number") {
//     return new User() as UserOrUserPersistend<T>;
//   }
//   return new UserPersistend();
// }
// const result = getUser2(1);
// const result2 = getUser2("sdf");
// /////////////////////////////////////////////////////////////
