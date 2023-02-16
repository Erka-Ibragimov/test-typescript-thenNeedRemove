// class User { /// перезагрузка constructor
//   name: string;
//   age: number;

//   constructor();
//   constructor(name: string);
//   constructor(age: number);
//   constructor(name: string, age: number);
//   constructor(ageOrName?: string | number, age?: number) {
//     if (typeof ageOrName === "string") {
//       this.name = ageOrName;
//     } else if (typeof ageOrName === "number") {
//       this.age = ageOrName;
//     }
//     if (typeof age === "number") {
//       this.age = age;
//     }
//   }
// }
// const user = new User("Erkin");
// const user2 = new User();
// const user3 = new User(33);
// const user4 = new User("A", 44);
// console.log(user);
// console.log(user2);
// console.log(user3);
// console.log(user4);
///////////////////////////////////////////////
// enum PaymentStatus {
//   Holded,
//   Proccessed,
//   Reversed,
// }
// class Payment {
//   id: number;
//   status: PaymentStatus = PaymentStatus.Holded;
//   createdAt: Date = new Date();
//   updatedAt: Date;

//   constructor(id: number) {
//     this.id = id;
//   }

//   getPaymentLifeTime(): number {
//     return new Date().getTime() - this.createdAt.getTime();
//   }

//   unholdPayment(): void {
//     if (this.status == PaymentStatus.Proccessed) {
//       throw new Error("Платеж не может быть вовращен");
//     }
//     this.status = PaymentStatus.Reversed;
//     this.updatedAt = new Date();
//   }
// }

// const payment = new Payment(1);
// payment.unholdPayment();
// console.log(payment);
// const time = payment.getPaymentLifeTime();
// console.log(time);
///////////////////////////////////////////////
// class User { /// перезагрузка
//   skills: string[];
//   addSkill(x: string): void;
//   addSkill(x: string[]): void;
//   addSkill(xOrXs: string | string[]): void {
//     if (typeof xOrXs === "string") {
//       this.skills.push(xOrXs);
//     } else {
//       xOrXs.forEach((el) => {
//         this.skills.push(el);
//       });
//     }
//   }
// }
// const user = new User();
// user.addSkill("Erkin");
// console.log(user);

// function run(distance: number): number;
// function run(distance: string): string;
// function run(distance: number | string): string | number {
//   if (typeof distance === "string") {
//     return "E";
//   }
//   return 1;
// }
/////////////////////////////////////////////////////////
// class User {
//   /// set и get не может быть async
//   _login: string;
//   password: string;

//   set login(l: string) {
//     this._login = "user-" + l;
//   }

//   get login() {
//     return this._login;
//   }
// }
// const user = new User();
// user.login = "myLogin";
// console.log(user);
// console.log(user.login);
//////////////////////////////////////////////
// implements
// interface ILogger {
//   log: (...args: string[]) => Promise<void>;
//   error: (...args: string[]) => void;
// }
// class Logger implements ILogger {
//   async log(...args: string[]): Promise<void> {
//     console.log(...args);
//   }
//   error(...args: string[]): void {
//     // Кинуть во внешнюю систему
//     console.log(...args);
//   }
// }
/////////////////////////////////////////
// interface IPayable {
//   pay: (paymentId: number) => void;
//   price?: number;
// }
// interface IDeletable {
//   delete: () => void;
// }
// class User implements IPayable, IDeletable {
//   pay(paymentId: number): void {}
//   delete(): void {}
// }
// /////////////////////////////////////////////
// /// extends
// type PaymentStatus = "new" | "paid";
// class Payment {
//   id: number;
//   status: PaymentStatus = "new";

//   constructor(id: number) {
//     this.id = id;
//   }

//   pay() {
//     this.status = "paid";
//   }
// }

// class PersistedPayment extends Payment {
//   databaseId: number;
//   paidAt: Date;

//   constructor() {
//     const id = Math.random();
//     super(id);
//   }

//   save() {
//     /// save to database
//   }

//   override pay(date?: Date) {
//     super.pay();
//     if (date) {
//       this.paidAt = date;
//     }
//   }
// }

// new PersistedPayment();
// ///////////////////////////////////////////////
// class User {
//   name: string = "user";
//   constructor() {
//     console.log(this.name);
//   }
// }
// class Admin extends User {
//   name: string = "admin";
//   constructor() {
//     super();
//     console.log(this.name);
//   }
// }
// new Admin();
// /////////////////////////////////////
// new Error("");

// class HttpError extends Error {
//   code: number;
//   constructor(message: string, code?: number) {
//     super(message);
//     this.code = code ?? 500;
//   }
// }
/////////////////////////////////////////////
/////////////////////////// Плохо понял
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Users extends Array<User> {
//   searchByName(name: string) {
//     return this.filter((u) => u.name === name);
//   }
//   override toString(): string {
//     return this.map((u) => u.name).join(", ");
//   }
// }

// const users = new Users();
// users.push(new User("Erkin"));
// users.push(new User("PP"));
// console.log(users.toString());

// class UserList {
//   // композиция
//   users: User[];
//   push(u: User) {
//     this.users.push(u);
//   }
// }

// class Payment {
//   date: Date;
// }
// class UserWithPayment extends Payment {
//   userId: number;
//   name: string;
// }
// class UserWithPayment2 {
//   // композиция
//   user: User;
//   payment: Payment;
//   constructor(user: User, payment: Payment) {
//     this.user = user;
//     this.payment = payment;
//   }
// }
////////////////////////////////////////////////////
// class Vehicle {
//   public make: string;
//   private damages: string[];
//   private _model: string;
//   protected run: number;
//   #price: number;

//   set model(m: string) {
//     this._model = m;
//     this.#price = 100;
//   }
//   get model() {
//     return this._model;
//   }

//   addDamage(damage: string) {
//     this.damages.push(damage);
//   }
// }

// class EuroTruck extends Vehicle {
//   setDamageee() {}
//   setRun(km: number) {
//     this.run = km / 0.62;
//   }
// }

// new Vehicle().make = "d";
// new Vehicle();
/////////////////////////////////////////////
// class Product {
//   public id: number;
//   public name: string;
//   public price: number;
//   constructor(id: number, name: string, price: number) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }
// }
// class DeliveryDate {
//   public date: Date;
//   constructor(date: Date) {
//     this.date = date;
//   }
// }

// class DeliveryToHome extends DeliveryDate {
//   public address: string;
//   constructor(date: Date, address: string) {
//     super(date);
//     this.address = address;
//   }
// }
// class DeliveryToStore extends DeliveryDate {
//   public idStore: number;
//   constructor(idStore: number) {
//     super(new Date());
//     this.idStore = idStore;
//   }
// }

// type DeliveryOptions = DeliveryToHome | DeliveryToStore;

// class Cart {
//   private products: Product[] = [];
//   private address: DeliveryOptions;

//   public addProduct(product: Product): void {
//     this.products.push(product);
//   }

//   public removeProduct(id: number): void {
//     this.products.forEach((el: Product, index) => {
//       if (el.id == id) {
//         this.products.splice(index, 1);
//       }
//     });
//   }

//   public countSum(): number {
//     let count = 0;
//     this.products.forEach((el) => {
//       count += el.price;
//     });
//     return count;
//   }

//   public setAddress(address: DeliveryOptions): void {
//     this.address = address;
//   }

//   public checkout(): boolean {
//     if (this.address && this.products.length) {
//       return true;
//     }
//     return false;
//   }
// }

// const cart = new Cart();
// cart.addProduct(new Product(1, "Печенье", 40));
// cart.addProduct(new Product(2, "Торт", 70));
// cart.removeProduct(1);
// cart.setAddress(new DeliveryToHome(new Date(), "E"));
// console.log(cart.countSum());
// console.log(cart.checkout());
// console.log(cart);
