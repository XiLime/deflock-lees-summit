export type ExpenseStatus = "paid" | "pending";

export interface Expense {
  date: string;
  description: string;
  amount: number;
  status: ExpenseStatus;
}

export const expenses: Expense[] = [
  {
    date: "2026-09-03",
    description: "Staff research time — ARPA/federal relief funding request (Request 2026.284)",
    amount: 137.60,
    status: "pending"
  }
];

export const totalSpent = expenses
  .filter((item) => item.status === "paid")
  .reduce((sum, item) => sum + item.amount, 0);

export const totalPending = expenses
  .filter((item) => item.status === "pending")
  .reduce((sum, item) => sum + item.amount, 0);
