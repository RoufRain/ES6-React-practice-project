const price = [100, 500, 1100, 2000, 2900];
const totalPrice = price.reduce((sum, n) => {
  return sum + n;
}, 0);
console.log("total price:", totalPrice);
const topPrice = price.filter((p) => p > 1000);
console.log("top price", topPrice);
const convertDollar = price.map((p) => p / 110);
console.log("price in $:", convertDollar);
