let expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertaiment" },
];

const expWithTax = expenses.map((expenses) => {
  const tax = expenses.amount * 0.1;
  return { ...expenses, tax: tax };
});

console.log(expWithTax);
