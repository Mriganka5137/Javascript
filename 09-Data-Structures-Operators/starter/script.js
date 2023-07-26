'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
/*
const arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a, b, c);

[a, b, c] = [c, a, b]; //-------> Way to swap values
*/
/*
const [starter, mainCourse] = restaurant.order(1, 2);
console.log(starter, mainCourse);

// Nested Destructuring
const arr = [1, 4, [2, 3]];
const [a, , [b, c]] = arr;
console.log(a, b, c);

//Default values
const arr2 = [5137, 5133];
const [a1 = 1, b2 = 1, c3 = 1] = arr2;
console.log(a1, b2, c3);
*/

/*

restaurant.orderPizza('Chicken', 'Chesse', 'Pepper');

// Destructuring Objects with REST Operator
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//  Passing Parameters in function with REST operator
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(2, 3, 4, 5, 6, 7, 8);
add(2, 3, 4, 5, 6, 7, 8, 9, 10);

const x = [1, 2, 3];
add(...x);

// Spread Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

const newArr = [1, 2, ...arr];
// console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Mriganka';
const letters = [...str, ' ', 'G.'];
// console.log(letters);
// console.log(...str);
// console.log(`${...str} Gogoi`);

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// const ingredients = [
//   prompt('Lets make pasta: Ingredient 1?'),
//   prompt('ingredient 2?'),
//   prompt('ingredient 3?'),
// ];
restaurant.orderPasta(...ingredients);

// Spread Operator
const menus = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(...menus);
/*
restaurant.orderDelivery({
  firstName: 'Mriganka',
  middleName: 'Mousum',
  surname: 'Gogoi',
  rollNo: 5137,
  homeTown: 'Golaghat',
});
*/

// Nested Destructuring
// const { openingHours } = restaurant;
// console.log(openingHours);
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// console.log(fri);

// Destructuring Objects
/*
const {
  menu = [],
  name: restaurantName,
  openingHours: openTime = 12,
  locationArea: area,
  categories: cuisine,
} = restaurant;
// console.log(restaurantName, openTime, area, cuisine, menu);

let a = 5137;
let b = 5132;
const obj = {
  a: 15,
  b: 54,
};

({ a, b } = obj);
// console.log(a, b);
*/

// #########################################################################################
// SHORT CIRCUITING && AND ||

/*
//  In || , if the first value is truthy, then it immediately returns that . Else the second value
console.log(5137 || 'Mriganka'); //--------->o/p:  5137
console.log(0 || 'Hello'); //-------------> o/p: "Hello"  ----> Because 0 is Falsy value
console.log(true || 'YES'); //----- true
console.log(undefined || undefined); //----------  undefined in 2nd opearnd
console.log(undefined || null); //----------> null
console.log(undefined || 0 || null || false || 'Hello' || 5137); //---------> 'Hello'

//use case of short-circuiting
restaurant.noOfGuest = 25;
const guest1 = restaurant.noOfGuest ? restaurant.noOfGuest : 10;
console.log(guest1);

const guest2 = restaurant.noOfGuest || 13;
console.log(guest2);

console.log('-----------AND-----------------');
// -------- AND && operator
// Only checks the second operand if the first one is true. And return the second.
console.log('Mriganka' && null); //------ null
console.log(undefined && 'Mriganka'); //-------- undefined
console.log(5137 && 'Mriganka'); //----------Mriganka

//Real Use case of && short circuiting
if (restaurant.orderPizza) {
  //------- Executes the if block only if the method exists
  restaurant.orderPizza('Chicken', 'Salami');
}
// We can optionally use short circuiting && instead of if block
restaurant.orderPizza && restaurant.orderPizza('Macroni', 'Chesse', 'Chicken');



// #####################################################################
// ----------------NULLISH COALESCING OPERATOR-------------------
restaurant.noOfGuest = 0;
// const guest = restaurant.noOfGuest || 13;------> 13, because 0 is Falsy
const guest = restaurant.noOfGuest ?? 13; // ------- 0 : because it takes only nullish value into consideration i.e. NULL, undefined
console.log(guest);
*/

// ####################################################################
// ---------------------LOGICAL ASSIGNMENT OPEARTOR -------------------

// const rest1 = {
//   name: 'Jiva',
//   noOfGuest: 0,
// };

// const rest2 = {
//   name: 'GreenWood',
//   owner: 'mriganka gogoi',
// };

// OR Assignment opeartor
// rest1.noOfGuest = rest1.noOfGuest || 10;
// rest2.noOfGuest = rest2.noOfGuest || 10;
// rest1.noOfGuest ||= 10;
// rest2.noOfGuest ||= 10;

// Nullish Assignment Opeartor  ---- If the first operand is nullish---- null or undefined
// rest1.noOfGuest ??= 10;
// rest2.noOfGuest ??= 10;

// // AND && ASSIGNMENT OPEARTOR
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// const weekdays = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

// const openingHours = {
//   [weekdays[4]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[5]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[6]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const restaurant = {
//   name: 'Classico Italiano',
//   locationArea: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ firstName, middleName, surname, rollNo, homeTown }) {
//     console.log(
//       ` I am ${firstName} ${middleName} ${surname} and my rollNo is ${rollNo} and my home town is ${homeTown}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   },

//   openingHours,
// };

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// for (const item of menu) {
//   console.log(item);
// }
// for (const [i, item] of menu.entries()) {
//   console.log(`${i + 1} --- ${item}`);
// }

// // Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// // Optional chaining solution
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours?.thurs?.open);
// console.log(restaurant.openingHours?.thurs?.now);

// // on Objects
// const days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];
// for (const day of days) {
//   console.log(day);
//   const openTime = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}day we open at ${openTime}`);
// }

// //on methods
// restaurant.orderPasta?.('Risoto', 'Pepper', 'Olive');
// restaurant.orderFood?.('Risoto', 'Pepper', 'Olive') ??
//   console.log('Method does not exist');

// //on arrays
// const users = [{ name: 'Mriganka', email: 'mrigankagogoi@gmail.com' }];
// // const users = [];
// const op = users[0]?.name ?? 'User array empty';
// console.log(op);

// Looping in Objects
//1. Looping through Object Keys
// const keys = Object.keys(restaurant);
// console.log(keys);

// const value = Object.values(restaurant);
// console.log(value);

// const entry = Object.entries(restaurant);
// console.log(entry);

// const arr = ['Mriganka', 'Mousum', 'Gogoi'];
// console.log(Object.entries(arr));
// // console.log(arr.entries());
// console.log(Object.keys(arr));
// console.log(Object.values(arr));

// Object Looping
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [keys, { open, close }] of entries) {
//   console.log(
//     `On ${keys}, we open at ${open} hours and close at ${close} hours.`
//   );
// }

// Set--- For Unique values to be stored
// const arr = ['Pizza', 'Icecream', 'Pizza', 'Chicken', 'Mutton', 'Icecream'];
// const foodSet = new Set(arr);
// console.log(foodSet);
// console.log(foodSet.has('Pork'));
// console.log(foodSet.has('Icecream'));
// console.log(foodSet.size);
// console.log(foodSet.add('Pork'));
// console.log(foodSet.add('Pork'));
// console.log(foodSet.delete('Chicken'));
// console.log(foodSet.clear);

// const name = new Set('MrigankaMousumGogoi');
// // console.log(name);
// // console.log(name.has('l'));
// // console.log(name.size);
// const nameArr = [...new Set('Hello')];
// console.log(nameArr);

// Map : used to store key value pairs just like objects. But the advantage of Map is that it can take any type of key.
// const rest = new Map();
// rest.set('name', 'Starbucks');
// rest.set(1, 'GS Road');
// rest.set(2, 'Brahmaputra Riverside');
// rest
//   .set(true, 'We are Open :D')
//   .set(false, 'We are close ;(')
//   .set('open', 10)
//   .set('close', 23);
// rest.set(weekdays, weekdays.length);
// rest.set([1, 2], 'Test');
// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest.get(weekdays));

// console.log(rest.get(true));
// console.log(rest.get('name'));
// console.log(rest);
// console.log(rest.size);
// const openHours = new Map(Object.entries(openingHours));
// // console.log(openHours);

// const question = new Map([
//   ['Question', 'What is the best Programming Language?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['Correct Answer', 3],
//   [true, 'Correct 🎊'],
//   [false, 'Wrong 🥲'],
// ]);

// // console.log(question);
// console.log(question.get('Question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const userChoice = Number(prompt('Your Answer'));
// console.log(question.get(userChoice === question.get('Correct Answer')));

//########################################################################################################################
//########################################################################################################################
//########################################################################################################################

// STRINGS
// const myName = 'Mriganka Mousum Gogoi';
// console.log(myName.indexOf('M'));
// console.log(myName.lastIndexOf('M'));
// const firstName = myName.slice(0, myName.indexOf(' '));
// console.log(firstName);
// const lastName = myName.slice(myName.lastIndexOf(' ') + 1);
// console.log(lastName);

// console.log(myName.slice(-5));

// const checkMiddleSeat = seat => {
//   // B and E are middle seats
//   const seatChar = seat.slice(-1);
//   if (seatChar === 'B' || seatChar === 'E') console.log('You Got unlucky 😭');
//   else console.log('You are lucky indeed 🤑');
// };

// checkMiddleSeat('28A');
// checkMiddleSeat('28B');
// checkMiddleSeat('24E');
// checkMiddleSeat('28C');

// STRINGS 2
// const pessenger = 'mriGanka';
// console.log(pessenger.toUpperCase());
// console.log(pessenger.toLowerCase());

// const pessengerLower = pessenger.toLowerCase();
// const pessengerCorrect =
//   pessengerLower[0].toUpperCase() + pessengerLower.slice(1);
// console.log(pessengerCorrect);

// Function to compare emails
// const email = 'mrigankagogoi5137@gmail.com';
// const logInEmain = '   MrigAnkagogoi5137@GMAIL.com  \n';

// const correctEmail = logInEmain.toLowerCase().trim();
// console.log(email === correctEmail, correctEmail);

// Replace
// const announcement = 'All the pessengers please come to door 23, door 23 !';
// console.log(announcement.replaceAll('door', 'gate'));

// const price = '250,69£';
// console.log(price.replace(',', '.').replace('£', '$'));

// Booleans methods to check
/*
const aeroplane = 'Airbus A320neo';
console.log(aeroplane.includes('A320'));
console.log(aeroplane.includes('A322'));
console.log(aeroplane.startsWith('A3'));
console.log(aeroplane.endsWith('neo'));

if (aeroplane.startsWith('Airbus') && aeroplane.endsWith('neo')) {
  console.log('Parts of the new Airbus family');
}
*/

//  PRACTICE
/*
const checkBaggage = items => {
  const baggage = items.toLowerCase();
  if (baggage.includes('gun') || baggage.includes('knife')) {
    console.log('You are not allowed to board');
  } else {
    console.log('Welcome on Board');
  }
};

checkBaggage('I have a Knife and some snacks');
checkBaggage('I got a gun for my protection');
checkBaggage('I have food in my bag');
*/

// SPLIT and JOIN
/*
let name = 'Mriganka+Mousum+Gogoi';
const [firstName, middleName, LastName] = name.split('+');
const newName = ['Mr.', firstName, middleName, LastName.toUpperCase()].join(
  ' '
);
console.log(newName);
*/

/*
function capitalizeNames(name) {
  const names = name.split(' ');
  console.log(names);
  const newName = [];
  for (const n of names) {
    // newName.push(n[0].toUpperCase() + n.slice(1));
    newName.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(newName.join(' '));
}

capitalizeNames('Mriganka mousum gogoi');
capitalizeNames('kasturi kangkana saikia');
*/

// Padding
/*
const myName = 'Mriganka Mousum Gogoi';
console.log(myName.padStart(30, '-').padEnd(40, '-'));
console.log('Kasturi'.padStart(30, '-').padEnd(40, '-'));
*/
/*
const maskCreditCard = number => {
  // first convert the number to string
  const num = number + '';
  // const num = String(number);
  const lastFour = num.slice(-4);
  console.log(lastFour.padStart(num.length, 'x'));
};

maskCreditCard(56789522364);
maskCreditCard(567895584435);
maskCreditCard(56789558);
*/

// bad Weather Message Repeat Function
const message = 'bad Weather! All flights are delayed............ ';
console.log(message.repeat(12));

const planesInLine = number => {
  console.log(
    `Bad weather.... There are ${number} planes waiting in line ${'✈️'.repeat(
      number
    )}`
  );
};

planesInLine(2);
planesInLine(10);
planesInLine(5);
planesInLine(3);
