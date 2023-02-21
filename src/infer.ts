// function runTransaction(transaction: { fromTo: [string, string] }) {
//   console.log();
// }
// const transaction: GetFristArg<typeof runTransaction> = {
//   fromTo: ["1", "2"],
// };
// runTransaction(transaction);
// type GetFristArg<T> = T extends (first: infer First, ...args: any[]) => any
//   ? First
//   : never;
