let expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertaiment" },
];

const totalExp = expenses.reduce((a, expenses) => a + expenses.amount, 0);
console.log(`Total Expenses is `, totalExp);
