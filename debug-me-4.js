const weight = 89;
const height = 1.97;
const BMI = weight / (height * height);

let outcome;

console.log("Your BMI is: " + BMI);

if (BMI > 25) {
  outcome = "Depending on your build, you might be overweight";
} else if (BMI < 18) {
  outcome = "Depending on your build, you might be underweight";
} else {
  outcome = "Looks like your height / weight ratio is pretty healthy";
}

console.log(outcome);