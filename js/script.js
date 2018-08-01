'use strict';
/* eslint no-var: 0 */
/* eslint vars-on-top: 0 */
/* eslint prefer-const: 0 */
/* eslint arrow-parens: 0 */
/* eslint no-restricted-syntax: 0 */

// Game flow Day 1:
// 1. Greet the user.
// 2. Ask the user name.
// 3. Ask whether he wants to play.
// 4. Yes => Start loop with questions
// 4.1. Do you believe my full name is Aleksandr Vladimirovich?
// 4.2 I like motocycles. And all of those I had were - Harley-Davidson. Do you believe it?
// 4.3 I'm from Russia. And in Russia it's forbidden to talk during the class hours. And those who violate this order are expelled from school after a second official warning?
// 4.4 I went to Tibet. And climbed Everest - the North Face of it.
// 4.5 I came to the USA in a middle of 2016. And worked in 10 different states, including Texas, Massachusetts, Colorado, California, New York, Nevada and North Carolina. Do you believe it?
// 5. No => Sorry for inconvenience, the other parts of the page is under construction. So would you like to play?

// Page flow Day 2:
// +(content) add unordered list of my working experience
// +(content) add ordered list of my top places I wanted to visit
// (style) add background to the page
// (style) orginize fact concisely on the layout
// + (engine) add a question with controlled numeric input; four opps to answer; with tips whether the answer is too high or too low
// (engine) add a question with multiple correct answers stored in array; six tries to get any correct answer; with a rigth answers displayed whether the user guessed right or attempts exhausted
// +(engine) add final message with total number of questions answered correctly

// Greet and ask for the user name
var userName = prompt('My name is Alex. What is your name?');
alert('Hello ' + userName + '. I\'d like to offer you play a guessing game.');
console.log('The user entered: ' + userName);

// questions' pool
var questName = 'Do you believe my full name is Aleksandr Vladimirovich?';
var questMotoManufacturer =
  'I like motocycles. And all of those I had ' +
  'were - Harley-Davidson. Do you believe it?';
var questRussianSchools =
  'I\'m from Russia. And in russian schools it\'s forbidden to talk during the class ' +
  'hours. And those who violate this rule are expelled from school after a ' +
  'second official warning?';
var questTibet =
  'I went to Tibet. And climbed Everest - the North Face of it. Do you think it\'s true?';
var questStates =
  'I came to the USA in a middle of 2016. Since than I\'ve worked in 10 ' +
  'different states, including Texas, Massachusetts, Colorado, California, ' +
  'New York, Nevada and North Carolina. Do you believe it?';
var questNumeric = 'What is the meaning of life if it\'s filled with surprises?';
var questMultiCorrect = 'What country besides the USA and Russia I\'ve been?';

var answerTrue = 'You are correct!';
var answerFalse = 'It\'s not correct!';
var answerHigh = 'Too high!';
var answerLow = 'Too low!';
var attemptsExhausted = 'Exhausted all attempts!';
var possibleInput = ['yes', 'y', 'yep', 'no', 'n', 'nop'];
var answersYes = ['yes', 'y', 'yep'];
var answersNo = ['no', 'n', 'nop'];

// answers' pool
var answerName =
  'It\'s indeed long. I mean first + ' +
  'middle together are \'Aleksandr Vladimirovich\'.';
var answerMotoManufacturer = 'They were BMW.';
var answerRussianSchools =
  'Russian schools are stricter then schools in the USA. ' +
  'But not such strict.';
var answerTibet =
  'I was in Tibet and I was at the Everest\'s base camp, ' +
  'but I\'m not an alpinist and never climbed big mountains.';
var answerStates = 'I\'ve worked only in Greater Seattle area.';
var answerMultiCorrect = [
  'Mongolia',
  'Spain',
  'China',
  'Italy',
  'France',
  'Switzerland',
  'Netherlands'
];
var meaningLife = 42;
var answerNumeric = meaningLife + Math.floor(Math.random() * meaningLife);
var correctAnswersCounter = 0;

// UI part
// block of yes/no questions
while (!possibleInput.includes(userInputName)) {
  var userInputName = prompt(questName).toLowerCase();
  console.log('The user guess for the 1st question: ' + userInputName);
  if (
    answersYes.includes(userInputName) &&
    possibleInput.includes(userInputName)
  ) {
    alert(answerTrue + ' ' + answerName);
    correctAnswersCounter += 1;
  } else if (
    answersNo.includes(userInputName) &&
    possibleInput.includes(userInputName)
  ) {
    alert(answerFalse + ' ' + answerName);
  }
}

while (!possibleInput.includes(userInputMotoManufacturer)) {
  var userInputMotoManufacturer = prompt(questMotoManufacturer);
  console.log(
    'The user guess for the 2nd question: ' + userInputMotoManufacturer
  );
  if (
    answersYes.includes(userInputMotoManufacturer) &&
    possibleInput.includes(userInputMotoManufacturer)
  ) {
    alert(answerFalse + ' ' + answerMotoManufacturer);
  } else if (
    answersNo.includes(userInputMotoManufacturer) &&
    possibleInput.includes(userInputMotoManufacturer)
  ) {
    alert(answerTrue + ' ' + answerMotoManufacturer);
    correctAnswersCounter += 1;
  }
}

while (!possibleInput.includes(userInputRussianSchools)) {
  var userInputRussianSchools = prompt(questRussianSchools);
  console.log(
    'The user guess for the 3rd question: ' + userInputRussianSchools
  );
  if (
    answersYes.includes(userInputRussianSchools) &&
    possibleInput.includes(userInputRussianSchools)
  ) {
    alert(answerFalse + ' ' + answerRussianSchools);
  } else if (
    answersNo.includes(userInputRussianSchools) &&
    possibleInput.includes(userInputRussianSchools)
  ) {
    alert(answerTrue + ' ' + answerRussianSchools);
    correctAnswersCounter += 1;
  }
}

while (!possibleInput.includes(userInputTibet)) {
  var userInputTibet = prompt(questTibet);
  console.log('The user guess for the 4th question: ' + userInputTibet);
  if (
    answersYes.includes(userInputTibet) &&
    possibleInput.includes(userInputTibet)
  ) {
    alert(answerFalse + ' ' + answerTibet);
  } else if (
    answersNo.includes(userInputTibet) &&
    possibleInput.includes(userInputTibet)
  ) {
    alert(answerTrue + ' ' + answerTibet);
    correctAnswersCounter += 1;
  }
}

while (!possibleInput.includes(userInputStates)) {
  var userInputStates = prompt(questStates);
  console.log('The user guess for the 5th question: ' + userInputStates);
  if (
    answersYes.includes(userInputStates) &&
    possibleInput.includes(userInputStates)
  ) {
    alert(answerFalse + ' ' + answerStates);
  } else if (
    answersNo.includes(userInputStates) &&
    possibleInput.includes(userInputStates)
  ) {
    alert(answerTrue + ' ' + answerStates);
    correctAnswersCounter += 1;
  }
}

// numeric question
var i = 4;
console.group();
console.log('The random answer: ' + answerNumeric);
do {
  // ask for the number and check input type
  var userInputNumeric = prompt(questNumeric);
  console.log(
    'Expected number, got ' +
      userInputNumeric +
      '. Is it a number: ' +
      !isNaN(Number(userInputNumeric))
  );
  while (isNaN(Number(userInputNumeric))) {
    userInputNumeric = prompt(questNumeric);
    console.log(
      'Expected number, got ' +
        userInputNumeric +
        '. Is it a number: ' +
        !isNaN(Number(userInputNumeric))
    );
  }

  // check whether the user answer is correct
  userInputNumeric = Number(userInputNumeric);
  i -= 1;
  console.log(i + ' steps left');
  if (userInputNumeric > answerNumeric)
    alert(answerHigh + ' Attempts left: ' + i);
  else if (userInputNumeric < answerNumeric)
    alert(answerLow + ' Attempts left: ' + i);
  else if (userInputNumeric === answerNumeric) {
    alert(answerTrue);
    correctAnswersCounter += 1;
    console.log('Answer is correct');
  }
  if (i === 0 && userInputNumeric !== answerNumeric) alert(attemptsExhausted);
} while (i > 0 && userInputNumeric !== answerNumeric);
console.groupEnd();

// Question with multiple correct answers
var i = 6;
do {
  // ask for the country name
  var userInputMultiCorrect = prompt(questMultiCorrect);
  console.log('The user guess for the 7st question: ' + userInputMultiCorrect);

  // check whether the user answer is correct
  i -= 1;
  console.log(i + ' steps left');
  if (answerMultiCorrect.includes(userInputMultiCorrect)) {
    alert(answerTrue);
    correctAnswersCounter += 1;
    i = 0;
    console.log('Answer is correct');
  } else alert(answerFalse + ' Attempts left: ' + i);
} while (i > 0);

alert(
  'End of the game! ' +
    userName +
    ', you gave ' +
    correctAnswersCounter +
    ' correct answers out of 7. Congrats!'
);
