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

const displayMovements = function (movement) {
  containerMovements.innerHTML = '';
  movement.forEach(function (mov, i) {
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

const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);
  // Display Balance
  calcDisplayBalance(acc);
  // Display SUmmary
  calcDisplaySummary(acc);
};

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
*/
