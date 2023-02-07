'use strict';

// TODO: Get users name - prompt and alert greet back to user
let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Lets play a guessing game..please answer yes or no`);


// TODO: prompt 5 yes/no or y/n questions for the user to guess and alert when they are correct or incorrect

let questionOneGuess = prompt('Do I have a daughter?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y' || questionOneGuess === 'yeah'){
  alert('You are correct!');
} else if(questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('Sorry you are incorrect');
}



// TODO: give them a final message with their name in the alert
alert(`Thanks for playing ${userName}!`);

