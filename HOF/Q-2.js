function generateRandomNumber() {
  let number = Math.floor(Math.random() * 10);
  console.log(number);
}
function printwithTime() {
  generateRandomNumber();
  setInterval(generateRandomNumber, 2000);
}
printwithTime();
