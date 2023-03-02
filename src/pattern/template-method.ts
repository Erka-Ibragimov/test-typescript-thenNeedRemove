class Form {
  constructor(public name: string) {}
}

abstract class SaveForm<T> {
  public save(form: Form) {
    const res = this.fill(form);
    this.log(res);
    this.send(res);
  }

  protected abstract fill(form: Form): T;
  protected log(data: T): void {
    console.log(`Я логирую ${data}`);
  }
  protected abstract send(data: T): void;
}

class FirstApi extends SaveForm<string> {
  protected fill(form: Form): string {
    return form.name;
  }
  protected send(data: string): void {
    console.log(`Отправляю ${data}`);
  }
}

class FirstApi2 extends SaveForm<number> {
  protected fill(form: Form): number {
    return 1;
  }
  protected send(data: number): void {
    console.log(`Отправляю ${data}`);
  }
}

const form1 = new FirstApi();
form1.save(new Form("Erkin"));
const form2 = new FirstApi2();
form2.save(new Form("Guga"));
