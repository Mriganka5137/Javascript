'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// // SLICE method-------------  Does not mutates the original array
// console.log(arr.slice()); //------ Creates a shallow copy of the arr
// console.log([...arr]); //---------- Also Creates a shallow copy of the arr
// console.log(arr.slice(1)); //------ from index 1 to the end of arr
// console.log(arr.slice(1, 5)); //--------from index 1 to index 4
// console.log(arr.slice(-1)); //----------one element from the end
// console.log(arr.slice(-2)); //-------------two element from the end
// console.log(arr.slice(0, -1)); //-------from index 0 to -2 ... excluding -1 index

// // SPLICE--------- does mutates the original arr
// console.log(arr);
// console.log(arr.splice(1, 2)); //----------first parameter is the start index, 2nd parameter is the no of elements to be deleted
// console.log(arr);

// // REVERSE ------------mutates the original arr
// arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// let arr2 = [5, 4, 3, 2, 1];
// console.log(arr2.reverse()); //-------- Reverses the original arr2

// //CONCAT----------- Does not mutates the original array
// console.log(arr, arr2);
// console.log(arr.concat(arr2)); //-----two ways to concat two arrays
// console.log([...arr, ...arr2]); //-----two ways to concat two arrays
// console.log(arr, arr2);

// //JOIN------ Does not mutates the original arr
// console.log(arr.join(' - ')); //------returns a string by joining the character
// console.log(arr2.join(' - '));
// console.log(arr);

// // The New 'at' method
// console.log(arr);
// console.log(arr.at(0));

// //Previous methods
// console.log(arr[arr.length - 1]); //----- old way to extract last element
// console.log(arr.slice(-1)[0]); //----------old way
// console.log(arr.at(-1)); //---------- The new and efficient way to access last element

// // The 'at' method also works on strings
// const name = 'Mriganka';
// console.log(name.at(0)); //---------First letter
// console.log(name.at(-1)); //--------last letter

/*
//###############################################
//###############################################
//FOR EACH METHOD

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement} amount`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)} amount`);
  }
}

// If we need the index
for (const [i, movement] of movements.entries()) {
  //----------The order of index and the element needs to be in exact place like mentioned here
  if (movement > 0) {
    console.log(`Movement ${i + 1}:  You deposited ${movement} amount`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)} amount`);
  }
}

console.log('---------FOR EACH -------------');

// If we need the index, the element and the whole array in the calback
movements.forEach(function (movement, index, arr) {
  //--------- Take care of the order of the parameters
  if (movement > 0) {
    console.log(`Movement ${index + 1}:  You deposited ${movement} amount`);
  } else {
    console.log(
      `Movement ${index + 1}: You withdrew ${Math.abs(movement)} amount`
    );
  }
});
*/

// ForEach Method on Maps and Sets
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// Set
console.log('-------------SET------------');
const uniqueCurrency = new Set(['USD', 'INR', 'USD', 'GBP', 'AUD', 'INR']);
// console.log(uniqueCurrency);
uniqueCurrency.forEach(function (value, key, set) {
  // Key and Value are same in Set.
  console.log(`${key} : ${value}`);
});
*/

// --------- Map Method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementUSD = movements.map(map => map * 1.1);

console.log(movements);
console.log(movementUSD);
const movementDescription = movements.map(function (ele, i, arr) {
  return `Movement ${
    i + 1
  }: You ${ele > 0 ? 'deposited' : 'withdrew'} ${Math.abs(ele)} amount.`;
});
console.log(movementDescription);

const user = 'Steven Thomas Williams';
const username = user
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('');

console.log(username);
