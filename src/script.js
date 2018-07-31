'use strict';
/* eslint no-var: 0 */
/* eslint vars-on-top: 0 */
/* eslint prefer-const: 0 */
/* eslint arrow-parens: 0 */
/* eslint no-restricted-syntax: 0 */

// Game flow:
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

// Greet and ask for the user name
var userName = prompt('My name is Alex. What is your name?');
alert('Hello ' + userName + '. I\'d like to offer you play a guessing game.');

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

var answerTrue = 'You are correct!';
var answerFalse = 'It\'s not correct!';

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

// UI part
var userInputName = prompt(questName);
if (gotYes(userInputName)) alert(answerTrue + ' ' + answerName);
else alert(answerFalse + ' ' + answerName);

var userInputMotoManufacturer = prompt(questMotoManufacturer);
if (gotYes(userInputMotoManufacturer))
  alert(answerFalse + ' ' + answerMotoManufacturer);
else alert(answerTrue + ' ' + answerMotoManufacturer);

var userInputRussianSchools = prompt(questRussianSchools);
if (gotYes(userInputRussianSchools))
  alert(answerFalse + ' ' + answerRussianSchools);
else alert(answerTrue + ' ' + answerRussianSchools);

var userInputTibet = prompt(questTibet);
if (gotYes(userInputTibet)) alert(answerFalse + ' ' + answerTibet);
else alert(answerTrue + ' ' + answerTibet);

var userInputStates = prompt(questStates);
if (gotYes(userInputStates)) alert(answerFalse + ' ' + answerStates);
else alert(answerTrue + ' ' + answerStates);

// little helper function
function gotYes(input) {
  var inputLowerCase = input.toString().toLowerCase();
  return (
    inputLowerCase === 'yes' ||
    inputLowerCase === 'yep' ||
    inputLowerCase === 'y'
  );
}
