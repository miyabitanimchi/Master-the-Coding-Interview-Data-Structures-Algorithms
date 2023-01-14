const findFactorialRecursive = (number) => {
  if (number === 1) {
    return 1; // base case
  }
  return number * findFactorialRecursive(number - 1); // recursive case
};

console.log(findFactorialRecursive(5));

const findFactorialIterative = (number) => {
  let factorial = number;
  for (let i = 1; i < number; i++) {
    factorial *= number - i;
  }
  return factorial;
};
console.log(findFactorialIterative(5));
