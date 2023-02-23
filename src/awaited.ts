type A = Awaited<Promise<string>>;
type B = Awaited<Promise<Promise<string>>>;
interface IMenu {
  name: string;
  url: string;
}
async function getMenu(): Promise<IMenu[]> {
  return [{ name: "Erkin", url: "sdf" }];
}
type R = Awaited<ReturnType<typeof getMenu>>;

async function getArray<T>(x: T): Promise<Awaited<T>[]> {
  return [await x];
}
async function getArray2<T>(x: T): Promise<T[]> {
  return [await x];
}
