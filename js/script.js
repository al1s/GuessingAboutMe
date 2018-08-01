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
// (content) add unordered list of my working experience
// (content) add ordered list of my top places I wanted to visit
// (style) add background to the page
// (style) orginize fact concisely on the layout
// (engine) add a question with controlled numeric input; four opps to answer; with tips whether the answer is too high or too low
// (engine) add a question with multiple correct answers stored in array; six tries to get any correct answer; with a rigth answers displayed whether the user guessed right or attempts exhausted

() => {
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
  var questNumeric = 'What is the meaning of life if it filled with surprises?';
  var questMultiCorrect = 'What country besides the USA and Russia I\'ve been?';

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

  // UI part
  var userInputName = prompt(questName);
  console.log('The user guess for the 1st question: ' + userInputName);
  if (gotYes(userInputName)) alert(answerTrue + ' ' + answerName);
  else alert(answerFalse + ' ' + answerName);

  var userInputMotoManufacturer = prompt(questMotoManufacturer);
  console.log(
    'The user guess for the 2nd question: ' + userInputMotoManufacturer
  );
  if (gotYes(userInputMotoManufacturer))
    alert(answerFalse + ' ' + answerMotoManufacturer);
  else alert(answerTrue + ' ' + answerMotoManufacturer);

  var userInputRussianSchools = prompt(questRussianSchools);
  console.log(
    'The user guess for the 3rd question: ' + userInputRussianSchools
  );
  if (gotYes(userInputRussianSchools))
    alert(answerFalse + ' ' + answerRussianSchools);
  else alert(answerTrue + ' ' + answerRussianSchools);

  var userInputTibet = prompt(questTibet);
  console.log('The user guess for the 4th question: ' + userInputTibet);
  if (gotYes(userInputTibet)) alert(answerFalse + ' ' + answerTibet);
  else alert(answerTrue + ' ' + answerTibet);

  var userInputStates = prompt(questStates);
  console.log('The user guess for the 5th question: ' + userInputStates);
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
};
