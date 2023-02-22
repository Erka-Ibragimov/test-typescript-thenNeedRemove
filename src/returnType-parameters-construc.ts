class User {
  constructor(public id: number, public name: string) {}
}
function getData(id: number) {
  return new User(id, "Erkin");
}
