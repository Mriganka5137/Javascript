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

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovements = function (movement, sort = false) {
  const movs = sort ? movement.slice().sort((a, b) => a - b) : movement;

  containerMovements.innerHTML = '';
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculating balance and displaying in the screen
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const balanceIn = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${balanceIn}€`;

  const balanceOut = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + Math.abs(mov), 0);

  labelSumOut.textContent = `${balanceOut}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, curr) => acc + curr, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const accounts = [account1, account2, account3, account4];

// ###########################################################
// ###########################################################
// CREATE USERNAME
const createUserNames = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUserNames(accounts);
// console.log(accounts);

// ###########################################################
// ###########################################################
// UPDATE UI
const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);
  // Display Balance
  calcDisplayBalance(acc);
  // Display SUmmary
  calcDisplaySummary(acc);
};

// ###########################################################
// ###########################################################
// LOGIN USER
let currentUser;

btnLogin.addEventListener('click', function (e) {
  // Prevent eventdefault because on submit button it rerenders
  e.preventDefault();
  currentUser = accounts.find(acc => acc.username === inputLoginUsername.value);
  // console.log(currentUser);

  if (currentUser?.pin === Number(inputLoginPin.value)) {
    // console.log('Login Successfull');
    labelWelcome.textContent = `Welcome back, ${
      currentUser.owner.split(' ')[0]
    }`;
    // Display UI
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur(); // this is for removing the focus state
    containerApp.style.opacity = 100;

    updateUI(currentUser);
  }
});

// ###########################################################
// ###########################################################
// TRANSFER MONEY
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  // console.log(receiverAcc, amount);

  if (
    amount > 0 &&
    receiverAcc &&
    currentUser.balance >= amount &&
    receiverAcc?.username !== currentUser.username
  ) {
    receiverAcc.movements.push(amount);
    currentUser.movements.push(-amount);

    // update UI
    updateUI(currentUser);
  }

  inputTransferAmount.value = inputTransferTo.value = '';
});

// ###########################################################
// ###########################################################
// REQUEST LOAN
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentUser.movements.some(mov => mov >= amount * 0.1)) {
    currentUser.movements.push(amount);
    updateUI(currentUser);
  }

  inputLoanAmount.value = '';
});
// ###########################################################
// ###########################################################
// CLOSE ACCOUNT
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentUser.username === inputCloseUsername.value &&
    currentUser.pin === Number(inputClosePin.value)
  ) {
    // console.log('close account');
    const index = accounts.findIndex(
      acc => acc.username === currentUser.username
    );

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }

  // Log out

  // Clear the form
  inputCloseUsername.value = inputClosePin.value = '';
});

// ###########################################################
// ###########################################################
// SORT BUTTON
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentUser.movements, !sorted);
  sorted = !sorted;
});

// Calculating the total amount in the BANK
// console.log(accounts);
const allMovements = accounts.map(mov => mov.movements);
// console.log(allMovements); // -------> Contains all the movements arrays
const allMovementsInBank = allMovements.flat();
// console.log(allMovementsInBank); //------->200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
const totalBalance = allMovementsInBank.reduce((acc, curr) => acc + curr, 0);
// console.log(totalBalance);

// Using chaining
const totalBalanceChaining = accounts
  .map(mov => mov.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);
// console.log(totalBalanceChaining);

//FLATMAP ---------> Maps and flats the arr
const totalBalanceFlatMap = accounts
  .flatMap(mov => mov.movements)
  .reduce((acc, curr) => acc + curr, 0);
// console.log(totalBalanceFlatMap);

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposit = movements.filter(mov => mov > 0);
// console.log(deposit);

const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// Reduce callback signature  function(accumulator, currentElement, currentIndex, array)
const balance = movements.reduce(function (acc, cur, i, arr) {
  return acc + cur;
}, 0);

// console.log(balance);

// Calculate Max
const max = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);

// In more readable way
const max2 = movements.reduce(function (acc, curr) {
  if (acc > curr) {
    return acc;
  } else {
    return curr;
  }
}, movements[0]);

// console.log(max);
// console.log(max2);

// Chaining of methods
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((acc, curr) => acc + curr, 0);

// console.log(totalDepositUSD);

// Find method ---> Similar to Filter method but it returns the first element that satisfies the condition
// Returns only one element .
console.log(movements);
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

// using find()
console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// using "for of"
// let jessicaAcc;
// for (const [i, acc] of accounts.entries()) {
//   console.log(i);
//   if (acc.owner === 'Jessica Davis') {
//     jessicaAcc = acc;
//     break;
//   }
// }

// console.log(jessicaAcc);


// INCLUDES method ---- Looks for equality---- if found return TRUE else FALSE

// Takes the value as parameter
console.log(arr1.includes(200));

// SOME method ---- CONDITION
console.log(arr1.some(mov => mov > 2000)); //------ TRUE
console.log(arr1.some(mov => mov > 20000)); //------ FALSE

// EVERY ------- returns TRUE only if all the elements satisfies the condition
console.log(arr1.every(mov => mov > 0 || mov < 0)); //---------TRUE
console.log(arr1.every(mov => mov > 0)); //--------------FALSE

const arr1 = [[200, 450], -400, 3000, [-650, -130], 70, 1300];
// FLAT --------- flaten the nested arrays into 1D
const flattedArr = arr1.flat();
console.log(flattedArr); // [200, 450, -400, 3000, -650, -130, 70, 1300]

// array with 2nd level nested array
const arr2 = [[[200, 450], -400], 3000, [-650, -130], 70, 1300];
console.log(arr2.flat()); //------[[ 200, 450], -400, 3000, -650, -130, 70, 1300]

// Flatting the array to 2nd level
console.log(arr2.flat(2)); //------[200, 450, -400, 3000, -650, -130, 70, 1300]
*/
/*
// SORT ---- sort  method by default sort the array alphabetically, even with numbers and mutates the original array
// STRINGS
const name = ['Mriganka', 'Kasturi', 'Labonya', 'Abhijeet', 'Rajdeep'];
name.sort();
// console.log(name);

// NUMBERS
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
movements.sort();
// console.log(movements); //[-130, -400, -650, 1300, 200, 3000, 450, 70]

// RETURN > 0, to keep the order
// RETURN < 0, to swap the position

// ASCENDING
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
// Shorthand
movements.sort((a, b) => a - b);
// console.log(movements); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

// DESCENDING
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
// SHORTHAND
movements.sort((a, b) => b - a);

// console.log(movements); //[3000, 1300, 450, 200, 70, -130, -400, -650]

// ARRAY.from() and ARRAY.fill() Methods
const x = new Array(1, 2); //------ Creates [1,2]
console.log(x);
const y = new Array(7); //-------Creates empty array of size 7
// y.fill(1); //-----Fills the empty array with 1 in every position
y.fill(5, 1, 5); //--------[empty, 5, 5, 5, 5, empty × 2]
console.log(y);

// Array.from() ---It provides a way to convert other objects, such as NodeList, Set, Map,
//  or a string, into a standard JavaScript array.
// Array.from(iterable, mapFunction, thisArg);
const arr = Array.from({ length: 1000 }, () => 1);
console.log(arr);

const newArr = Array.from({ length: 5 }, (ele, i) => i + 1);
console.log(newArr); //---[1, 2, 3, 4, 5]

const firstname = 'Mriganka';
console.log(Array.from(firstname)); //-------['M', 'r', 'i', 'g', 'a', 'n', 'k', 'a']
const nameArr = Array.from(firstname, (ele, i) => ele + i);
console.log(nameArr); //-----['M0', 'r1', 'i2', 'g3', 'a4', 'n5', 'k6', 'a7']

// Generate an array of 100 random dice roll
const dice = Array.from({ length: 100 }, (_, i) => {
  const num = Math.trunc(Math.random() * 10);
  if (num > 6) return num - 6;
  else return num;
});
console.log(dice);

labelBalance.addEventListener('click', function () {
  const movementsVal = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', '')
  );
  console.log(movementsVal);
});
*/

// Practice
// 1. Balance of deposit
const balanceDeposit = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(balanceDeposit);

// 2.Number of deposits greater than 1000
// Method 1:
const numOfDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
console.log(numOfDeposits1000);

// Method 2: using reduce
const numOfDeposits1000v2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);

console.log(numOfDeposits1000v2);

// Create Object with total deposit and withdrawal
const balance = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      curr > 0 ? (sums.deposit += curr) : (sums.withdrawal += curr);
      return sums;
    },
    { deposit: 0, withdrawal: 0 }
  );
console.log(balance);

// 4. Capitalized the sentence
function capitalize(title) {
  const exceptions = ['a', 'an', 'the', 'is', 'on', 'in', 'of', 'to', 'and'];

  function f1(word) {
    return exceptions.includes(word)
      ? word
      : word[0].toUpperCase() + word.slice(1);
  }

  const answer = title
    .toLowerCase()
    .split(' ')
    .map(word => f1(word))
    .join(' ');

  return f1(answer);
}

console.log(capitalize('this is an example of Capitalize function'));
console.log(capitalize('And this is a and an to'));
