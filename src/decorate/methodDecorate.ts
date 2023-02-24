import "reflect-metadata";
const POSITIVE_METADATA_KEY = Symbol("POSITIVE_METADATA_KEY");
interface IUserService {
  //   users: number;
  getUsersInDatabase(): number;
}
class UserService implements IUserService {
  private _users: number;
  set users(num: number) {
    this._users = num;
  }
  // @Log()
  get users() {
    return this._users;
  }

  // @Catch()
  getUsersInDatabase(): number {
    return this._users;
  }
  @Validate()
  setUsersInDatabase(@Positive() num: number): void {
    this._users = num;
  }
}

function Positive() {
  return (target: Object, propertyKey: string, parameterIndex: number) => {
    // console.log(Reflect.getOwnMetadata("design:type", target, propertyKey));
    // console.log(
    //   Reflect.getOwnMetadata("design:paramtypes", target, propertyKey)
    // );
    // console.log(
    //   Reflect.getOwnMetadata("design:returntype", target, propertyKey)
    // );
    let existParams: number[] =
      Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
    existParams.push(parameterIndex);
    Reflect.defineMetadata(
      POSITIVE_METADATA_KEY,
      existParams,
      target,
      propertyKey
    );
  };
}

function Validate() {
  return (
    target: Object,
    propertyKey: string | symbol,
    descriptior: TypedPropertyDescriptor<(...args: any[]) => any>
  ) => {
    let method = descriptior.value;
    descriptior.value = function (...args: any[]) {
      let positiveParams: number[] =
        Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) ||
        [];
      if (positiveParams) {
        for (let index of positiveParams) {
          if (args[index] < 0) {
            throw new Error("Число должно быть больше нуля");
          }
        }
      }
      return method?.apply(this, args);
    };
  };
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
console.log(userService.setUsersInDatabase(10));
// console.log(userService.setUsersInDatabase(-10));
