// Falsy Values in JS:
// There are 5 falsy values in JS: 0, undefined, null, NaN,''

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));

let money;
money = 0;
if (money) {
  console.log("Spend it wisely");
} else {
  console.log("Get a job buddy");
}


*/

//EQUALITY Operator
// === STRICTLY EQUAL TO : does not perform type coercion
// == LOOSELY EQUAL TO : perform type coercion
/*
const numNeighbours = Number(
  prompt("How many neighbouring countries does your contries have ?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
}

*/

// Logical Operators

/*
const myCountry = "India";
const isIsland = false;
const language = "English";
const population = 50;

if (language === "English" && population === 50 && isIsland === false) {
  console.log("You should live in " + myCountry);
} else {
  console.log("Sorry baba " + myCountry + " does not meet your criteria");
}


*/

// Coding Challenge #3

/*
const d1 = 97;
const d2 = 112;
const d3 = 101;
const dolphinAverage = (d1 + d2 + d3) / 3;

const k1 = 109;
const k2 = 95;
const k3 = 123;
const koalaAverage = (k1 + k2 + k3) / 3;

if (dolphinAverage > 100 && dolphinAverage > koalaAverage) {
  console.log("Team Dolphin is the winner");
} else if (koalaAverage > 100 && koalaAverage > dolphinAverage) {
  console.log("Team Koala is the winner");
} else if (
  koalaAverage === dolphinAverage &&
  koalaAverage >= 100 &&
  dolphinAverage >= 100
) {
  console.log("The match ended in DRAW");
} else {
  console.log("No Teams win the trophy");
}
*/

//  Switch Case statements in JS

/*
const day = "friday";

switch (day) {
  case "monday": // day === "monday"  strict equality
    console.log("solve DSA problems");
    break;
  case "tuesday":
    console.log("Do CP");
    break;
  case "wednesday":
    console.log("Study MERN");
    break;

  case "thursday":
  case "friday":
    console.log("AWS");
    break;
  default:
    console.log("if free, start coding");
    break;
}*/

/*
const language = "mandarin";

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spainish":
    console.log("2nd place in number of native speakers");
    break;

  case "english":
    console.log("3rd place");
    break;

  case "hindi":
    console.log("Number 4");
    break;

  case "arabic":
    console.log("5th most spoken language");
    break;

  default:
    console.log("Great language too :D");
    break;
}

*/

//  TERNARY OPEARTOR
/*
const population = 102;

const value = population > 33 ? "above" : "below";

console.log("India's population is " + value + " average");
console.log(
  `India's population is ${population > 33 ? "above" : "below"} average`
);

*/

// CODING CHALLENGE 4
const bill = 40;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value is ${
    bill + tip
  }`
);
