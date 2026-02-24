//---for terminal user input
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
//------for browser user input
// const celsius = prompt("Enter temperature in Celsius:");
// const fahrenheit = (celsius * 9) / 5 + 32;
//
// console.log("Fahrenheit:", fahrenheit);
//normal solution
const celsius = 2;
//check input typeof
if (typeof celsius !== "number") {
  console.log("enter valid number");
} else {
  const fahrenheit = celsius * (9 / 5) + 32;
  console.log("Temperature in fahrenheit:", fahrenheit);
}
