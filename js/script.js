"use strict";var userName=prompt("My name is Alex. What is your name?");alert("Hello "+userName+". I'd like to offer you play a guessing game."),console.log("The user entered: "+userName);var questName="Do you believe my full name is Aleksandr Vladimirovich?",questMotoManufacturer="I like motocycles. And all of those I had were - Harley-Davidson. Do you believe it?",questRussianSchools="I'm from Russia. And in russian schools it's forbidden to talk during the class hours. And those who violate this rule are expelled from school after a second official warning?",questTibet="I went to Tibet. And climbed Everest - the North Face of it. Do you think it's true?",questStates="I came to the USA in a middle of 2016. Since than I've worked in 10 different states, including Texas, Massachusetts, Colorado, California, New York, Nevada and North Carolina. Do you believe it?",answerTrue="You are correct!",answerFalse="It's not correct!",answerName="It's indeed long. I mean first + middle together are 'Aleksandr Vladimirovich'.",answerMotoManufacturer="They were BMW.",answerRussianSchools="Russian schools are stricter then schools in the USA. But not such strict.",answerTibet="I was in Tibet and I was at the Everest's base camp, but I'm not an alpinist and never climbed big mountains.",answerStates="I've worked only in Greater Seattle area.",userInputName=prompt(questName);console.log("The user guess for the 1st question: "+userInputName),gotYes(userInputName)?alert(answerTrue+" "+answerName):alert(answerFalse+" "+answerName);var userInputMotoManufacturer=prompt(questMotoManufacturer);console.log("The user guess for the 2nd question: "+userInputMotoManufacturer),gotYes(userInputMotoManufacturer)?alert(answerFalse+" "+answerMotoManufacturer):alert(answerTrue+" "+answerMotoManufacturer);var userInputRussianSchools=prompt(questRussianSchools);console.log("The user guess for the 3rd question: "+userInputRussianSchools),gotYes(userInputRussianSchools)?alert(answerFalse+" "+answerRussianSchools):alert(answerTrue+" "+answerRussianSchools);var userInputTibet=prompt(questTibet);console.log("The user guess for the 4th question: "+userInputTibet),gotYes(userInputTibet)?alert(answerFalse+" "+answerTibet):alert(answerTrue+" "+answerTibet);var userInputStates=prompt(questStates);function gotYes(e){var s=e.toString().toLowerCase();return"yes"===s||"yep"===s||"y"===s}console.log("The user guess for the 5th question: "+userInputStates),gotYes(userInputStates)?alert(answerFalse+" "+answerStates):alert(answerTrue+" "+answerStates);
//# sourceMappingURL=script.js.map
