'use strict';
/*We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (...players) {
    for (const player of players) {
      console.log('Scored By ---->', player);
    }
    console.log('Total no of goals is ', players.length);
  },
};

// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// const players1 = game.players[0];
// const players2 = game.players[1];
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2. The first player in any player array is the goalkeeper and the others are field
// // players. For Bayern Munich (team 1) create one variable ('gk') with the
// // goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// // field players
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22
// // players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('players1Final') containing all the original team1 players plus
// // 'Thiago', 'Coutinho' and 'Perisic'

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called
// // 'team1', 'draw' and 'team2')

// // const { team1, x: draw, team2 } = game.odds;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player
// // names (not an array) and prints each of them to the console, along with the
// // number of goals that were scored in total (number of player names passed in)
// game.printGoals('Ronaldo', 'Messi');
// game.printGoals(...game.scored);
// // 7. The team with the lower odd is more likely to win. Print to the console which
// // team is more likely to win, without using an if/else statement or the ternary
// // operator.

// team1 < team2 && console.log('Team 1 is likely to win');
// team1 > team2 && console.log('Team 2 is likely to win');

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

// ####################################################################################################################################################
// ####################################################################################################################################################
// ####################################################################################################################################################
// -----------------------------------------------------------CHALLENGE 2 --------------------------------------------------------
/*Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")


2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)


3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉


4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
*/

// Solution 1:
// const goals = game.scored;
// console.log(goals);
// for (let i = 0; i < goals.length; i++) {
//   const element = goals[i];
//   console.log(`Goal ${i + 1}: ${goals[i]}`);
// }

// // Solution 2
// const odds = Object.values(game.odds);
// console.log(odds);
// let sum = 0;
// for (const values of odds) {
//   sum += values;
// }

// console.log(sum / odds.length);

// // Solution 3

// const entries = Object.entries(game.odds);
// console.log(entries);
// for (const [keys, values] of entries) {
//   // const team = game[keys] ?? 'draw';
//   const teamStr = keys === 'x' ? 'draw' : `Victory ${game[keys]}`;
//   // console.log(keys);
//   // console.log(team);
//   console.log(`Odd of ${teamStr} is ${values}`);
// }

// // Solution 4
// const goalScored = game.scored;
// console.log(goalScored);
// const scorers = {};
// for (const players of Object.values(goalScored)) {
//   if (scorers[players]) {
//     scorers[players]++;
//   } else {
//     scorers[players] = 1;
//   }
// }

// console.log(scorers);

/*
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:
⚽
GOAL*/
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// // Solution 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // Solution 2
// gameEvents.delete(64);
// console.log(gameEvents);

//Solution 3

// Solution 4
for (const [key, value] of gameEvents) {
  const time = key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${time} ${key}:  ${value}`);
}
// console.log(gameEvents);
*/

/*
 ********************************************************************************************************************************************************
 ********************************************************************************************************************************************************
 ********************************************************************************************************************************************************
 ********************************************************************************************************************************************************
 ********************************************************************************************************************************************************
 */

/*
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');
const clickHandler = event => {
  const text = document.querySelector('textarea').value;
  console.log(text);
  const textArr = text.split('\n');
  console.log(textArr);

  // for (const str of textArr) {
  for (let i = 0; i < textArr.length; i++) {
    const lower = textArr[i].toLowerCase().trim().split('_');
    const answer =
      (lower[0] + lower[1][0].toUpperCase() + lower[1].slice(1)).padEnd(
        20,
        ' '
      ) + `${'✅'.repeat(i + 1)}`;
    console.log(answer);
  }
};
button.addEventListener('click', clickHandler);
*/

// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************
// ******************************************************************************************
// More String Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25\n+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/*
  Delayed Departure from FAO to TXL (11h25)
  
  */
const getCode = code => code.slice(0, 3).toUpperCase();

const rows = flights.split('+');
// console.log(rows);
for (const n of rows) {
  const [event, from, to, time] = n.split(';');
  // console.log(words);
  let eventR = event.replaceAll('_', ' ').trim();
  eventR = eventR.startsWith('Delayed') ? `⛔ ${eventR}` : eventR;
  // // console.log(event);
  // from = words[1].slice(0, 3).toUpperCase();
  // console.log(from);
  // to = words[2].slice(0, 3).toUpperCase();
  // console.log(to);
  // time = words[3].replace(':', 'h');
  // console.log(time);
  const output = `${eventR} from ${getCode(from)} to ${getCode(
    to
  )} (${time.replace(':', 'h')})`;
  console.log(output.padStart(60));
}
