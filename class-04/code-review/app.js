'use strict';

// DONE: Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// ! NEEDS TO BE A NUMERIC INPUT

// DONE: Create a number for the user to guess

// DONE: Indicates through an alert if the guess is “too high”
// DONE: Alert if “too low”.
// DONE: Alert if they are correct

let myNum = 25;

for(let i = 0; i < 4; i++){
  let questionSix = +prompt('Guess what number I am thinking of?');

  if(questionSix > myNum){
    alert('Sorry too high! ');
  } else if(questionSix < myNum){
    alert('Sorry too low')
  } else if(questionSix === myNum){
    alert('Yay you are correct!');
    // i = 4;
    break;
  }
  if(i === 3){
    alert('Sorry you are out of attempts the answer was 25');
  }
}

// DONE: It should give the user exactly four opportunities to get the correct answer (LOOP).
// DONE: After all attempts have been exhausted, tell the user the correct answer.
// ! Consider using a loop of some sort

// DONE: Add a 7th question that has
// DONE: multiple possible correct answers that are stored in an array.

// TODO: Give the user 6 attempts to guess the correct answer.

function boyBandGuess(){
  let boyBands = ['backstreet boys', 'take that', 'one direction', 'bts'];

  for(let i = 0; i < 6; i++){   // slow loop i = 0
    let questionSeven = prompt('Guess one of my fav boybands').toLowerCase();
   // user's guess - nsync
    for(let j = 0; j < boyBands.length; j++){  // fast loop j = 0
      if(questionSeven === boyBands[j]){
        alert('OMG I LOOVVVEEE THEM!');
        i = 5;
        break;
      }
    }
  }

  alert(`Here are all my fav boybands: ${boyBands}`);
}

boyBandGuess();
// TODO: The guesses will end once the user guesses a correct answer or
// TODO: end loop when they run out of attempts.
// TODO: Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.
