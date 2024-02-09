let expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertaiment" },
];

const uniqueUtilities = expenses.filter((expenses) => expenses.category === "Utilities")

console.log(uniqueUtilities);
