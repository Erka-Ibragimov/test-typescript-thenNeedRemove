interface PaymentPersistant {
  id: number;
  sum: number;
  from: string;
  to: string;
}
type Payment = Omit<PaymentPersistant, "id">; // выкинуть не нужные ключи
type PaymentRequisits = Pick<PaymentPersistant, "id" | "from">; // берет олько что необходимо
type ExtractExample = Extract<"from" | "to" | Payment, string>;
type ExcludeExample = Exclude<"from" | "to" | Payment, string>;
