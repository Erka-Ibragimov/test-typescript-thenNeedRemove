function Uni(name: string): any {
  console.log(`Инициализация: ${name}`);
  return () => {
    console.log(`Вызов: ${name}`);
  };
}
@Uni("Класс")
class MyClass {
  @Uni("Свойство 3")
  props3?: any;
  @Uni("Свойство 1")
  props?: any;

  @Uni("Свойство static")
  static props2?: any;

  @Uni("Метод static")
  static method2(@Uni("Параметр метода static") _: any) {}

  @Uni("Метод")
  method(@Uni("Параметр метода") _: any) {}

  constructor(@Uni("Парамет конструктора") _: any) {}
}
