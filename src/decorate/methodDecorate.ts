interface IUserService {
  //   users: number;
  getUsersInDatabase(): number;
}
class UserService implements IUserService {
  private _users: number;
  set users(num: number) {
    this._users = num;
  }
  @Log()
  get users() {
    return this._users;
  }

  @Catch()
  getUsersInDatabase(): number {
    throw new Error("Ошибка");
    // return 1;
  }
}

function Log() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptior: PropertyDescriptor
  ) => {
    const set = descriptior.set;
    descriptior.set = (...args: any) => {
      console.log(args);
      set?.apply(target, args);
    };
  };
}

function Max(max: number) {
  return (target: Object, propertyKey: string | symbol) => {
    let value: number;
    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`Нельзя установить значение больше ${max}`);
      } else {
        value = newValue;
      }
    };
    const getter = function () {
      return value;
    };
    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

function Catch(rethrow: boolean = false) {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptior: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const oldValue = descriptior.value;
    descriptior.value = (...args: any[]) => {
      try {
        return oldValue?.apply(target, args);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
          if (rethrow) {
            throw new Error(e.message);
          }
        }
      }
    };
  };
}
const userService = new UserService();
userService.users = 1;
console.log(userService.users);
