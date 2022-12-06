"use strict";

/*
let hasDriversLicense = false;
let testPassed = true;

if (testPassed) hasDriversLicense = true;
if (hasDriversLicense) console.log("You can drive");
*/

// Functions
/*
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry("India", 1200, "Delhi"));
console.log(describeCountry("USA", 500, "Washington"));
console.log(describeCountry("France", 40, "Paris"));
*/

// Function Declations
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.log(percentageOfWorld1(1441));

// Function Expression

const percentageOfWorld2 = function name(population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld2(1200));

//  Arrow Function

const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(percentageOfWorld3(500));
*/

/*

// CODING CHALLENGE 1
const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

const dolphinAverage = calcAverage(85, 54, 41);
const koalaAverage = calcAverage(23, 34, 27);

function checkWinner(dolphinAverage, koalaAverage) {
  if (dolphinAverage > koalaAverage && dolphinAverage >= 2 * koalaAverage) {
    console.log(`Dolphins win (${dolphinAverage} vs. ${koalaAverage})`);
  } else if (
    koalaAverage > dolphinAverage &&
    koalaAverage >= 2 * dolphinAverage
  ) {
    console.log(`Koalas win (${koalaAverage} vs. ${dolphinAverage})`);
  } else {
    console.log("Its a Draw");
  }
}

checkWinner(dolphinAverage, koalaAverage);

const checkWinner2 = function name(dolphinAverage, koalaAverage) {
  if (dolphinAverage >= 2 * koalaAverage) {
    console.log(`Dolphins win (${dolphinAverage} vs. ${koalaAverage})`);
  } else if (koalaAverage >= 2 * dolphinAverage) {
    console.log(`Koalas win (${koalaAverage} vs. ${dolphinAverage})`);
  } else {
    console.log("No one wins");
  }
};

checkWinner2(1, 5);

*/

/*
// Function Calling Other Functions

const percentageOfWorld1 = function name(population) {
  return (population / 7900) * 100;
};

const describePopulation = function name(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage} of the world`;
};

console.log(describePopulation("India", 1200));
*/

//    ARRAYS

/*
const populations = [152, 1500, 1200, 200];
console.log(populations);
console.log(populations.length === 4);

const percentageOfWorld1 = function name(population) {
  return (population / 7900) * 100;
};

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
];

console.log(percentages);
*/

//  CODING CHALLENGE
/*
const calcTip = function name(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips);
console.log(total);
*/

// ARRAY ASSIGNMENT

/*
const neighbours = [
  "Bangladesh",
  "Pakistan",
  "China",
  "Bhutan",
  "Nepal",
  "Myanmar",
  "Thailand",
  "AFganisthan",
];

neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("Present");
} else {
  console.log("Probably not a central European Country");
}

neighbours[neighbours.indexOf("Pakistan")] = "Pakistan Bhai";
console.log(neighbours);
*/

//  OBJECT ASSIGNMENT
/*
const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1200,
  neighbours: ["Pakistan", "Bangladesh", "Nepal", "Myanmar", "Bhutan"],
};

console.log(myCountry);
*/

// LECTURE: Dot vs. Bracket Notation
/*
const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1200,
  neighbours: ["Pakistan", "Bangladesh", "Nepal", "Myanmar", "Bhutan"],
};

const ans = `${myCountry.country} has ${myCountry.population} millions ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`;

console.log(ans);
*/

// LECTURE OBJECT METHODS
/*
const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 1200,
  neighbours: ["Pakistan", "Bangladesh", "Nepal", "Myanmar", "Bhutan"],
  describe: function () {
    return `${this.country} has ${this.population} millions ${this.language}-speaking people, ${this.neighbours.length} countries and a capital called ${this.capital}. `;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry);
*/

// CODING CHALLENGE #
/*
const John = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

const Mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
John.calcBMI();
Mark.calcBMI();

console.log(John.BMI);
console.log(Mark.BMI);

if (Mark.BMI > John.BMI) {
  const ans = `${Mark.fullName}'s BMI(${Mark.BMI}) is higher than ${John.fullName}'s (${John.BMI})`;
  console.log(ans);
} else {
  const ans = `${John.fullName}'s BMI(${John.BMI}) is higher than ${Mark.fullName}'s (${Mark.BMI})`;
  console.log(ans);
}
*/

// LECTURE: Iteration: The for Loop
/*
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting.`);
}
*/

//LECTURE: Looping Arrays, Breaking and Continuing
/*
const populations = [152, 1500, 1200, 200];
let percentages2 = [];
const percentageOfWorld1 = function name(population) {
  return (population / 7900) * 100;
};
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);
*/

// LECTURE: Looping Backwards and Loops in Loops
/*
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`neighbour: ${listOfNeighbours[i][j]}`);
  }
}
*/

//LECTURE: The while Loop
/*
const populations = [152, 1500, 1200, 200];
let percentages3 = [];
const percentageOfWorld1 = function name(population) {
  return (population / 7900) * 100;
};

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);
*/

//Coding Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function name(bill) {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}

console.log(tips);
console.log(totals);

const calcAverage = function name(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum / arr.length;
};

const averageTotal = calcAverage(totals);
console.log(averageTotal);
