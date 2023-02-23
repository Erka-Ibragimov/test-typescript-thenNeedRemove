// interface IUserService {
//   users: number;
//   getUsersInDatabase(): number;
// }

// @CreateAt()
// class UserService implements IUserService {
//   users: number = 10000;
//   getUsersInDatabase(): number {
//     return this.users;
//   }
// }

// function CreateAt() {
//   return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//     return class extends constructor {
//       date: Date = new Date();
//     };
//   };
// }
// type CreateAt = {
//   date: Date;
// };
// console.log((new UserService() as IUserService & CreateAt).date);
