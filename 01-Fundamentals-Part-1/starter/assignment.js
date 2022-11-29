/*
Values and variables
const country = "India";
const continent = "Asia";
let population = 1500;

console.log(country);
console.log(continent);
console.log(population);
*/

/*
// Data Types
let rollNo = 5137;
let javascriptIsFun = true;
let firstName = "Mriganka";

console.log(rollNo);
console.log(typeof rollNo);

console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

console.log(firstName);
console.log(typeof firstName);

//Dynamically typed
javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

// Undefined
let done;
console.log(done);
console.log(typeof done);

// BUG IN JS
let bug = null;
console.log(typeof bug); // It outputs typeof null as OBJECT TYPE
*/

/*

//Assignment Data Types
const isIsland = false;
let language = "Assamese";

console.log(typeof isIsland);
console.log(typeof language);

// Math Operators
const now = 2022;
const myAge = now - 1998;
const herAge = now - 1999;

console.log(myAge);
console.log(herAge);

// Assignment Opeartors
let x = 12;
x = 15;
x += 10;
x++;
x *= 4;
x--;
console.log(x);

// Comparasion Opeartor
console.log(myAge > herAge);
console.log(myAge >= herAge * 2);

Basic OperatorsAssignment
console.log(population / 2 + " Millions");
population += 1;
console.log(population);

const populationFinland = 6;
console.log(population > populationFinland);
console.log(population < 33);
*/
/*
let description =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " million people speak " +
  language;
console.log(description);
*/

// Coding Challenge 1

/*
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

let bmiMark = massMark / heightMark ** 2;
console.log(bmiMark);

let bmiJohn = massJohn / heightJohn ** 2;
console.log(bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// Coding Challenge 2

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

/*
// Strings and Template Literals
const firstName = "Mriganka";
const job = "FUll Stack Developer";
const birthYear = 1998;
const presentYear = 2022;

const mriganka = `Hi I'm ${firstName}, a ${
  presentYear - birthYear
} year old ${job}`;
console.log(mriganka);

*/

// Conditionals If-else Statements
/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah can start driving after ${yearsLeft} years`);
}

*/
const a = "21";

console.log(a + 5);
console.log(a - 5);
console.log(a * 5);
console.log(Number(a) + 5);

console.log("I am " + 21 + " years old");
