// const readline = require("readline");
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
//
// rl.question("Enter temperature in Fahrenheit: ", function (fahrenheit) {
//   const celsius = ((fahrenheit - 32) * 5) / 9;
//
//   console.log("Celsius:", celsius.toFixed(2));
//
//   rl.close();
// });
// const celsius = prompt("Enter temperature in Celsius:");
// const fahrenheit = (celsius * 9) / 5 + 32;
//
// console.log("Fahrenheit:", fahrenheit);
const celsius = 2;

if (typeof celsius !== "number") {
  console.log("enter valid number");
} else {
  const fahrenheit = celsius * (9 / 5) + 32;
  console.log("Temperature in fahrenheit:", fahrenheit);
}
