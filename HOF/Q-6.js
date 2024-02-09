let expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertaiment" },
];
function categorizeExpenses(expenses) {
  if (expenses.amount > 100) {
    return `High Expense`;
  } else {
    return `Low Expense`;
  }
}

let categorizedExpenses = expenses.map((expenses) =>
  categorizeExpenses(expenses)
);

console.log(categorizedExpenses);