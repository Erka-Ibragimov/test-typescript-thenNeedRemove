// interface IUserService {
//     users: number;
//     getUsers(): number;
//   }
//   // @nullUser
//   @setUsers(2)
//   @log()
//   // @treeUserAdvanced
//   // @setUserAdvanced(4)
//   class UserService implements IUserService {
//     users: number = 1000;
//     getUsers(): number {
//       return this.users;
//     }
//   }
//   function nullUser(target: Function) {
//     target.prototype.users = 5;
//   }
//   function setUsers(users: number) {
//     console.log("setUsers init");
//     return (targer: Function) => {
//       console.log("setUsers run");
//       targer.prototype.users = users;
//     };
//   }
//   function log() {
//     console.log("log init");
//     return (targer: Function) => {
//       console.log("log run");
//     };
//   }
//   function treeUserAdvanced<T extends { new (...args: any[]): {} }>(
//     constructor: T
//   ) {
//     return class extends constructor {
//       users = 3;
//     };
//   }
//   function setUserAdvanced(users: number) {
//     return <T extends { new (...args: any[]): {} }>(constructor: T) => {
//       return class extends constructor {
//         users = users;
//       };
//     };
//   }
//   // function logUsers(obj: IUserService) {
//   //   console.log("Users" + obj.users);
//   //   return obj;
//   // }
//   console.log(new UserService().getUsers());
//   // console.log(nullUser(new UserService()).getUsers());
//   // console.log(logUsers(nullUser(new UserService())).getUsers());
//   // console.log(nullUser(logUsers(new UserService())).getUsers());
  