let originalNumbers = [2, 5, 8, 10, 3];
let newArr = [];
originalNumbers.forEach((element) => {
  if (element % 2 == 0) {
    newArr.push(element);
  }
});

console.log(newArr);