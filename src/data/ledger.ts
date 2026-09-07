export const expenses: { date: string; description: string; amount: number }[] = [];

export const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);
