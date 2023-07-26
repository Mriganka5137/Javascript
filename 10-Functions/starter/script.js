'use strict';

//Default Value
const bookings = [];

function createBooking(
  flighNumber,
  numOfPassenger = 1,
  price = 2000 * numOfPassenger
) {
  const booking = {
    flighNumber,
    numOfPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
}

// createBooking('ALB21', 200, 6000);
// createBooking('ALB22', 2);
// createBooking('ALB23', undefined, 4000);

// Passing Primitive value and Reference value to the function
const mriganka = {
  name: 'Mriganka Mousum Gogoi',
  aadhar: 719079551847,
};

const flight = 'AS05';

const checkIn = function (flight, passanger) {
  flight = 'AS07';
  passanger.name = 'Mr. ' + passanger.name;

  if (passanger.aadhar === 719079551847) {
    alert('Please Check In');
  } else {
    alert('verify your aadhar again');
  }
};

// checkIn(flight, mriganka);
// console.log(flight);
// console.log(mriganka);

// Higher Order Function
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const toUpperFirst = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// This is the Higher Order Function --> Takes another function as parameter
const transformer = function (str, fn) {
  console.log(`Original value: ${str}`);
  console.log(`Modified value: ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};

transformer('Javascript is the best Programming Language', toUpperFirst);
transformer('Javascript is the best Programming Language', oneWord);
*/

// *****************************************************************************************************
// *****************************************************************************************************
// *****************************************************************************************************

//FUNCTIONS RETURNING FUNCTIONS
/*
//Written using arrow function
const greeting = str => str2 => {
  console.log(`${str} ${str2}`);
};

//Written using  function expression
const greeting2 = function (greetings) {
  return function (name) {
    console.log(`${greetings} ${name}`);
  };
};

const greet = greeting2('Hi');
greet('Mriganka');
*/

// *****************************************************************************************************
// *****************************************************************************************************
// *****************************************************************************************************
//Call Method

const vistara = {
  airline: 'Vistara',
  iataCode: 'VIS',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum} `
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: name });
  },
};

// vistara.book(256, 'Mriganka');
// vistara.book(256, 'kasturi');

const airIndia = {
  airline: 'Air India',
  iataCode: 'AI',
  bookings: [],
};

const book = vistara.book;

//Does not work
// book(57, 'John Smith');------------> this value is undefined here

//A function is just an object and has its own methods
// book.call(vistara, 57, 'John Doe');
// book.call(airIndia, 57, 'John Doe');
// console.log(airIndia);

const airAsia = {
  airline: 'Air Asia',
  iataCode: 'AS',
  bookings: [],
};

// book.call(airAsia, 89, 'Protikhya Gondhia');
// console.log(airAsia);

// // APPLY
// const flightData = [99, 'Nakshatra Wary'];
// book.apply(airIndia, flightData);
// console.log(airIndia);
// book.call(vistara, ...flightData);
// console.log(vistara);

// *****************************************************************************************************
// *****************************************************************************************************
// *****************************************************************************************************
// BIND Method
//TYPE 1

/*
const airAsiaBook = book.bind(airAsia);
airAsiaBook(789, 'Sam Smith');

const airIndiaBook = book.bind(airIndia);
airIndiaBook(567, 'Mriganka Gogoi');

const vistaraBook = book.bind(vistara);
vistaraBook(45, 'Kasturi Kangkana Saikia');

// TYPE 2
// Already providing the flight number ---which is a argument of the book function
const airAsiaBook5137 = book.bind(airAsia, 5137);
airAsiaBook5137('mriganka gogoi');
airAsiaBook5137('Kasturi gogoi');

const airIndiaBook13 = book.bind(airIndia, 13);
airIndiaBook13('Tezindra Nath Gogoi');
airIndiaBook13('Labonya  Gogoi');

// console.log(airAsia);
// console.log(airIndia);
// console.log(vistara);

//TYPE 3 ---- Used in EventListener
vistara.planes = 56;
vistara.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// const buyButton = document
//   .querySelector('.buy')
//   .addEventListener('click', vistara.buyPlanes);-----------> Here in the callback function visatara.buyPlanes --- the "THIS" points to the button

const buyButton = document
  .querySelector('.buy')
  .addEventListener('click', vistara.buyPlanes.bind(vistara));
*/

// TYPE 4 ------ Partial Function
/*
const addTax = (rate, value) => value + rate * value;
console.log(addTax(0.25, 100));

const addVAT = addTax.bind(null, 0.4); // -------Null as first argument because there is no need of any object
console.log(addVAT(100));

// One function Returning another

const tax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const vat = tax(0.25);
console.log(vat(100));
*/

// Immediately Invoked Function Expression
// IIFE
/*

IIFE stands for Immediately Invoked Function Expression. It is a JavaScript
 design pattern that involves defining and
 executing a function immediately after its declaration. Here's an example:
*/
(function () {
  console.log('I am IIFE, I am born and run here once only');
})();
