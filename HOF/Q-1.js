const ordersList = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Mobile Charger", price: 1500 },
  { name: "Laptop Charger", price: 10500 },
];

let totalOrder = 0;
ordersList.forEach((obj) => (totalOrder = totalOrder + obj.price));

console.log(`The total price is Rs.${totalOrder}`);
