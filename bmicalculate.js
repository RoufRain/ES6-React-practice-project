let weight = 70;
let heightInch = 64;
if (typeof weight && typeof heightInch !== "number") {
  console.log("enter valid number as input");
} else {
  let heightMeter = heightInch * 0.0254; //1inch=0.0254m
  const BMI = weight / (heightMeter * heightMeter);
  console.log("BMI is:", BMI.toFixed(2));
}
