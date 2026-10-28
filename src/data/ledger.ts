export type ExpenseStatus = "paid" | "pending";

export interface Expense {
  date: string;
  description: string;
  amount: number;
  status: ExpenseStatus;
}

export const expenses: Expense[] = [
  {
    date: "2026-10-01",
    description: "Staff research time — consolidated funding, procurement and forfeiture request (originally Request 2026.284, ARPA)",
    amount: 137.60,
    status: "paid"
  },
  {
    date: "2026-10-05",
    description: "LSPD redaction time (4 hrs at $16.58) and USB drive — Flock audit records (Request 2026.275)",
    amount: 71.32,
    status: "paid"
  }
];

export const totalSpent = expenses
  .filter((item) => item.status === "paid")
  .reduce((sum, item) => sum + item.amount, 0);

export const totalPending = expenses
  .filter((item) => item.status === "pending")
  .reduce((sum, item) => sum + item.amount, 0);
