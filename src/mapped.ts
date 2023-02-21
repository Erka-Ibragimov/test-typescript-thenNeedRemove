// type Modifier = "read" | "update" | "create";
// type UserRoles = {
//   customers: Modifier;
//   projects?: Modifier;
//   adminPanel?: Modifier;
// };
// type ModifierToAccess<Type> = {
//   +readonly [Property in keyof Type as Exclude<
//     `canAccess${string & Property}`,
//     "canAccessadminPanel"
//   >]-?: boolean;
// };
// type UserAccess2 = ModifierToAccess<UserRoles>;

// type UserAccess1 = {
//   customers: boolean;
//   projects?: boolean;
//   adminPanel?: boolean;
// };
//////////////////////////////////////////////////////////////////
// interface IFrom {
//   name: string;
//   password: string;
// }
// const form: IFrom = {
//   name: "Erkin",
//   password: "123",
// };
// type Validation<T> = {
//   [K in keyof T]:
//     | {
//         isValid: true;
//       }
//     | {
//         isValid: false;
//         errorMessage: string;
//       };
// };
// const formValidation: Validation<IFrom> = {
//   name: { isValid: true },
//   password: { isValid: false, errorMessage: "sdf" },
// };
