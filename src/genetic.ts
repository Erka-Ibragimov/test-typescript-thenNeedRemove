// const num: Array<number> = [1, 2, 3];

// async function move() {
//   const a = await new Promise<number>((resolve, reject) => {
//     resolve(1);
//   });
// }

// const check: Record<string, boolean> = {
//   // не ограниченное типизация обьекта со значениями свойство string, значение boolean - нужен Record
//   drive: true,
//   kpp: false,
// };
//////////////////////////////////////////////////////////////////////////
// function logMiddleware<T>(data: T): T {
//   console.log(data);
//   return data;
// }
// const res = logMiddleware<string>("df");

// function getSplitedHalf<T>(data: Array<T>): Array<T> {
//   const l = data.length / 2;
//   return data.splice(0, l);
// }
// getSplitedHalf<number>([1, 2, 5]);
// getSplitedHalf(["sdf", 2, true]);
// const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;
// const split2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalf;
// ///////////////////////////////////////////////////////////////
// interface ILogLine<T> {
//   timeStamp: Date;
//   data: T;
// }
// type LogLineType<T> = {
//   timeStamp: Date;
//   data: T;
// };
// const logLine: LogLineType<{ a: number }> = {
//   timeStamp: new Date(),
//   data: {
//     a: 1,
//   },
// };
////////////////////////////////////////////////////////////
// class Vehicle {
//   run: number;
// }
// function kmToMiles<T extends Vehicle>(vehicle: T): T {
//   vehicle.run = vehicle.run / 0.62;
//   return vehicle;
// }
// class LCV extends Vehicle {
//   capacity: number;
// }

// const vehicle = kmToMiles(new Vehicle());
// const lcv = kmToMiles(new LCV());
// kmToMiles({ run: 1 });

// function logId<T extends string | number, Y>(
//   id: T,
//   data: Y
// ): { id: T; data: Y } {
//   console.log(id);
//   return { id, data };
// }
////////////////////////////////////////////////////
// class Resp<D, E> {
//   data: D;
//   error: E;
//   constructor(data?: D, error?: E) {
//     if (data) {
//       this.data = data;
//     }
//     if (error) {
//       this.error = error;
//     }
//   }
// }
// const res = new Resp<string, number>("data");

// class HTTPResp<F> extends Resp<string, number> {
//   code: F;

//   setCode(code: F) {
//     this.code = code;
//   }
// }
// const res2 = new HTTPResp();
///////////////////////////////////////////////////
type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;
class List {
  constructor(public items: string[]) {}
}
class Accordion {
  isOpened: boolean;
}
type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

class ExtendedListClass extends List {
  first() {
    return this.items[0];
  }
}
function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
  // миксины для 2 и более extends и показывает в случаее ошибки
  return class ExtendedList extends Base {
    first() {
      return this.items[0];
    }
  };
}
class AccordionList {
  isOpened: boolean;
  constructor(public items: string[]) {}
}

const list = ExtendedList(AccordionList);
const res = new list(["first", "second"]);
console.log(res.first());
