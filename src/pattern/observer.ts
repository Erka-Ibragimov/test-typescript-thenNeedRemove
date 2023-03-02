interface Observer {
  update(subject: Subject): void;
}
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class Lead {
  constructor(public name: string, public phone: string) {}
}

class NewLead implements Subject {
  private observers: Observer[] = [];
  public state: Lead;

  attach(observer: Observer): void {
    if (this.observers.includes(observer)) {
      return;
    }
    this.observers.push(observer);
  }
  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex == -1) {
      return;
    }
    this.observers.splice(observerIndex, 1);
  }
  notify(): void {
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}

class NotificationService implements Observer {
  update(subject: Subject): void {
    console.log("NotificationService Получил уведомление");
    console.log(subject);
  }
}

class LeadService implements Observer {
  update(subject: Subject): void {
    console.log("LeadService Получил уведомление");
    console.log(subject);
  }
}

const subject = new NewLead();
subject.state = new Lead("Erkin", "998905939927");
const notSer = new NotificationService();
const ledSer = new LeadService();
subject.attach(notSer);
subject.attach(ledSer);
subject.notify();
subject.detach(notSer);
subject.notify();
