const add = (n1, n2) => {
  return n1 + n2;
};
const subtract = (n1, n2) => {
  return n1 - n2;
};
const multiply = (n1, n2) => {
  return n1 * n2;
};
const divide = (n1, n2) => {
  if (n2 == 0) {
    console.log("cannot divide by zero");
  } else {
    return n1 / n2;
  }
};
const calculate = (num1, num2, operation) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please enter valid numbers";
  } else {
    return operation(num1, num2);
  }
};
console.log(calculate(10, 5, multiply));
