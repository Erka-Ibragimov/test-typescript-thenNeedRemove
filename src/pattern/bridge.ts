interface IProvider {
  sendMessage(message: string): void;
  connect(config: any): void;
  disconnect(): void;
}

class TelegramProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconnect(): void {
    console.log("disconnected TG");
  }
}

class WhatsupProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }
  connect(config: string): void {
    console.log(config);
  }
  disconnect(): void {
    console.log("disconnected WHAT");
  }
}

class NotificationSender {
  constructor(protected provider: IProvider) {}

  send() {
    this.provider.connect("connect");
    this.provider.sendMessage("message");
    this.provider.disconnect();
  }
}

class DelayNotificationSender extends NotificationSender {
  constructor(provider: IProvider) {
    super(provider);
  }
  sendDelayed() {
    this.provider.disconnect();
  }
}

const sender = new NotificationSender(new TelegramProvider());
sender.send();
const sender2 = new NotificationSender(new WhatsupProvider());
sender2.send();
