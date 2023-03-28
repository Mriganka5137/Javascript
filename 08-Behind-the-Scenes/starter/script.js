'use strict';
/*
// Variable Scoping and Variable look up
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName); // ------  firstName is a global variable

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    // firstName variable is first not found in the function scope... compiler looks up in the variable chain

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating new variable with same name as outer scope's variables
      const firstName = 'Gogoi'; //-------> same name of variable but is completely different variable

      // Changing a already assigned variable to a new value
      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, You are a Millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      console.log(add(5, 6));
    }
    console.log(millenial); //------> millenial variable is declared with VAR keyword ..which is function scope rather than block scope..that's why it can be accessed fro outside the block
    // console.log(add(5, 6));-----> add is defined inside the if block.. functions are block scope under strict mode
    console.log(output); //-----> value of the already assigned variable changed inside a inner block
  }

  printAge();
  return age;
}

const firstName = 'Mriganka';
calcAge(1985);
// console.log(age);---------- age variable not in the scope
// printAge();------------ printAge() function is not in the scope
*/

// ------------- HOISTING WITH VARIABLES -------------
/*
console.log(me); //variables declared with var becomes undefined  if used before declaration
console.log(job); // variables declared with 'let' is in the temporal dead zone
console.log(dob); //variables declared with 'const' is in the temporal dead zone

var me = `Mriganka`;
let job = 'Programmer';
const dob = 1998;
*/

//  ------------------ HOISTING IN FUNCTIONS ---------------------

console.log(addDecl(5, 5)); //------>Function declarations are Hoisted
// console.log(addExp(5, 5)); // -------> Function expressions are not hoisted. They are declared with let or const. So they are in the TDZ
// console.log(addArw(5, 5)); //------>Arrow Function are not hoisted. They are declared with let or const. So they are in the TDZ
// console.log(addVar(5, 5));//----> addVar is undefined since it is declared with VAR

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

const addArw = (a, b) => a + b;

var addVar = function (a, b) {
  return a + b;
};
